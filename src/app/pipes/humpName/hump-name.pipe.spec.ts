import { HumpNamePipe } from './hump-name.pipe';

describe('HumpNamePipe', () => {
  it('create an instance', () => {
    const pipe = new HumpNamePipe();
    expect(pipe).toBeTruthy();
  });
});
