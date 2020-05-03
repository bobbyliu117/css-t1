var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(){
    console.log('sw.js registered..');
  })
}

window.addEventListener('beforeinstallprompt', function(event){
  event.preventDefault();
  deferredPrompt = event;
});

window.addEventListener('appinstalled', (event) => console.log('App Installed!', event));

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

document.querySelector('h1.logo').addEventListener('click', promptInstall);
