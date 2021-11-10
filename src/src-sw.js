console.log(`hello from service worker`);

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);

// workbox.skipWaiting();
workbox.precaching.precacheAndRoute(self.__precacheManifest);
