// version: 1

self.addEventListener('install', event => event.waitUntil(cacheStatic()));

self.addEventListener('activate', event => self.clients.claim());

self.addEventListener('fetch', event => event.respondWith(cacheDynamic(event.request)));

function cacheStatic() {
  return caches.open('static').then(cache => {
    cache.addAll([
      '/',
      '/index.html',
      '/css/reset.css',
      '/css/utils.css',
      '/css/header.css',
      '/css/portfolio.css',
      '/css/features.css',
      '/css/footer.css',
      '/js/main.js'
    ])
  })
}

async function cacheDynamic(req) {
  const cache = await caches.open('dynamic');
  const cacheRes = await cache.match(req);
  if (cacheRes) return cacheRes;
  const fetchRes = await fetch(req);
  event.waitUntil(
    cache.put(req, fetchRes.clone())
  );
  return fetchRes;
}