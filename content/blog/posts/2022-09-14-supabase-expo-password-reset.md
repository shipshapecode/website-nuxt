---
authorId: ncrmro
categories: 
  - supabase
  - rollup
date: '2022-09-15'
slug: supabase-account-password-reset-cli
title: How to reset a supabase account password without working frontend.
---

# Why

When doing some greenfield work with a native application and [Supabase](https://supabase.com/) there was not an easy
way to set users' passwords without having a way to handle the redirect back from Supabase.


# What

The script found in the snippet below allows us to set a password for a live email that we have access to that has been added to our supabase
instance.

# How


The [supabase-js](https://github.com/supabase/supabase-js) package provides the [passwordResetForEmail function](https://supabase.com/docs/reference/javascript/auth-api-resetpasswordforemail).

Normally, your server calls this when a password reset is attempted. The user then receives an email with a URL and a password reset token.

The link in the email takes us to a supabase URL which then redirects us back to our server.


```javascript
/**
 * This script is the easiest way to set a password.
 * Make sure TEST_USER_EMAIL and TEST_USER_PASSWORD are set in your dotenv file
 * Run node set-pw.js
 * This will email you a link to supabase which will redirect you to localhost
 * with a token in the query param
 * the script will wait for you to input the full URL
 * Example URL https://ktpqdrvkcmewncabhiyt.supabase.co/auth/v1/verify?token=FAKE_TOKEN&type=recovery&redirect_to=http://localhost:3000
 */
//
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const { SUPABASE_URL, SUPABASE_KEY, TEST_USER_EMAIL, TEST_USER_PASSWORD } =
  process.env;

if (!SUPABASE_URL || !SUPABASE_KEY)
  throw new Error("Supabase credentials where not set (check .env.example?)");

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

if (!TEST_USER_EMAIL || !TEST_USER_PASSWORD)
  throw new Error(
    "Make sure TEST_USER_EMAIL is set to your email and TEST_USER_PASSWORD is defined"
  );

supabase.auth.api
  .resetPasswordForEmail(TEST_USER_EMAIL)
  .then(async () => {
    console.log("Password reset email sent.");
    console.log(
      "Click the link in the email which will redirect you to localhost"
    );
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      "Copy the localhost URL and paste here: ",
      async (passwordResetURL) => {
        // Supabase query params use a hashtag for some reason...
        const token = new URLSearchParams(passwordResetURL.split("#")[1]).get(
          "access_token"
        );
        console.log(`Token was ${token}`);
        const { error, data } = await supabase.auth.api.updateUser(token, {
          password: TEST_USER_PASSWORD,
        });
        if (error) {
          console.log(error);
          throw error;
        } else {
          console.log("Data returned", data);
        }
        readline.close();
      }
    );
  })
  .catch((e) => console.log(`ERROR ${e}`));
```
