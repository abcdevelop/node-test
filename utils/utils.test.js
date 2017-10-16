const expect = require('expect');

const utils = require('./utils');


it('should add two numbers',() => {
    var res = utils.add(33,11);
    // if( res!== 44){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
    expect(res).toBeA('number').toBe(44);
});


it('should async add two numbers',(done) => {
    utils.asyncAdd(4,3,(sum) => {
        expect(sum).toBeA('number').toBe(7);
        done();
    });
});


it('should square a number',() => {
    var res = utils.square(3);
    // if( res!== 9){
    //     throw new Error(`Expected 9, but got ${res}.`);
    // }
    expect(res).toBeA('number').toBe(9);
});


it('should async square a number',(done) => {
    utils.asyncSquare(3,(sq) => {
        expect(sq).toBeA('number').toBe(9);
        done();
    });
});


it('should expect somme values',() => {
    //expect(12).toNotBe(11);
    //expect({name:'Andrew'}).toEqual({name: 'Andrew'});
    //expect([2,3,4]).toInclude(2);
    //expect([2,3,4]).toExclude(5);
    // expect({
    //            name:'Andrew',
    //            age: 25,
    //            location:'Paris'
    //        }).toInclude({
    //     age: 25
    // });
    expect({
        name:'Andrew',
        age: 25,
        location:'Paris'
    }).toExclude({
        age: 23
    });
});


// should verify first and last names  are set
// assert it includes firstName and astName with proper values
it('should set firstName and lastName',()=>{
    var user = {location: 'Philadelphia', age:25};
    var res = utils.setName(user,'Andrew Mead');

    expect(res).toInclude({
        firstName:'Andrew',
        lastName:'Mead'
    });
});
