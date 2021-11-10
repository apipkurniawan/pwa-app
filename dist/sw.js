importScripts("precache-manifest.c85943788c2522e1dee67bdee393b16a.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

console.log(`hello from service worker`);

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);

// workbox.skipWaiting();
workbox.precaching.precacheAndRoute(self.__precacheManifest);

