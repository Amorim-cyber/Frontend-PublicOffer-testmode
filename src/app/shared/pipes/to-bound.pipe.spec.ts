import { ToBoundPipe } from './to-bound.pipe';

describe('ToBoundPipe', () => {
  it('create an instance', () => {
    const pipe = new ToBoundPipe();
    expect(pipe).toBeTruthy();
  });
});
