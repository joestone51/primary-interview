import showUnplayedByArtist from "./showUnplayedByArtist.js";
import getMockStorage from '../utils/getMockStorage.js';

describe("showUnplayedByArtist.js", () => {
  console.log = jest.fn();

  it('should show all albums with single result', () => {
    const storage = getMockStorage();
    showUnplayedByArtist("Metallica", storage);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log.mock.calls[0][0]).toBe(`"Ride the Lightning" by Metallica (unplayed)`);
  });

  it('should show no albums when played', () => {
    const storage = getMockStorage();
    storage["Ride the Lightning"].isPlayed = true;
    showUnplayedByArtist("Metallica", storage);

    expect(console.log).toHaveBeenCalledTimes(0);
  });

  it('should show all albums with multiple results', () => {
    const storage = getMockStorage();
    showUnplayedByArtist("Beastie Boys", storage);

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log.mock.calls[0][0]).toBe(`"Licensed to Ill" by Beastie Boys (unplayed)`);
    expect(console.log.mock.calls[1][0]).toBe(`"Pauls Boutique" by Beastie Boys (unplayed)`);
  });

  it('should show one albums with multiple results', () => {
    const storage = getMockStorage();
    storage["Pauls Boutique"].isPlayed = true;
    showUnplayedByArtist("Beastie Boys", storage);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log.mock.calls[0][0]).toBe(`"Licensed to Ill" by Beastie Boys (unplayed)`);
  });

  it('should nothing when entering artist with no albums', () => {
    const storage = getMockStorage();
    showUnplayedByArtist("Creed", storage);

    expect(console.log).toHaveBeenCalledTimes(0);
  });
});
