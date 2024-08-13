if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let c = {};
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r };
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(["./workbox-3c9d0171"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/PEX6nUX48g-ulskytBSJk/_buildManifest.js",
          revision: "cbe37854b6b919c76d3d3d353b24cd85"
        },
        {
          url: "/_next/static/PEX6nUX48g-ulskytBSJk/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933"
        },
        {
          url: "/_next/static/chunks/131-76906af143c76a7d.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/165-55ed26eaeca2c786.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/494-fc886b9acadada7f.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/58-673e3043f066c9de.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/679-0bd2cf5170afa45c.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/746.9a374c976a9f06c3.js",
          revision: "9a374c976a9f06c3"
        },
        {
          url: "/_next/static/chunks/app/(home)/page-861572ff1bee2a80.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-fcd93830d9bbf5bc.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/app/about/page-5fe2b3f8f18d26dc.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/app/compress/page-590b1055bec61bcd.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/app/layout-9e7e38ed6a3855eb.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/d24d231d-eb8cc226d49b2686.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/framework-6e06c675866dc992.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/main-app-174417797e9266ee.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/main-e4216257286a1f9a.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/pages/_app-352fb401ab678b78.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/pages/_error-a7bac88e914bc0c2.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3"
        },
        {
          url: "/_next/static/chunks/webpack-1312085650ad83f3.js",
          revision: "PEX6nUX48g-ulskytBSJk"
        },
        {
          url: "/_next/static/css/64fd016a0e407b97.css",
          revision: "64fd016a0e407b97"
        },
        {
          url: "/_next/static/media/0484562807a97172-s.p.woff2",
          revision: "b550bca8934bd86812d1f5e28c9cc1de"
        },
        {
          url: "/_next/static/media/0a03a6d30c07af2e-s.woff2",
          revision: "79da53ebaf3308c806394df4882b343d"
        },
        {
          url: "/_next/static/media/30cd8f99d32fa6e8-s.woff2",
          revision: "e5c1b944d9e3380a062bf911e26728a3"
        },
        {
          url: "/_next/static/media/3685d5506ce59a5b-s.p.woff2",
          revision: "aeb9bc90aacc596c561739a8765c2660"
        },
        {
          url: "/_next/static/media/3cf9d666e297f400-s.woff2",
          revision: "8f14a785783951142ef1ed2636c0e44c"
        },
        {
          url: "/_next/static/media/3f9466fc53690ba7-s.woff2",
          revision: "173212bc7f69965527b29df7419d615c"
        },
        {
          url: "/_next/static/media/46c21389e888bf13-s.woff2",
          revision: "272930c09ba14c81bb294be1fe18b049"
        },
        {
          url: "/_next/static/media/4c285fdca692ea22-s.p.woff2",
          revision: "42d3308e3aca8742731f63154187bdd7"
        },
        {
          url: "/_next/static/media/6245472ced48d3be-s.p.woff2",
          revision: "335da181ffc3c425a4abf0e8fc0f1e42"
        },
        {
          url: "/_next/static/media/7db6c35d839a711c-s.p.woff2",
          revision: "de2b6fe4e663c0669007e5b501c2026b"
        },
        {
          url: "/_next/static/media/8888a3826f4a3af4-s.p.woff2",
          revision: "792477d09826b11d1e5a611162c9797a"
        },
        {
          url: "/_next/static/media/8d346445d24062b5-s.woff2",
          revision: "c965abed1310982a4d2148cb81765b56"
        },
        {
          url: "/_next/static/media/93a6e477e1480c92-s.woff2",
          revision: "63a7e6a745b18221c0c3b486a3317ae4"
        },
        {
          url: "/_next/static/media/b957ea75a84b6ea7-s.p.woff2",
          revision: "0bd523f6049956faaf43c254a719d06a"
        },
        {
          url: "/_next/static/media/dfa2ccbeca9e77a8-s.woff2",
          revision: "4d88c8f550833714f8721257780b9000"
        },
        {
          url: "/_next/static/media/eafabf029ad39a43-s.p.woff2",
          revision: "43751174b6b810eb169101a20d8c26f8"
        },
        {
          url: "/_next/static/media/f5767adec246cdc1-s.woff2",
          revision: "7a1c6501aa2b3327c1cf556362a851cb"
        },
        { url: "/favicon.ico", revision: "c1baec94244fcdf5acdb77766711a1f2" },
        {
          url: "/fonts/index.ts",
          revision: "fb0a393ceb1c5f2512f309e2f1f97ed5"
        },
        {
          url: "/icon-192x192.png",
          revision: "bde261ebf3308312c62a538a959dec3b"
        },
        {
          url: "/icon-256x256.png",
          revision: "da6ea06bb9ee52ebb0d658f06a5d45cb"
        },
        {
          url: "/icon-384x384.png",
          revision: "5139ae3b6421a7e7fb7b262656134aae"
        },
        {
          url: "/icon-512x512.png",
          revision: "d64b6191ba5ac2d6ed46bbfabbbb2c0d"
        },
        { url: "/manifest.json", revision: "2647b514c0dc32c5aa371d17379a3408" },
        {
          url: "/modifica-logo.svg",
          revision: "b05d5d9bd4128ff7de622b47528652fd"
        }
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers
                  })
                : e
          }
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      "GET"
    );
});
