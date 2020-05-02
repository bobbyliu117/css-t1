self.addEventListener('install', function (event){
  console.log('v11', event);
});

self.addEventListener('activate', function (event){
  console.log('v2', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event){
  event.respondWith(fetch(event.request));
});
