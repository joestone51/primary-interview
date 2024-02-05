import showAllByArtist from "./showAllByArtist.js";
import getMockStorage from '../utils/getMockStorage.js';

describe("showAllByArtist.js", () => {
  console.log = jest.fn();

  it('should show all albums with single result', () => {
    const storage = getMockStorage();
    showAllByArtist("Metallica", storage);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log.mock.calls[0][0]).toBe(`"Ride the Lightning" by Metallica (unplayed)`);
  });

  it('should show all albums with multiple results', () => {
    const storage = getMockStorage();
    showAllByArtist("Beastie Boys", storage);

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log.mock.calls[0][0]).toBe(`"Licensed to Ill" by Beastie Boys (unplayed)`);
    expect(console.log.mock.calls[1][0]).toBe(`"Pauls Boutique" by Beastie Boys (unplayed)`);
  });

  it('should nothing when entering artist with no albums', () => {
    const storage = getMockStorage();
    showAllByArtist("Creed", storage);

    expect(console.log).toHaveBeenCalledTimes(0);
  });
});
