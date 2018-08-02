Template strings is similar like concatnating strings.
It was used from ES2015 in which we can use `` and can type all the strings and if we are having a value we can use ${} - jsx expression

Pros:

We can break the line
We can do calculation inside jsx
In normal concatnation we cannot break a line or calculate a value


Inheritance:
  Using attribute of other class into new class is called inheritance


  Generators:
    To set check points inside an function we use generators to use generators we will use the following:

    function *functionName () {
      yield 'name'; //yield will be set as break point
      yield 'name';
    }

    let sample = functionName();
    console.log(sample.next()); //until next is given it won't move to next stmt;
                                //it will print the value as json {value: 'value', done: false};

    console.log(sample.next().value());                            