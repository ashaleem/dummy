import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BxSUONAo.js","_app/immutable/chunks/disclose-version.ZA-G4vLv.js","_app/immutable/chunks/runtime.C5wjbkoo.js","_app/immutable/chunks/if.B8qgdVaf.js","_app/immutable/chunks/attributes.fmwUrfDI.js"];
export const stylesheets = ["_app/immutable/assets/0.CjmJR34W.css"];
export const fonts = [];
