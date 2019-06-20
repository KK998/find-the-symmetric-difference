import {} from './find-the-symmetric-difference';

describe('Hamming', () => {
	test('empty strands', () => {
		expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
	});

	xtest('No duplicates allowed v1', () => {
		expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
	});
	xtest('No duplicates allowed v2', () => {
		expect(sym([1, 2, 3], [5, 2, 1, 4, 5])).toEqual([3, 4, 5]);
	});
	xtest('More data to compute v1', () => {
		expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5]);
	});
	xtest('More data to compute v2', () => {
		expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5]);
	});
	xtest('More data to compute v3', () => {
		expect(
			sym(
				[3, 3, 3, 2, 5],
				[2, 1, 5, 7],
				[3, 4, 6, 6],
				[1, 2, 3],
				[5, 3, 9, 8],
				[1]
			)
		).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
	});
});
