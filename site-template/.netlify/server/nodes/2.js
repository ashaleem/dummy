import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CafmESYz.js","_app/immutable/chunks/disclose-version.ZA-G4vLv.js","_app/immutable/chunks/runtime.C5wjbkoo.js","_app/immutable/chunks/if.B8qgdVaf.js","_app/immutable/chunks/schema.CO611N1n.js","_app/immutable/chunks/attributes.fmwUrfDI.js","_app/immutable/chunks/FrontBasic.Bywk4cl9.js","_app/immutable/chunks/ArticleCardGrid.CH-iaZF-.js"];
export const stylesheets = ["_app/immutable/assets/2.BdYCDkl-.css","_app/immutable/assets/FrontBasic.B0zqQd7e.css","_app/immutable/assets/ArticleCardGrid.DLdwj75d.css"];
export const fonts = [];
