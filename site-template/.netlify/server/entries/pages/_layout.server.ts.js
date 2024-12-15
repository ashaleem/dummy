async function load({ fetch }) {
  const publicationResponse = await fetch("/api/publication-details");
  const publication = await publicationResponse.json();
  const adsResponse = await fetch("/api/ads");
  const ads = await adsResponse.json();
  return { ads, publication };
}
export {
  load
};
