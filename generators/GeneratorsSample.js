function* GeneratorSample() {
    yield 'nidhin';
    yield 'kumar';
    console.log('Name are printed');
    yield 23;
}

let sample = GeneratorSample();
//console.log('sample is', sample); //output be {}
//console.log('next one', next()); // will give output as next is not defined
//console.log('Sample with next', sample.next()); //will produce value as {value: 'nidhin', done: false }
console.log(sample.next().value);
//console.log(sample.next().value);
//console.log(sample.next().value);
//console.log(sample.next().value); //once all is done it will give output as defined


console.log('------------------');

function* getUserId() {
    let id = 0;
    while (id < 3) {
        yield id++;
    }
}

let userGenerator = getUserId();
console.log(userGenerator.next().value);
console.log("cehcking it out");
console.log(userGenerator.next().value);
console.log('alert given');
console.log(userGenerator.next().value);
console.log(userGenerator.next().value); //gives undefined since the condition is breaked