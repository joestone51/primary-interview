import showUnplayed from "./showUnplayed.js";
import getMockStorage from '../utils/getMockStorage.js';

describe("showUnplayed.js", () => {
  console.log = jest.fn();

  it('should show all albums', () => {
    const storage = getMockStorage();
    showUnplayed(storage);

    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log.mock.calls[0][0]).toBe(`"Ride the Lightning" by Metallica (unplayed)`);
    expect(console.log.mock.calls[1][0]).toBe(`"Licensed to Ill" by Beastie Boys (unplayed)`);
    expect(console.log.mock.calls[2][0]).toBe(`"Pauls Boutique" by Beastie Boys (unplayed)`);
    expect(console.log.mock.calls[3][0]).toBe(`"The Dark Side of the Moon" by Pink Floyd (unplayed)`);
  });

  it('should show two albums', () => {
    const storage = getMockStorage();
    storage["Licensed to Ill"].isPlayed = true;
    storage["The Dark Side of the Moon"].isPlayed = true;
    showUnplayed(storage);

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log.mock.calls[0][0]).toBe(`"Ride the Lightning" by Metallica (unplayed)`);
    expect(console.log.mock.calls[1][0]).toBe(`"Pauls Boutique" by Beastie Boys (unplayed)`);
  });

  it('should show no albums', () => {
    const storage = getMockStorage();
    storage["Ride the Lightning"].isPlayed = true;
    storage["Licensed to Ill"].isPlayed = true;
    storage["Pauls Boutique"].isPlayed = true;
    storage["The Dark Side of the Moon"].isPlayed = true;
    showUnplayed(storage);

    expect(console.log).toHaveBeenCalledTimes(0);
  });
});
