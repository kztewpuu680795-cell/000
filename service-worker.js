const CACHE_NAME = 'media-cache-v2'; // Changed cache name to force update
const urlsToCache = [
  'index.html',
  'worker.js',
  // Add all your media URLs here.  Make sure they match exactly what's in your HTML.
  'https://files.catbox.moe/b73eoz.mp4',
  'https://files.catbox.moe/lq7ut6.jpg',
  'https://files.catbox.moe/in5uez.jpg',
  'https://files.catbox.moe/fz57ex.mp4',
  'https://files.catbox.moe/8wkazh.jpg',
  'https://files.catbox.moe/loausl.mp4',
  'https://files.catbox.moe/c7v5ko.jpg',
  'https://files.catbox.moe/qkkx6i.mp4',
  'https://files.catbox.moe/06l4k7.jpg',
  'https://files.catbox.moe/w23som.mp4',
  'https://files.catbox.moe/4mcv1u.jpg',
  'https://files.catbox.moe/qkzsp6.mp4',
  'https://files.catbox.moe/8sbfgc.jpg',
  'https://files.catbox.moe/ddqrde.mp4',
  'https://files.catbox.moe/juwmpj.jpg',
  'https://files.catbox.moe/60753g.mp4',
  'https://files.catbox.moe/epdboz.jpg',
  'https://files.catbox.moe/ncsdko.mp4',
  'https://files.catbox.moe/a3ixgf.jpg',
  'https://files.catbox.moe/kbjqs9.mp4',
  'https://files.catbox.moe/48h9nu.jpg',
  'https://files.catbox.moe/akku99.jpg',
  'https://files.catbox.moe/a4cza7.mp4',
  'https://files.catbox.moe/3w24j7.jpg',
  'https://files.catbox.moe/h551ft.mp4',
  'https://files.catbox.moe/27075e.jpg',
  'https://files.catbox.moe/f88n42.mp4',
  'https://files.catbox.moe/qj7vzs.jpg',
  'https://files.catbox.moe/hzj47q.mp4',
  'https://files.catbox.moe/ux1p1y.jpg',
  'https://files.catbox.moe/0g5f13.mp4',
  'https://files.catbox.moe/6y9v52.jpg',
  'https://files.catbox.moe/a70wtl.mp4',
  'https://files.catbox.moe/n5h0er.jpg',
  'https://files.catbox.moe/3wpo43.mp4',
  'https://files.catbox.moe/11239f.jpg',
  'https://files.catbox.moe/6ysloc.mp4',
  'https://files.catbox.moe/62x44q.jpg',
  'https://files.catbox.moe/g533px.mp4',
  'https://files.catbox.moe/y35f5b.jpg',
  'https://files.catbox.moe/c6l31d.mp4',
  'https://files.catbox.moe/g3f48w.jpg',
  'https://files.catbox.moe/80jk6j.mp4',
  'https://files.catbox.moe/6633ee.jpg',
  'https://files.catbox.moe/fxtn92.mp4',
  'https://files.catbox.moe/g49g8q.jpg',
  'https://files.catbox.moe/s5w440.mp4',
  'https://files.catbox.moe/g347w8.jpg',
  'https://files.catbox.moe/4x3tve.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Failed to open cache or add all URLs:', error);
        throw error; // Re-throw to signal installation failure
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not in cache - return