
var CACHE_NAME = 'static-v1';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
     return cache.addAll([
        '/',
        '/index.html',
        '/estilo.css',
        '/index.js',
        '/manifest.json',
        '/bootstrap.min.css',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});


/*
var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        '/manifest.js',
        '/vendor.js',
        '/bootstrap.min.css',
      ]);
    })
  )
});




self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
}); */
