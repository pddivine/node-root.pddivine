const { expect } = require('chai');
const root_manual = process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);
const nodeRootPddivine = require(`${root_manual}/index.js`);

describe('The node-root.pddivine library', function () {
  it('should be able to be used as the root path to load a file relative to the root.', function () {
    require(`${nodeRootPddivine}/test/test_module`);
  });
});

describe('The typical relative path syntax', function () {
  it('should not be able to be used as the root path to load a file relative to the root.', function () {
    try { 
      require(`./test/test_module`) 
    } catch (e) {
      return;
    }
    throw `The file was loaded when it shouldn't have been able to.`;
  });
});

