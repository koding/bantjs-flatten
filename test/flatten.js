var flatten = require('..');
var compact = require('bant-compact');
var test = require('tape');

test('locals', function (t) {
  t.plan(2);

  var tree = [
    { name: 'x', locals: ['y'] },
    { name: 'y', locals: ['z'] },
    { name: 'z' }
  ];

  tree = compact(tree);
  t.equal(tree.length, 1);

  var actual = flatten(tree);

  var expected = [
    {
      name: 'x',
      locals: [
        {
          name: 'y',
          locals: [
            {
              name: 'z',
              locals: []
            }
          ]
        }
      ]
    },
    {
      name: 'y',
      locals: [
        {
          name: 'z',
          locals: []
        }
      ]
    },
    {
      name: 'z',
      locals: []
    }
  ];

  t.deepEqual(actual, expected);
});


