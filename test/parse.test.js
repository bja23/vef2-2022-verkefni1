import { describe, expect, it } from '@jest/globals';
import { parse } from '../src/parser.js';

describe('parser', () => {
  it('calculates numbers', () => {
    const name = "1.txt";

    let input = "688\n904\n607\n299";

    let parsed = parse(name, input);

    expect(parsed).toEqual({name: "1.txt", sum: 2498, data: [688,904,607,299]});
  });
});

describe('parser', () => {
    it('calculates numbers', () => {
      const name = "1.txt";
  
      let input = "688\n904\nhallo\n607\n299";
  
      let parsed = parse(name, input);
  
      expect(parsed).toEqual({name: "1.txt", sum: 2498, data: [688,904,607,299]});
    });
  });


  describe('parser', () => {
    it('calculates numbers', () => {
      const name = "1.txt";
  
      let input = "688\n904\nhallo\n607\n299\n28.297.200,123";
  
      let parsed = parse(name, input);
  
      expect(parsed).toEqual({name: "1.txt", sum: 2498, data: [688,904,607,299]});
    });
  });