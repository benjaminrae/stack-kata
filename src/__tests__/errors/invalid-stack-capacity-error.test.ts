import { InvalidStackCapacityError } from '../../errors/invalid-stack-capacity-error';

describe('Given an invalid stack capacity error', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const invalidStackCapacityError = new InvalidStackCapacityError(10);

      expect(typeof invalidStackCapacityError).toBe('object');
    });
  });

  describe('When it is thrown', () => {
    test('Then the stack trace should include the error name and error message', () => {
      const invalidStackCapacityError = new InvalidStackCapacityError(10);

      try {
        throw invalidStackCapacityError;
      } catch (error) {
        expect((error as InvalidStackCapacityError).stack).toContain(
          'InvalidStackCapacityError: Invalid stack capacity: 10'
        );
      }
    });
  });
});
