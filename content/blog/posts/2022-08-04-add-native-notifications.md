---
authorId: chuckcarpenter
categories:
  - notifications
  - javascript
date: ''
slug: add-desktop-notifications
title: Adding desktop notifications to your app/site
---

There are times when your application needs to inform users to act on something more
timely than a normal notification (often known as toast notifications) may allow.
If you need a user to do something and can't wait until they return to the application for them to notice or just want to engage them when something new is available, perhaps desktop notifications are a good idea for your app.

This is a feature supported in all modern browers (sorry Internet Explorer, you're not invited). The user will have to opt in though and they will also have to allow notifications in their OS settings. Then you can notify them on the system level rather than just within your web browser page/tab.

## What we'll work on today

Let's create a basic notification that checks for and then gets the user's permission. Then we can show a notification about our cool new blog posts. We can then add some actions to allow the user to opt it future notifications as to when new posts are published. There's more to it, but we'll get to the nuances shortly.

For this I'm going to create a singleton pattern file since I just need it to load and run when loaded. I find this to be a simple and readable pattern for our needs.

```js
class NotificationService {
  constructor() {
    // whatever you want once instance is created
  }

  async _isShowNotificationPermitted() {
    // ...
  }

  async _showNotification() {
    // ...
  }
}

new NotificationService();
```

Using this javascript class I am adding a couple methods to handle checking the permission settings, requesting permissions, and then showing a notification if granted. Let's start with checking for and asking for permission to show notifications from our site.  

```js
async _isShowNotificationPermitted() {
  if ('Notification' in window) {
    let { permission } = Notification;
    if (permission !== 'granted') {
      permission =  await Notification.requestPermission();
    }
    if (permission !== 'denied') {
      return true;
    }
  }

  return false;
}
```

I'll walk through the method a bit. First we're just basically checking for support in the browser in the off chance your user doesn't have a supported browser, otherwise why have those needless errors? The default value from `Notification.permission` is just that, `default`, which we treat essentially the same as `denied`. In that case we trigger `requestPermission()` in the API to request access from the user. If the user approves, we can move on to showing them notifications until this permission is revoked. Let's look then at a method for showing one.

```js
async _showNotification() {
  const permission = await this._isShowNotificationPermitted();

  if (permission !== 'denied') {
    new Notification('Be notified of new posts', {
      body: 'Let us notifiy you of new posts on our site!',
    });
  }
}
```

So this one is a bit more straightforward. We check permission as noted in the previous code example, then as long as we're not denied then a notification can be shown. There's really only one required argument, a title. I'm adding a basic option for body text here as well. This will just show a notification and the user can dismiss it or select to go to browser settings if they'd like to change the permissions. Let's make sure our instance fires off when loaded before we move on.

```js
class NotificationService {
  constructor() {
    this._showNotification();
  }

// ...the rest of the class
```

This gets us a basic notification, but without any interaction from the user. To do that, we have to add actions to the options hash that you can watch and respond too. The spec requires that we only can do that if we're triggering the notification via a service worker and responding to events there. Let's create a basic service worker file and add a listener. Create a file called `service-worker.js` and add the following code.

```js
self.addEventListener('notificationclick', function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();

  // Do something as the result of the notification click
  const promiseChain = doSomething();
  event.waitUntil(promiseChain);
});
```

In this we're watching for a `notificationclick` event and want to do something with that once we know the user has interacted with it. We'll also want to register our worker in the notification service and have it trigger the notification flow.

```js
_startServiceWorker(notificationService) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      registration.addEventListener('updatefound', function() {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        const installingWorker = registration.installing;
        console.log('A new service worker is being installed:',
          installingWorker);

        // You can listen for changes to the installing service worker's
        // state via installingWorker.onstatechange
      });
      
      notificationService._showNotification(registration);
    })
    .catch(function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }
}
```

In the above, we check for service worker support and then register our newly created worker file. After it's installled we show the notification in an updated `_showNotification` method. 

```js
async _showNotification(worker) {
  const permission = await this._isShowNotificationPermitted();
  if (permission !== 'denied') {
    worker.showNotification('Be notified of new posts', {
      body: 'Let us notifiy you of new posts on our site!',
      requireInteraction: true,
      actions: [
        {
          action: 'dismiss',
          title: 'Dismiss'
        },
        {
          action: 'subscribe',
          title: 'Subscribe'
        }
      ]
    });
  }
}
```

The difference now is that we can set actions on the notification options and allow the user to select something from that notification. This click will get passed to the worker and given what the action is, we can react and do something. So, let's do just that and act on the user's response, which we're requiring with `requireInteraction`.

```js
self.addEventListener('notificationclick', function(event) {
  const { action, notification } = event;
  notification.close();
  
  if (action === 'subscribe') {
    const promiseChain = clients.openWindow('https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fshipshape.io%2Ffeed.xml');
    event.waitUntil(promiseChain);
  }
});
```

Here I've updated the worker to check for an action if the user click's `subscribe` button in the notification, when it's captured and checked we open a new window with out RSS subscription link. If they click `dismiss`, nothing happens and the notification is dismissed. In case you want some kind of persistence, we could add some way to track the user selecting to dismiss and save that state to something like localStorage. 

## In closing

This is just one example of how you can add desktop notifications to an app. Be sure you don't overload the reasons they are triggered on your site as not to inhibit engagement and make sure to use this power for good. If you would like, please feel free to [reach out to us](https://shipshape.io/contact/) with any questions or requests for future discssions around this topic.




