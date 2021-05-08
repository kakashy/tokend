// const oldcache = 'darkness_v2'
const cache = 'darkness_v3'
const assets = [
    '/',
    '/k_fav.png',
    '/index.html',
    '/global.css',
    '/bg.jpg',
    '/build',
    '/build/bundle.css',
    '/build/bundle.js',
    '/build/bundle.js.map',
]
self.addEventListener('install', installEvent=>{
    installEvent.waitUntil(
        caches.open(cache)
        .then(cache =>
            cache.addAll(assets))
            )
            // caches.delete(oldcache)
})
self.addEventListener('fetch', fetchEvent=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
        .then(res=>{
            return res || fetch(fetchEvent.request)
        })
    )
})