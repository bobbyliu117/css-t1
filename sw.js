// version: 3
const staticCacheList = [
  '/',
  '/index.html',
  '/offline.html',
  '/css/reset.css',
  '/css/utils.css',
  '/css/header.css',
  '/css/portfolio.css',
  '/css/features.css',
  '/css/footer.css',
  '/js/main.js'
];

self.addEventListener('install', event => event.waitUntil(cacheStatic()));

self.addEventListener('activate', event => {
  console.log('activating service worker...');
  return self.clients.claim()
});

self.addEventListener('fetch', event => event.respondWith(cacheDynamic(event.request)));

async function cacheStatic() {
  console.log('installing service worker..');
  await clearCache();
  const cache = await caches.open('static');
  await cache.addAll(staticCacheList);
}

async function cacheDynamic(req) {
  const cache = await caches.open('dynamic');
  const cacheRes = await cache.match(req);
  if (cacheRes) return cacheRes;
  try {
    const fetchRes = await fetch(req);
    await cache.put(req, fetchRes.clone());
    return fetchRes;
  } catch (error) {
    const staticCache = await caches.open('static');
    return staticCache.match('/offline.html');
  }
}

async function clearCache() {
  const keys = await caches.keys();
  for (const key of keys) {
    await caches.delete(key);
  }
}