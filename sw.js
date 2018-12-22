const version = '0.0.1';
const cacheName = `fake-screens-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        '/index.html',
        '/index.js',
        'https://fonts.googleapis.com/css?family=Ubuntu:300,500',
      ]);
    }),
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        const fetchPromise = fetch(event.request).then(function(
          networkResponse,
        ) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    }),
  );
});
