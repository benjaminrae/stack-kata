import { StackOverflowError } from '../../errors/stack-overflow-error';

describe('Given a StackOverflowError', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const stackOverflowError = new StackOverflowError('Stack overflow error message');

      expect(typeof stackOverflowError).toBe('object');
    });
  });

  describe('When it is thrown', () => {
    test('Then the stack trace should include the error name and error message', () => {
      const stackOverflowError = new StackOverflowError('Stack overflow error message');

      try {
        throw stackOverflowError;
      } catch (error) {
        expect((error as StackOverflowError).stack).toContain(
          'StackOverflowError: Stack overflow error message'
        );
      }
    });
  });
});
