import { FormatEan13Pipe } from './format-ean13.pipe';

describe('Ean13Pipe', () => {
  it('create an instance', () => {
    const pipe = new FormatEan13Pipe();
    expect(pipe).toBeTruthy();
  });
});
