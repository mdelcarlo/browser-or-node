import { assert } from 'chai';
import { isBrowser, isWebBrowser, isNode } from '../src';

console.log(isNode);

describe('Browser or Node.js', () => {

  it('should check node env', () => {
    assert(isNode === true, 'isNode didn\'t work :(');
  });

  it('should check browser env', () => {
    //should figure out how to automate this
    assert(isBrowser === false, 'isBrowser didn\'t work :(');
  });

  it('should check web worker env', () => {
    assert(isNode === true, 'isWebWorker didn\'t work :(');
  });

});
