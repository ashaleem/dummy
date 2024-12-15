function _error($$payload) {
  $$payload.out += `<h2>Oops, we couldn't find that page.</h2> <a href="/">Go home</a>`;
}
export {
  _error as default
};
