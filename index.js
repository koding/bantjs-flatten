module.exports = function (tree) {
  var index = {};
  
  return traverse(tree);

  function traverse (branch) {
    return branch.reduce(function (acc, c) {
      if (!has(index, c.name)) acc.push(c);
      return acc.concat(traverse(c.locals));
    }, []);
  }
}

function has (x, y) { return x && x.hasOwnProperty(y) }

