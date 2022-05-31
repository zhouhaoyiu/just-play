import { a } from './funcA';

declare const moduleA: {
  a: typeof a;
};

export default moduleA;