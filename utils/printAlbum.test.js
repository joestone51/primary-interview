import printAlbum from "./printAlbum.js";

describe('printAlbum.js', () => {
  console.log = jest.fn();
  it('should print unplayed', () => {
    printAlbum("Ride the Lightning", "Metallica", false);

    expect(console.log.mock.calls[0][0]).toBe(`"Ride the Lightning" by Metallica (unplayed)`);
  });

  it('should print played', () => {
    printAlbum("Ride the Lightning", "Metallica", true);

    expect(console.log.mock.calls[0][0]).toBe(`"Ride the Lightning" by Metallica (played)`);
  });
});