(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1585740045524;

	const files = [
		"service-worker-index.html",
		".DS_Store",
		"bulma.css",
		"favicon.png",
		"global.css",
		"great-success.png",
		"images/aaa.jpg",
		"images/bbb.jpg",
		"images/ccc.jpg",
		"images/ddd.jpg",
		"images/eee.jpg",
		"images/istanbul-thumb.jpg",
		"images/morocco-thumb.jpg",
		"images/peru-thumb.jpeg",
		"images/russia-thumb.jpg",
		"images/shoes-portrait.jpg",
		"images/shoes.jpg",
		"images.json",
		"logo-192.png",
		"logo-512.png",
		"manifest.json",
		"photos.svelte",
		"test.svelte",
		"wanderlust-white.svg",
		"wanderlust.svg"
	];

	const shell = [
		"client/client.2a84ef2b.js",
		"client/index.37a7e1d2.js",
		"client/Truman.46999c58.js",
		"client/istanbul.f91338e8.js",
		"client/photos.1f17e33c.js",
		"client/travel.30ed6e02.js",
		"client/about.c4cdbc3b.js",
		"client/index.4e78455d.js",
		"client/[slug].1d0cd221.js",
		"client/play.b6932535.js",
		"client/sapper-dev-client.89e34bae.js",
		"client/client.9cd1e5c9.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU4NTc0MDA0NTUyNDtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCIuRFNfU3RvcmVcIixcblx0XCJidWxtYS5jc3NcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImdsb2JhbC5jc3NcIixcblx0XCJncmVhdC1zdWNjZXNzLnBuZ1wiLFxuXHRcImltYWdlcy9hYWEuanBnXCIsXG5cdFwiaW1hZ2VzL2JiYi5qcGdcIixcblx0XCJpbWFnZXMvY2NjLmpwZ1wiLFxuXHRcImltYWdlcy9kZGQuanBnXCIsXG5cdFwiaW1hZ2VzL2VlZS5qcGdcIixcblx0XCJpbWFnZXMvaXN0YW5idWwtdGh1bWIuanBnXCIsXG5cdFwiaW1hZ2VzL21vcm9jY28tdGh1bWIuanBnXCIsXG5cdFwiaW1hZ2VzL3BlcnUtdGh1bWIuanBlZ1wiLFxuXHRcImltYWdlcy9ydXNzaWEtdGh1bWIuanBnXCIsXG5cdFwiaW1hZ2VzL3Nob2VzLXBvcnRyYWl0LmpwZ1wiLFxuXHRcImltYWdlcy9zaG9lcy5qcGdcIixcblx0XCJpbWFnZXMuanNvblwiLFxuXHRcImxvZ28tMTkyLnBuZ1wiLFxuXHRcImxvZ28tNTEyLnBuZ1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIixcblx0XCJwaG90b3Muc3ZlbHRlXCIsXG5cdFwidGVzdC5zdmVsdGVcIixcblx0XCJ3YW5kZXJsdXN0LXdoaXRlLnN2Z1wiLFxuXHRcIndhbmRlcmx1c3Quc3ZnXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCJjbGllbnQvY2xpZW50LjJhODRlZjJiLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LjM3YTdlMWQyLmpzXCIsXG5cdFwiY2xpZW50L1RydW1hbi40Njk5OWM1OC5qc1wiLFxuXHRcImNsaWVudC9pc3RhbmJ1bC5mOTEzMzhlOC5qc1wiLFxuXHRcImNsaWVudC9waG90b3MuMWYxN2UzM2MuanNcIixcblx0XCJjbGllbnQvdHJhdmVsLjMwZWQ2ZTAyLmpzXCIsXG5cdFwiY2xpZW50L2Fib3V0LmM0Y2RiYzNiLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LjRlNzg0NTVkLmpzXCIsXG5cdFwiY2xpZW50L1tzbHVnXS4xZDBjZDIyMS5qc1wiLFxuXHRcImNsaWVudC9wbGF5LmI2OTMyNTM1LmpzXCIsXG5cdFwiY2xpZW50L3NhcHBlci1kZXYtY2xpZW50Ljg5ZTM0YmFlLmpzXCIsXG5cdFwiY2xpZW50L2NsaWVudC45Y2QxZTVjOS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2lzdGFuYnVsXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9waG90b3NcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3RyYXZlbFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYWJvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW15cXC9dKz8pXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9wbGF5XFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwsIHJvdXRlcyB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG5cdC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG5cdGlmICh1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydCkgcmV0dXJuO1xuXG5cdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlXG5cdGlmICh1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIGNhY2hlZC5oYXModXJsLnBhdGhuYW1lKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdC8qXG5cdGlmICh1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xuXHRcdHJldHVybjtcblx0fVxuXHQqL1xuXG5cdGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnKSByZXR1cm47XG5cblx0Ly8gZm9yIGV2ZXJ5dGhpbmcgZWxzZSwgdHJ5IHRoZSBuZXR3b3JrIGZpcnN0LCBmYWxsaW5nIGJhY2sgdG9cblx0Ly8gY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS4gKElmIHRoZSBwYWdlcyBuZXZlciBjaGFuZ2UsIHlvdVxuXHQvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcblx0ZXZlbnQucmVzcG9uZFdpdGgoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXG5cdFx0XHQudGhlbihhc3luYyBjYWNoZSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcblx0XHRcdFx0XHRjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsV0FBVztDQUNaLENBQUMsV0FBVztDQUNaLENBQUMsYUFBYTtDQUNkLENBQUMsWUFBWTtDQUNiLENBQUMsbUJBQW1CO0NBQ3BCLENBQUMsZ0JBQWdCO0NBQ2pCLENBQUMsZ0JBQWdCO0NBQ2pCLENBQUMsZ0JBQWdCO0NBQ2pCLENBQUMsZ0JBQWdCO0NBQ2pCLENBQUMs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
