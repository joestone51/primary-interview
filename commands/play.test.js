import play from "./play.js";
import getMockStorage from '../utils/getMockStorage.js';

describe("play.js", () => {
  console.log = jest.fn();

  it('should play an album in storage', () => {
    const storage = getMockStorage();
    const result = play("Ride the Lightning", storage);

    expect(result).toBeTruthy();
    expect("Ride the Lightning" in storage).toBeTruthy();
    expect(storage["Ride the Lightning"].isPlayed).toBeTruthy();
    expect(console.log.mock.calls[0][0]).toBe(`You're listening to "Ride the Lightning"`);
  });

  it('should not play an album we do not have', () => {
    const storage = getMockStorage();
    const result = play("Master of Puppets", storage);

    expect(result).not.toBeTruthy();
    expect(console.log.mock.calls[0][0]).toBe(`An album with the title: "Master of Puppets" was not found.`);
  });
});
