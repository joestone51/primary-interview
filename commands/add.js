/**
 * Adds an album to the provided storage object
 * @param {string} title Title of the album to add
 * @param {string} artist The artist who wrote the album
 * @param {[title: string]: { artist: string, isPlayed: boolean }} storage Dictionary like object that is being used to store the albums, their artist,s and their palyed status
 * @returns true if the album was added, false otherwise
 */
const add = (title, artist, storage) => {
  if (title in storage) {
    console.log(`An album with the title: "${title}" already exists in your library.`);
    return false;
  }

  storage[title] = {
    artist,
    isPlayed: false,
  };
  console.log(`Added "${title}" by ${artist}`);
  return true;
};
export default add;
