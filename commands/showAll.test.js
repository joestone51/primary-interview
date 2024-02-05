import showAll from "./showAll.js";
import getMockStorage from '../utils/getMockStorage.js';

describe("showAll.js", () => {
  console.log = jest.fn();

  it('should show all albums', () => {
    const storage = getMockStorage();
    storage["Pauls Boutique"].isPlayed = true;
    showAll(storage);

    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log.mock.calls[0][0]).toBe(`"Ride the Lightning" by Metallica (unplayed)`);
    expect(console.log.mock.calls[1][0]).toBe(`"Licensed to Ill" by Beastie Boys (unplayed)`);
    expect(console.log.mock.calls[2][0]).toBe(`"Pauls Boutique" by Beastie Boys (played)`);
    expect(console.log.mock.calls[3][0]).toBe(`"The Dark Side of the Moon" by Pink Floyd (unplayed)`);
  });
});
