const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  // arguments: description and function (code to test)
  it('should add two numbers', () => {
    var results = utils.add(33, 11);
    expect(results).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  })

  it('should square a number', () => {
    var results = utils.square(2);
    expect(results).toBe(4).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
      expect(square).toBe(16).toBeA('number');
      done();
    })
  });
});


// 
// it('should verify first and last names are set', () => {
//   var user = {
//     age: 25,
//     location: 'Toronto'
//   }
//   var results = utils.setName(user, 'Joseph Smith');
//   expect(results).toInclude({
//     firstName: 'Joseph',
//     lastName: 'Smith'
//   });
// });
