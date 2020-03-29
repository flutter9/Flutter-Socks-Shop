'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "fc789dd6cfd383214b0a94228ae61550",
"/assets/LICENSE": "ea69fd9991df55c60b4ede364a97ac1c",
"/assets/AssetManifest.json": "f6eb6b182a348b2808df4f7dc222b47f",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/details-page-header.png": "9d4029d1dfd3ca90e4d435bf3c33e34a",
"/assets/assets/header-socks.png": "95493d9626f9a1cabf8eb38fa7ff73b0",
"/assets/assets/socks-two.png": "d86f4e7b38d811ad230190e6f4dc7b02",
"/assets/assets/menu.png": "3056dffb6860cc53aa63f3dd0f74fb63",
"/assets/assets/socks-icon.png": "3ead410c0b528c02fc69112d6b2c11d1",
"/assets/assets/socks-icon-left.png": "4f2da29d7245c1aaf075575a687e44f9",
"/assets/assets/socks-one.png": "c1a8bba98cc1d263096303121334a4e8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
