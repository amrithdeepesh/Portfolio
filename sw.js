// Progressive Web App Service Worker for Amrith Deepesh Portfolio
const CACHE_NAME = 'amrith-portfolio-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/pwa-icon-192.png',
  './assets/pwa-icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/favicon-32x32.png',
  './certficates/c_sharp.png',
  './certficates/nasscom_page-0001.jpg',
  './certficates/infosys_page-0001.jpg',
  './certficates/career essential.jpg',
  './certficates/python for maths.jpg',
  './certficates/certificate course_page-0001.jpg',
  './certficates/Amrith Kaggle- Python.png',
  './certficates/aws security fundamentals_page-0001.jpg',
  './certficates/AIFundamentalsFoundationsforUnderstandingAI_Badge20261016-20-fb5fdp_page-0001.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Stale-While-Revalidate strategy for lightning-fast loads
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
