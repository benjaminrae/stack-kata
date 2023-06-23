import { StackError } from '../../errors/stack-error';

describe('Given a stack error', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const stackError = new StackError('Stack error message');

      expect(typeof stackError).toBe('object');
    });

    test('Then its name should be StackError', () => {
      const stackError = new StackError('Stack error message');

      expect(stackError.name).toBe('StackError');
    });

    test('Then its message should be the message that was passed in', () => {
      const stackError = new StackError('Stack error message');

      expect(stackError.message).toBe('Stack error message');
    });
  });

  describe('When it is thrown', () => {
    test('Then the stack trace should include the error name and error message', () => {
      const stackError = new StackError('Stack error message');

      try {
        throw stackError;
      } catch (error) {
        expect((error as StackError).stack).toContain('StackError: Stack error message');
      }
    });
  });
});
