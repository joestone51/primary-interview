import printAlbum from "../utils/printAlbum.js";

/**
 * Lists all albums in storage
 * @param {[title: string]: { artist: string, isPlayed: boolean }} storage Dictionary like object that is being used to store the albums, their artist,s and their palyed status
 */
const showAll = (storage) => {
  for (let [title, { artist, isPlayed }] of Object.entries(storage)) {
    printAlbum(title, artist, isPlayed);
  }
};
export default showAll;
