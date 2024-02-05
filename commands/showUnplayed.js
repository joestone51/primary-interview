import printAlbum from "../utils/printAlbum.js";

/**
 * Lists all albums in storage that have yet to be played
 * @param {[title: string]: { artist: string, isPlayed: boolean }} storage Dictionary like object that is being used to store the albums, their artist,s and their palyed status
 */
const showUnplayed = (storage) => {
  const filteredAlbums = Object.entries(storage).filter(([_, { isPlayed }]) => {
    return !isPlayed;
  });

  for (let [title, { artist, isPlayed }] of filteredAlbums) {
    printAlbum(title, artist, isPlayed);
  }
};
export default showUnplayed;
