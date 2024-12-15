export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B2b36cIj.js","app":"_app/immutable/entry/app.CsrqVp2j.js","imports":["_app/immutable/entry/start.B2b36cIj.js","_app/immutable/chunks/runtime.C5wjbkoo.js","_app/immutable/entry/app.CsrqVp2j.js","_app/immutable/chunks/runtime.C5wjbkoo.js","_app/immutable/chunks/if.B8qgdVaf.js","_app/immutable/chunks/disclose-version.ZA-G4vLv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/ads",
				pattern: /^\/api\/ads\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/ads/_server.ts.js'))
			},
			{
				id: "/api/articles",
				pattern: /^\/api\/articles\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/articles/_server.ts.js'))
			},
			{
				id: "/api/articles/[slug]",
				pattern: /^\/api\/articles\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/articles/_slug_/_server.ts.js'))
			},
			{
				id: "/api/authors",
				pattern: /^\/api\/authors\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/authors/_server.ts.js'))
			},
			{
				id: "/api/publication-details",
				pattern: /^\/api\/publication-details\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/publication-details/_server.ts.js'))
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[slug]/[slug]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
