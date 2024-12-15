import * as server from '../entries/pages/_slug_/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DGRWdxHV.js","_app/immutable/chunks/disclose-version.ZA-G4vLv.js","_app/immutable/chunks/runtime.C5wjbkoo.js","_app/immutable/chunks/if.B8qgdVaf.js","_app/immutable/chunks/schema.CO611N1n.js","_app/immutable/chunks/ArticleCardGrid.CH-iaZF-.js","_app/immutable/chunks/attributes.fmwUrfDI.js"];
export const stylesheets = ["_app/immutable/assets/4.D1LhOWz1.css","_app/immutable/assets/ArticleCardGrid.DLdwj75d.css"];
export const fonts = [];
