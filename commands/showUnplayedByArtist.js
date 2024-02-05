import printAlbum from "../utils/printAlbum.js";

/**
 * Lists all albums in storage by an artist that have yet to be played
 * @param {string} artist Name of artist
 * @param {[title: string]: { artist: string, isPlayed: boolean }} storage Dictionary like object that is being used to store the albums, their artist,s and their palyed status
 */
const showUnplayedByArtist = (artist, storage) => {
  const filteredAlbums = Object.entries(storage).filter(([_, { artist: albumArtist, isPlayed }]) => {
    return artist === albumArtist && !isPlayed;
  });

  for (let [title, { artist, isPlayed }] of filteredAlbums) {
    printAlbum(title, artist, isPlayed);
  }
};
export default showUnplayedByArtist;
