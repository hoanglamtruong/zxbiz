// sw.js - Service Worker đơn giản để kích hoạt PWA
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mission-control-store').then((cache) => box => cache.addAll([
      './index.html',
      './manifest.json',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});