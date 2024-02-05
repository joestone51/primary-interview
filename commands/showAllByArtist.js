import printAlbum from "../utils/printAlbum.js";

/**
 * Lists all albums in storage by an artist
 * @param {string} artist Name of artist
 * @param {[title: string]: { artist: string, isPlayed: boolean }} storage Dictionary like object that is being used to store the albums, their artist,s and their palyed status
 */
const showAllByArtist = (artist, storage) => {
  const filteredAlbums = Object.entries(storage).filter(([_, { artist: albumArtist }]) => {
    return artist === albumArtist;
  });

  for (let [title, { artist, isPlayed }] of filteredAlbums) {
    printAlbum(title, artist, isPlayed);
  }
};
export default showAllByArtist;
