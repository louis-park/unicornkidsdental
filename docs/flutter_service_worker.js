'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "afe5bb54efaf24ed930bb865c7c0a87e",
"version.json": "e1281d4093353210d0afce52f5ca348a",
"index.html": "aa7724f6ad96ca12cdff86ef1647aab9",
"/": "aa7724f6ad96ca12cdff86ef1647aab9",
"main.dart.js": "972e6575ff0fd5e89a7136ca2a9232c7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-192.svg": "7215ee9c7d9dc229d2921a40e899ec5f",
"icons/Icon-192.png": "7d24b5919769a5df1764775a6b4f331b",
"icons/Icon-512.svg": "3ba810369a3ee0e7088faa9b5dfefb38",
"icons/favicon.png": "7d24b5919769a5df1764775a6b4f331b",
"icons/convert.html": "4c8a0e8c4bdaed7c8790b22bb94b6166",
"icons/Icon-512.png": "f6a70a0b42bb1faa8e17e8b3d93fe596",
"manifest.json": "3f5d4497b645f877cfe263380a5d2686",
"assets/AssetManifest.json": "2142915a5c21e9f34e4e86e1158bef22",
"assets/NOTICES": "542c4e266f6d1e25c8ca1be14e4292c0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "22e8a9bf808866273cf98b940a4893cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "62c177b6f90c118e547ccb33f3cd114a",
"assets/fonts/MaterialIcons-Regular.otf": "c8fa409e42bb12895be9802d6d3a56df",
"assets/assets/images/%25EC%2598%2581%25EC%259C%25A0%25EC%2595%2584_%25ED%2595%2599%25EA%25B5%2590_%25EA%25B5%25AC%25EA%25B0%2595%25EA%25B2%2580%25EC%25A7%2584.jpeg": "8c216ab8dd6ad3fa9a6fd35f0a6dc213",
"assets/assets/images/%25EB%25B3%2591%25EC%259B%2590%25EC%2586%258C%25EA%25B0%259C.jpeg": "d63b70b04c42f910d6469a4975722135",
"assets/assets/images/%25EB%25A9%2594%25EC%259D%25B83.png": "7994677d4879da94679e74251a500ec0",
"assets/assets/images/%25EA%25B5%25AC%25EA%25B0%2595%25EC%2586%258C%25EC%2588%2598%25EC%2588%25A0.jpeg": "887c322149d3cfe002f477611d5ec327",
"assets/assets/images/%25EC%25B9%2598%25EA%25B3%25BC%25EB%2582%25B4%25EB%25B6%2580.png": "fbcce1c9dfa3ce4be24870057ad84aad",
"assets/assets/images/%25EC%2588%2598%25EB%25A9%25B4%25EC%25A7%2584%25EC%25A0%2595%25EC%25B9%2598%25EB%25A3%258C.jpeg": "1807cede0fc8e300096cd48209a1ed87",
"assets/assets/images/%25EC%2598%2588%25EB%25B0%25A9%25EC%25B9%2598%25EB%25A3%258C.jpeg": "a4bc7d9a4e70c8efe66a1cdb288480c0",
"assets/assets/images/%25EC%259D%2598%25EB%25A3%258C%25EC%25A7%2584%25EC%2586%258C%25EA%25B0%259C.jpeg": "8ba7ca4bcf2974f684704d935a9368d6",
"assets/assets/images/logo_icon.png": "576f8a0117260dda538f124f838b57a2",
"assets/assets/images/%25EC%25B6%25A9%25EC%25B9%2598%25EC%25B9%2598%25EB%25A3%258C.jpeg": "3ce392fb0f772d5d4653d2c3b68f3be8",
"assets/assets/images/%25EC%2584%25B1%25EC%259E%25A5%25EA%25B8%25B0%25EA%25B5%2590%25EC%25A0%2595%25EC%25B9%2598%25EB%25A3%258C.jpeg": "8067c348a13283258c6a333e40b9ee2d",
"assets/assets/images/%25EC%25A7%2580%25EB%258F%2584.png": "6b04f20dcf3c442b266aef3b4d813475",
"assets/assets/images/%25EC%25A7%2584%25EB%25A3%258C%25EC%258B%259C%25EA%25B0%2584.jpeg": "f6f936a51b0cd218366b0c2e92a5afee",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
