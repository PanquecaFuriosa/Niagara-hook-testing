import {describe, test} from '@jest/globals';

describe('Failure test', () => {
    test('Just fails the test', () => {
        fail("This test just fails!");
    });
});