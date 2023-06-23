import { StackOverflowError } from '../../errors/stack-overflow-error';
import { StackUnderflowError } from '../../errors/stack-underflow-error';
import { NullStack } from '../../stack/null-stack';

describe('Given a null stack', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const nullStack = new NullStack();

      expect(typeof nullStack).toBe('object');
    });
  });

  test('Then it should be empty', () => {
    const nullStack = new NullStack();

    expect(nullStack.isEmpty()).toBe(true);
  });

  test('Then it should have a size of 0', () => {
    const nullStack = new NullStack();

    expect(nullStack.size()).toBe(0);
  });

  test('Then it should throw a stack underflow error when an element is removed or peeked', () => {
    const nullStack = new NullStack();

    expect(() => nullStack.pop()).toThrowError(StackUnderflowError);
    expect(() => nullStack.peek()).toThrowError(StackUnderflowError);
  });

  test('Then it should throw a stack overflow error when an element is added', () => {
    const nullStack = new NullStack();

    expect(() => {
      nullStack.push(1);
    }).toThrowError(StackOverflowError);
  });
});
