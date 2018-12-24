const version = '0.0.1';
const cacheName = `fake-screens-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        return cache.addAll([
          `/`,
          '/index.html',
          'https://fonts.googleapis.com/css?family=Ubuntu:300,500',
        ]);
      })
      .catch(console.log),
  );
});

self.addEventListener('fetch', function(event) {
  if (!event.request.url.startsWith('chrome-extension')) {
    event.respondWith(
      caches.open(cacheName).then(function(cache) {
        return cache.match(event.request).then(function(response) {
          const fetchPromise = fetch(event.request)
            .then(function(networkResponse) {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch(console.log);
          return response || fetchPromise;
        });
      }),
    );
  }
});

// self.addEventListener('fetch', function(event) {
//   if (!event.request.url.startsWith('chrome-extension')) {
//     event.respondWith(cacheResources(event.request));
//   }
// });

// async function cacheResources(req) {
//   const cache = await caches.open(cacheName);
//   const cacheResponse = await cache.match(req);
//   const fetchPromise = fetch(req).then(networkResponse => {
//     cache.put(req, networkResponse.clone());
//     return networkResponse;
//   });
//   return cacheResponse || fetchPromise;
// }
