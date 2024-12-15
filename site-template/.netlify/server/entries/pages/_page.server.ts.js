async function load({ fetch }) {
  const articlesResponse = await fetch("/api/articles");
  const articles = await articlesResponse.json();
  return { articles };
}
export {
  load
};
