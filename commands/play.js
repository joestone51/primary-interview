/**
 * Plays an album with title that exists in storage
 * @param {string} title The title of the album to play
 * @param {[title: string]: { artist: string, isPlayed: boolean }} storage Dictionary like object that is being used to store the albums, their artist,s and their palyed status
 * @returns true if the album was played, false otherwise
 */
const play = (title, storage) => {
  if (title in storage) {
    storage[title].isPlayed = true;
    console.log(`You're listening to "${title}"`);
    return true;
  }

  console.log(`An album with the title: "${title}" was not found.`);
  return false;
};
export default play;
