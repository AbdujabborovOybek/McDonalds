/* eslint-disable no-restricted-globals */
// Create PWA wep application

let CACHE_NAME = "mcdonalds-v1";
let urlsToCache = ["/index.html", "./offline.html"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function (err) {
        console.log(err);
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
      .catch(() => {
        if (event.request.mode === "navigate") {
          return caches.match("/offline.html");
        }
      })
  );
});
