---
authorId: JessicaJustice
categories:
  - cypress
  - end-to-end testing
  - flaky tests
  - javascript
date: '2021-11-09'
slug: cypress-and-flaky-tests
title: 'Cypress and Flaky Tests: How to Handle Timeout Errors'
---

Cypress is an automated end-to-end testing framework with over three million weekly [open-source downloads](https://www.npmjs.com/package/cypress) at the time of this writing. It’s steady popularity isn’t without reason; the perks of using Cypress include, among other things, a snapshot visualization tool, automatic reloads after any change in your tests, and the ability to control network requests and responses without ever hitting your server.

I’ve enjoyed [the benefits Cypress offers](https://www.cypress.io/features/) after incorporating this tool on a number of projects, but like any new technology, there are certain learning curves to overcome. One learning opportunity I faced recently involved a locally passing test suite that also produced failing Cypress tests on CI. This issue sent me down a Stack Overflow rabbit hole, but I’ve since emerged with some newfound wisdom.

Below you’ll find an overview of this information, including a brief description of what flaky tests are, how they come to be, and how to address flaky Cypress tests when they appear locally or along your CI pipeline.

## What Is a Flaky Test?

The term ‘flaky test’ is a general one that can apply to any test written in any testing framework. A test is considered flaky when it gives you inconsistent outcomes across different runs, even when you’ve made no changes to your test code. You know you have a flaky test when you run your test suite and get a passing test initially, yet this same test fails on a subsequent run (or vice versa).

Flaky tests feel random because the reason for their inconsistency isn’t immediately obvious. Since your test code hasn’t changed, something else must be going on behind the scenes, and locating this issue can often feel tricky. However, depending on the testing framework you’re using, there are some common culprits for flaky tests, and curing yours may require a simple process of elimination.

For users of Cypress and other end-to-end testing frameworks, your flaky test is most likely the result of one of the following:

- The presence of animations on your UI
- The flaky test in question is not sufficiently isolated from other tests in your test suite
- The application state needed to pass a given test is not adequately set up prior to running the test
- Asynchronous operations are not completing before Cypress runs a command, causing a timeout error

## Flaky Cypress Tests Caused by Timeout Errors

As it turns out, my Cypress test suite CI failures involved a timeout issue. In general, a "timeout" can occur when a program does not receive a response within a specified amount of time, resulting in an error.

In the context of testing a web application, a timeout error may occur when the app runs an asynchronous operation that must complete before the application state and/or UI are ready to be tested. If a Cypress command or assertion executes prior to the completion of this operation, your test is likely to fail. However, if the time it takes this operation to complete fluctuates, it may also, on occasion, complete in enough time to produce a passing test. As you can imagine, this is a perfect recipe for producing a flaky test.

### How Cypress Anticipates Flaky Tests

Fortunately, [Cypress provides a number of default behaviors](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Cypress-is-Not-Like-jQuery) to anticipate “the asynchronous nature of web applications,” as well as further options that developers can employ manually in order to meet their application’s specific needs. One such default behavior involves automatically waiting for four seconds (ideally to allow your application to finish whatever operation it may be processing) before reaching a timeout. Developers may opt to [override this default](https://docs.cypress.io/guides/references/configuration#Timeouts) with any number of timeout declarations, either within a specific test, set of tests, or as a part of your global configuration.

```js
cy.get('[data-cy=input-box]', { timeout: 10000 }).type('Input');
cy.get('[data-cy=submit-button]', { timeout: 7000 }).click();
cy.get('[data-cy=input-box]', { timeout: 5000 }).should('not.have.value');
```

`The example above displays three cypress.get() commands with individual timeout specifications for each. Since Cypress sets timeouts in milliseconds, Cypress would wait 10 seconds, 7 seconds, and 5 second before looking for each associated element and executing the subsequent commands and assertions in this example, respectively.`

Developers may also choose to enable test retries in their global configurations. This will prompt Cypress to retry failed tests as many times as the developer specifies.

```js
"requestTimeout": 2000,
"defaultCommandTimeout": 5000,
"retries": 3
```

`The example above displays global configuration options within the cypress.json file. The first two will override Cypress default timeout settings, while the “retries” option specifies how many times Cypress should retry failed tests before moving on to the remainder of the test suite.`

Lastly, Cypress also offers a flaky test detection feature on the Cypress Dashboard. If the “test retries” option is enabled, this feature will flag any flaky tests in your test suite and offer analytics about the number and severity of these tests over time. It’s important to note that [these features](https://docs.cypress.io/guides/dashboard/flaky-test-management#Flake-Detection) are only accessible to developers who are a part of a Cypress Team Dashboard plan. In the absence of these features, developers should run their test suite multiple times without making changes to their code to determine whether it contains flaky tests.

## Ways to Manually Address Flaky Tests Caused by Timeout Errors

After identifying flaky tests in my test suite, I refactored my codebase to accommodate the timeout errors that were causing inconsistent results. However, after pushing my changes to the remote branch, I was now seeing my test specs pass locally, yet failing on CI. After rebasing with the main branch, and still seeing failing tests on CI, I began to search for more solutions that address Cypress testing timeout issues.

The following list represents a number of options available for developers experiencing similar Cypress errors, a combination of which I employed to yield a successful build.

### Require Cypress to Wait for a Network Request to Complete

If your flaky test is the result of Cypress executing commands and assertions prior to the completion of a necessary network request, you can intercept that request and require Cypress to wait for it to complete before it runs further commands.

To accomplish this, start by defining the intercepted route and assigning it an alias. This alias can then be called upon later, whenever the response to that request is necessary for testing purposes. You can then follow up with a callback function that will perform the Cypress commands and assertions integral to your test.

```js
cy.intercept('GET', '/api/v1/candidate/assessment-attempt*', {
  fixture: 'candidate/stubbedAssessments.json'
}).as('getActiveAssessments');

it('meets default question settings', () => {
  cy.wait('@getActiveAssessments').then(() => {
    cy.get('[data-cy=start-assessment-button]').should('exist');
  });
});
```

`The example above displays an intercepted network request with a specified method and route. This particular interception also stubs the response that this network request would have otherwise provided to our test, instead producing mock data found in the associated fixture file. Lastly, this interception is given an alias, getActiveAssessments, through use of the .as() command. The subsequent test in this code snippet then accesses this alias and requires Cypress to wait on its response before executing anything found in the following callback function.`

### Intercept All Network Requests to Control Response Times

Making network requests to your server to retrieve live data during the testing process may make sense in some situations. However, doing so opens up your testing environment to a few external variables that are harder to control for. If your server is down, or if the response time varies, or if there are multiple requests occurring at once, you may see flaky tests in your test suite. Intercepting all the relevant network requests in a given spec, and providing your own mock data as a response, may cut back on the variable nature of this network traffic. Instead of waiting for a response from your server, Cypress can quickly grab your mock data and continue running your tests.

### Break Your Test Suite Down Into Smaller Specs

Another way to handle timeout errors that cause flaky tests involves trimming down large spec files. Long spec files are not only difficult to maintain, they can also make pinpointing the cause of a flaky test more complicated. This is especially true if the application state isn’t set up properly within a test, nor cleaned up after a test has completed, because these factors can influence the subsequent tests in your test suite, causing more failures. If this is the case for multiple tests in a long spec file, you may find yourself playing a game of whack-a-mole, where adjusting one test leads to a failure in another.

In the context of timeout errors, smaller spec files have the advantage of limiting the network traffic required for your tests to complete properly. This limitation in and of itself can give you a better understanding of exactly what’s going on in your application at the time your test takes place, and what you need to control in order to write a passing test.

At the same time, breaking out chunks of related tests into their own independent spec file means isolating these tests from any unnecessary processes that were occurring in the larger test suite. Having a smaller number of tests and processes to run can put you in a better position to locate the cause of your flaky tests by process of elimination.

### Require Cypress to Wait for an Arbitrary Number of Seconds

The last option on this list involves using the `cy.wait()` command to [manually specify how many seconds Cypress should wait](https://docs.cypress.io/api/commands/wait#Time) at a given point in your test file. This solution is simple, but not totally reliable, so you should consider it as a sort of last resort or quick fix; while you may be able to pause Cypress long enough to avoid a timeout error, this outcome isn’t always guaranteed, especially if your application grows to introduce new features and behaviors later on. At the same time, implementing an arbitrary wait command may also end up being [totally unnecessary](https://docs.cypress.io/guides/references/best-practices#Unnecessary-Waiting). You may inadvertently pause to wait on an operation to complete that has already completed, for example.

```js
cy.wait(10000);
```

`The above command requires Cypress to wait 10 seconds before moving on to the subsequent code in a spec file.`

Using `cy.wait()` to specify an arbitrary number of seconds for Cypress to wait may still be useful in some contexts. If your application is relatively small, or if your spec files and tests are sufficiently isolated, the risk of implementing an unnecessary or unreliable wait command may be small enough to justify their use. However, you may want to exhaust other alternatives before turning to this solution, as too many of these commands can bloat your test suite run time and may actually point to a deeper issue involved in your test suite or web application.

## Key Takeaways

- A flaky test is any test that produces inconsistent results despite no changes to the test code being made between test runs.

- Sometimes flaky Cypress tests are the result of timeout errors; an asynchronous process in your application code may be completed before or after Cypress tests a given assertion, leading to inconsistent results.

- Cypress offers some default timeout settings to anticipate asynchronous processes in your application code. If these default safeguards fail, developers may opt to override them within their test code or within their global configurations.

- Developers may opt to manually address flaky tests caused by timeout errors by pursuing one or a combination of the following:

  - Use the Cypress intercept and aliasing commands to require Cypress to wait on your asynchronous operations to complete before running the next command or assertion.

  - Use the Cypress intercept command to control all the network traffic necessary to your tests to eliminate inconsistencies across test runs.

  - Break your test suite down into smaller specs to limit the number of asynchronous operations your tests rely on and to help locate the cause of flaky tests more quickly.

  - Use `cy.wait()` command to manually require Cypress to wait a specified number of seconds before running a given test.

### Conclusion

All of the ways to address a flaky Cypress test could likely fill a very thick book. Hopefully some of the options laid out here can aid in solving your issue or point you in the right direction. If you have more end-to-end testing questions or would like to speak with an experienced software consultant about your product, [contact the Ship Shape team](https://shipshape.io/contact/).
