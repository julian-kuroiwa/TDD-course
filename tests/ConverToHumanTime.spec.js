import ConvertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  test('should receive 0ms and convert to 0:00', () => {
    expect(ConvertToHumanTime(0)).toBe('0:00');
  });

  test('should receive 11000ms and convert to 0:11', () => {
    expect(ConvertToHumanTime(11000)).toBe('0:11');
  });

  test('should receive 60000ms and convert to 1:00', () => {
    expect(ConvertToHumanTime(60000)).toBe('1:00');
  });
});