import FizzBuzz from '../src/main';

describe('Main', () => {
	test('should return `Fizz` when multiple of 3', () => {
		expect(FizzBuzz(3)).toEqual('Fizz');
	});

	test('should return `Buzz` when multiple of 5', () => {
		expect(FizzBuzz(5)).toEqual('Buzz');
	});

	test('should return `FizzBuzz` when multiple of 3 and 5', () => {
		expect(FizzBuzz(15)).toEqual('FizzBuzz');
	});

	test('should return `num` when it\'s not multiple of 3 or 5', () => {
		expect(FizzBuzz(4)).toEqual(4);
	});

	test('should return 0 when 0', () => {
		expect(FizzBuzz(0)).toEqual(0);
	});
});
