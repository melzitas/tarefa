const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/tarefa/',
    '/tarefa/index.html',
    '/tarefa/style.css',
    '/tarefa/manifest.json',
    '/tarefa/icons/icon-192x192.png',
    '/tarefa/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});


