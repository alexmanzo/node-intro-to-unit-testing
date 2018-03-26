// import chai, declare expect variable
const expect = require('chai').expect;


const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {


  it('should return fizz-buzz if divisible by 15', function() {
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: -45, expected: 'fizz-buzz'},
      {num: 1545, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return buzz if divisible by 5', function() {
    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: -10, expected: 'buzz'},
      {num: 1400, expected: 'buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return fizz if divisible by 3', function() {
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: -12, expected: 'fizz'},
      {num: 999, expected: 'fizz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = [
      ['1'],
      ['false'],
      ['1,345']
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});

