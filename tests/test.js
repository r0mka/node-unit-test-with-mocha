const assert = require('assert');

describe('file to be tested', () => {
  context('function to be tested', () => {
    beforeEach(() => {
      console.log('======before');
    });
    afterEach(() => {
      console.log('======after');
    });
    it('should do something', () => {
      assert.strictEqual(1, 1);
    });

    it('should do something else', () => {
      assert.deepStrictEqual({ name: 'Roman' }, { name: 'Roman' });
    });
  });

  context('another function to be tested', () => {
    it('should do something else', () => {
      assert.deepStrictEqual({ name: 'Roman' }, { name: 'Roman' });
    });
  });
});
