// 最低限のservice worker。
// このしおりはオフラインキャッシュ等は行わず、
// Android Chromeの「アプリとしてインストール」条件を満たすためだけに登録しています。
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
