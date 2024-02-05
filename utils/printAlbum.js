/**
 * Prints an album, artist, and played status to console
 * @param {string} title Album title
 * @param {string} artist Album artist
 * @param {boolean} isPlayed true when album has been played
 */
const printAlbum = (title, artist, isPlayed) => {
  console.log(`"${title}" by ${artist} (${isPlayed ? "played" : "unplayed"})`);
};
export default printAlbum;
