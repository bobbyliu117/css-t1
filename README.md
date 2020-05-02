## [Demo](https://bobbyliu117.github.io/css-t1/)

**Fontawesome**
```html
<script src="https://kit.fontawesome.com/59c082e949.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

<i class="fa fa-cog fa-2x fa-spin"></i>
<i class="fab fa-github fa-5x fa-fw"></i>
```

**remove li style**

`ul { list-style: none; }`

**background**
```js
// b-image b-repeat b-position/b-size
background: url('../images/img1.jpg') no-repeat  center  center/cover;
```

**文字+背景居中**
```js
a {
  display: block;
  text-align: center;
  line-height: 60px;
}
```

**VS Code Lorem shortcut**

`lorem15 enter` 15 words

`lorem*5 enter` 5 lines

 **背景图片Overlay**
 `z-index` [won't work](https://stackoverflow.com/a/9191845) in position static (default)

 `z-index` not needed if overlay is background (1st element, 1st render -> bg)
 ```js
 #showcase { position: relative; }
 #showcase .overlay {
  background: #12121299;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#showcase .container {
  position: relative;
  z-index: 1;
```

**Use `text-align` to center `inline-block`**
```js
.container { text-align: center; }
.container a { display: inline-block; }
```

**input and label**

`label for` -> `input id`

`label name` -> form-data key for form `submit` action
```js
<label for="name">Name</label>
<input id="name" type="text" name="name">
```

**textarea**

Must close!

use `width:100%` to expand the whole line. display block won't work, `input` same
```js
<textarea id="message" name="message"></textarea>
```

**outline attribute**

focus时的border，`input`, `textarea`, `button` 等

**html特殊字符**

© `&copy;`

**media query**
1. `<link rel="stylesheet" media="screen and (max-width: 768px)" href="mobile.css">`
2. `@media(min-width:501px) and (max-width:500px) {}`

# PWA

## Manifest

### Setup

```html
<link rel="manifest" href="manifest.json">
```
[Manifest Entries](https://developer.mozilla.org/en-US/docs/Web/Manifest)

```
name, short_name, description, icons:[src,size,type], start_url, display, scope, related_applications
```
Apple icon
```
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

## Service Worker

### Setup
Scope is where `sw.js` sits -> root to scope global
```js
navigator.serviceWorker.register('/sw.js').then(function(){})
```
Add listener
```js
// install, activate, fetch
self.addEventListener('install', function (event){});
```
Fixer line for `activate`
```js
return self.clients.claim(); // a promise
```

### Fetch Event & Cache
实现Network Proxy -> Cache
```js
self.addEventListener('install', event => event.waitUntil(cacheStatic()));
self.addEventListener('fetch', event => event.respondWith(cacheDynamic(event.request)));

function cacheStatic() {
  return caches.open('static').then(cache => cache.addAll([]));
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
```

### Clear Cache
```js
// wrap in event.waitUntil, which takes a Promise as param
caches.keys().then(keys => Promise.all(keys.map(key => {
  return caches.delete(key);
})));
```


### [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```js
fetch(url, {method,headers,body,mode,cache,credentials,redirect,referrerPolicy})
```

### App Install Banner
`beforeinstallprompt`
```
window.addEventListener('beforeinstallprompt', function(event){
  event.preventDefault();
  var deferredPrompt = event;
});
```
`appinstalled`
```js
window.addEventListener('appinstalled', (event) => {}));
```


```js
function promptInstall() {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function(choiseResult){
    if (choiceResult.outcome === 'dismissed') {
      console.log('Not installed')
    } else {
      console.log('Installing app...')
    }
    deferredPrompt = null;
  });
}
```

