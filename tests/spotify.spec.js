import spotify from '../src/spotify';

describe('Spotify', () => {
  test('should be an object', () => {
    expect(spotify).toMatchObject({});
  });

  test('should have search methods', () => {
    expect(spotify.search).toBeDefined();
  });

  test('should have album methods', () => {
    expect(spotify.album).toBeDefined();
  });
});
