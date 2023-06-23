import { StackUnderflowError } from '../../errors/stack-underflow-error';

describe('Given a StackUnderflowError', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const stackUnderflowError = new StackUnderflowError('Stack underflow error message');

      expect(typeof stackUnderflowError).toBe('object');
    });
  });

  describe('When it is thrown', () => {
    test('Then the stack trace should include the error name and error message', () => {
      const stackUnderflowError = new StackUnderflowError('Stack underflow error message');

      try {
        throw stackUnderflowError;
      } catch (error) {
        expect((error as StackUnderflowError).stack).toContain(
          'StackUnderflowError: Stack underflow error message'
        );
      }
    });
  });
});
