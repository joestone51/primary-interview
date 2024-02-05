import add from "./add.js";
import getMockStorage from '../utils/getMockStorage.js';

describe("add.js", () => {
  console.log = jest.fn();

  it('should add a new album to storage', () => {
    const storage = {};
    const result = add("Ride the Lightning", "Metallica", storage);

    expect(result).toBeTruthy();
    expect("Ride the Lightning" in storage).toBeTruthy();
    expect(console.log.mock.calls[0][0]).toBe(`Added "Ride the Lightning" by Metallica`);
  });

  it('should not add a duplicate album to storage', () => {
    const storage = getMockStorage();
    const result = add("Ride the Lightning", "Metallica", storage);

    expect(result).not.toBeTruthy();
    expect(console.log.mock.calls[0][0]).toBe(`An album with the title: "Ride the Lightning" already exists in your library.`);
  });
});
