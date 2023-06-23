import { BaseStack } from './stack';

export class NullStack<T> extends BaseStack<T> {
  constructor() {
    super(0);
  }
}
