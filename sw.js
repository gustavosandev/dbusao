
//var CACHE_NAME = 'static-v1';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
        '/dbusao/',
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

/*
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
*/





