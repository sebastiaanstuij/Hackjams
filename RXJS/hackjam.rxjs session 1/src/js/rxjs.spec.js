import {expect} from "chai";
import {Observable} from "./rxjs";

describe('Rxjs', () => {

  describe('Operators', () => {

    describe('of :', () => {

      it('should emit a stream of numbers', (done) => {
        const source$ = Observable.of(1, 2, 3, 4, 5);
        let result = [];
        const actual = [1, 2, 3, 4, 5];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });

      it('should emit an object, array and function', (done) => {
        const source$ = Observable.of({name: 'Brian'}, [1, 2, 3], function hello() {
          return 'Hello'
        });
        let result = [];
        const actual = [{name: 'Brian'}, [1, 2, 3], function hello() {
          return 'Hello'
        }];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual.length).equals(result.length);
              expect(actual[0]).deep.equal(result[0]);
              expect(actual[1]).deep.equal(result[1]);
              expect(actual[2]()).deep.equal(result[2]());
              done();
            }
          );
      });

    });

    describe('interval :', () => {

      it('should emit a stream of values at n-second interval', (done) => {
        const source$ = Observable.interval(400);
        let result = [];
        const actual = [0, 1, 2];
        const unsubscribe = source$
          .subscribe(
            val => result = [...result, val]
          );

        setTimeout(() => {
          unsubscribe();
          expect(actual).deep.equals(result);
          done();
        }, 1500)
      });

    });


    describe('fromArray :', () => {

      it('should convert an array to an Observable', (done) => {
        const source$ = Observable.fromArray([1, 2, 3, 4, 5]);
        let result = [];
        const actual = [1, 2, 3, 4, 5];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });

    });

    describe.only('fromPromise :', () => {

      it('should convert an promise to an Observable', (done) => {
        const actual = 'Hello World!';
        const promise = new Promise(resolve => resolve(actual));
        const source = Observable.fromPromise(promise);
        let result;
        const subscribe = source
          .subscribe(
            val => {
              result = val;
            },
            (err) => {
              console.log('error', err);
            },
            () => {
              expect(actual).equals(result);
              done();
            }
          );
      });
    });

    describe('from :', () => {

      it('should convert an array to an Observable', (done) => {
        const source$ = Observable.from([1, 2, 3, 4, 5]);
        let result = [];
        const actual = [1, 2, 3, 4, 5];
        const subscribe = source$
          .subscribe(
            val => {
              console.log('value', val);
              result = [...result, val];
            },
            (err) => {
              console.log('error', err);
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });

      it('should convert an promise to an Observable', (done) => {
        const actual = 'Hello World!';
        const promise = new Promise(resolve => resolve(actual));
        const source$ = Observable.from(promise);
        let result;
        const subscribe = source$
          .subscribe(
            val => {
              result = val;
            },
            () => {
              console.log('error');
            },
            () => {
              expect(actual).equals(result);
              done();
            }
          );
      });

      it('should convert a string to an Observable', (done) => {
        const actual = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
        const value = actual.join('');
        const source$ = Observable.from(value);
        let result = [];
        const subscribe = source$
          .subscribe(
            val => {
              result = [...result, val];
            },
            (err) => {
              console.log('error');
            },
            () => {
              expect(actual.length).equals(result.length);
              done();
            }
          );
      });

      it('should convert a colllection to an Observable', (done) => {
        const map = new Map();
        map.set(1, 'Hi');
        map.set(2, 'Bye');
        const source$ = Observable.from(map);
        const actual = [[1, 'Hi'], [2, 'Bye']];
        let result = [];
        const subscribe = source$
          .subscribe(
            val => {
              result = [...result, val];
            },
            (err) => {
              console.log('error');
            },
            () => {
              expect(actual.length).equals(result.length);
              expect(actual[0]).deep.equal(result[0]);
              expect(actual[1]).deep.equal(result[1]);
              done();
            }
          );
      });
    });

    describe('map :', () => {

      it('should add 10 to each number', (done) => {
        const source$ = Observable.from([1, 2, 3, 4, 5]).map(val => val + 10);
        let result = [];
        const actual = [11, 12, 13, 14, 15];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });

      it('should map to a single property', (done) => {
        const from$ = Observable.from([{name: 'Joe', age: 30}, {name: 'Frank', age: 20}, {name: 'Ryan', age: 50}]);
        const source$ = Observable.map(person => person.name, from$);
        let result = [];
        const actual = ["Joe", "Frank", "Ryan"];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });
    });

    describe('mapTo :', () => {

      it('should return "a" for every incoming value', (done) => {
        const source$ = Observable.from([1, 2, 3, 4, 5]).mapTo('a');
        let result = [];
        const actual = ['a', 'a', 'a', 'a', 'a'];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });
    });

    describe('do :', () => {

      it('should just logging ', (done) => {
        const source$ = Observable.from([1, 2, 3, 4, 5]);
        let result = [];
        const actual = ['a', 'a', 'a', 'a', 'a'];
        const subscribe = source$
          .do(val => console.log(`Before mapTo: ${val}`))
          .mapTo('a')
          .do(val => console.log(`After mapTo: ${val}`))
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });
    });

    describe('filter :', () => {

      it('should return a list of even numbers', (done) => {
        const source$ = Observable.from([1, 2, 3, 4, 5]).filter(num => num % 2 === 0);
        let result = [];
        const actual = [2, 4];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });

      it('should filter objects based on a property', (done) => {
        const from$ = Observable.from([{name: 'Joe', age: 30}, {name: 'Frank', age: 20}, {name: 'Ryan', age: 50}]);
        const source$ = Observable.filter(person => person.age >= 30, from$).map(person => person.name);
        let result = [];
        const actual = ["Joe", "Ryan"];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });
    });

    describe('startWith :', () => {

      it('should start with a stream of numbers', (done) => {
        const source$ = Observable.from([1, 2, 3, 4, 5]);
        let result = [];
        const actual = [0, 1, 2, 3, 4, 5];
        const subscribe = source$
          .startWith(0)
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });

      it('should start with multiple values', (done) => {
        const source$ = Observable.from([1, 2, 3, 4, 5]);
        let result = [];
        const actual = [-1, 0, 1, 2, 3, 4, 5];
        const subscribe = source$
          .startWith(-1, 0)
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });
    });

    describe('concat :', () => {

      it('should concat 2 observables', (done) => {
        const sourceOne$ = Observable.of(10);
        const sourceTwo$ = Observable.of(20);
        let result = [];
        const actual = [10, 20];
        const subscribe = sourceOne$.concat(sourceTwo$)
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });

      it('Should be a static method on Observable', (done) => {
        const sourceOne$ = Observable.of(10);
        const sourceTwo$ = Observable.of(20);
        let result = [];
        const actual = [10, 20];
        const subscribe = Observable
          .concat(sourceOne$, sourceTwo$)
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });
    });

    describe('take :', () => {

      it('should return the first value from a stream', (done) => {
        const source$ = Observable.of(1, 2, 3, 4, 5).take(1);
        const actual = 1;
        let result;
        const subscribe = source$
          .subscribe(
            val => result = val,
            () => {
            },
            () => {
              expect(actual).equals(result);
              done();
            }
          );
      });

      it('should return the first 2 values from a stream ', (done) => {
        const source$ = Observable.of(1, 2, 3, 4, 5).take(2);
        const actual = [1, 2];
        let result = [];
        const subscribe = source$
          .subscribe(
            val => result = [...result, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(result);
              done();
            }
          );
      });
    });

    describe('first :', () => {

      it('should return the first value from a stream', (done) => {
        const source$ = Observable.of(1, 2, 3, 4, 5).first();
        const actual = 1;
        let result;
        const subscribe = source$
          .subscribe(
            val => result = val,
            () => {
            },
            () => {
              expect(actual).equals(result);
              done();
            }
          );
      });

      it('should return first value to pass predicate', (done) => {
        const source$ = Observable.of(1, 2, 3, 4, 5).first(num => num === 5);
        const actual = 5;
        let result;
        const subscribe = source$
          .subscribe(
            val => result = val,
            () => {
            },
            () => {
              expect(actual).equals(result);
              done();
            }
          );
      });
    });

    describe('skip :', () => {

      it('should skip the n first values before emission', (done) => {
        const source$ = Observable.of(1, 2, 3, 4, 5).skip(3);
        const actual = [4, 5];
        let results = [];
        const subscribe = source$
          .subscribe(
            val => results = [...results, val],
            () => {
            },
            () => {
              expect(actual).deep.equals(results);
              done();
            }
          );
      });
    });
  });
});
