// This part registers the Service worker in file sw.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js', {
        scope: '.' // <--- THIS BIT IS REQUIRED
    }).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// This part starts fetching resources for cache
self.addEventListener('fetch', (event) => {});

// This is the actual cache
var CACHE_NAME = 'offline-cache-beatquantum';
var urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/simple.css',
  '/assets/css/print.css',
  '/favicon.ico',
  '/availability.html',
  '/caa.html',
  '/criteria-cloud-vps.html',
  '/cyber.html',
  '/dkim.html',
  '/dmarc.html',
  '/dos.html',
  '/ddos.html',
  '/drdos.html',
  '/phishing.html',
  '/privacy.html',
  '/ransomware.html',
  '/security.html',
  '/spf.html',
  '/starttls.html',
  '/tools.html',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
