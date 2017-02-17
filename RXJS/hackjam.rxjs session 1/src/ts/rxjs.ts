// an observable is a function that accepts a producer in parameter and has a subscribe method
// a producer is a function that throws/produce values and accepts an observer
// an observer is just an object that has 3 functions: next, error, complete
// and listen to the value emitted  by the producer

export interface Observer {

}

export type Producer = () => any;

export class Observable {

  constructor() {}

  subscribe() {}


  /**
   * Static creation operators : interval
   * Emit numbers in sequence based on provided timeframe.
   *
   * @see {@link https://www.learnrxjs.io/operators/creation/interval.html } for examples.
   *
   * @param period {Number}
   * @returns {Observable}
   */
  static interval(period: number): Observable {
    return null;
  };

  /**
   * Static creation operators : of
   * Emits the arguments you provide, then completes.
   *
   * @see {@link https://www.learnrxjs.io/operators/creation/of.html } for examples.
   *
   * @param args
   * @returns {Observable}
   */
  static of(...args: any[]): Observable {
    return null;
  };


  /**
   * Static creation operators : fromArray
   * Converts an array to an Observable.
   *
   * /!\ doesn't exist in Rxjs, so use from operators see below
   * @see {@link https://www.learnrxjs.io/operators/creation/from.html } for examples.
   *
   * @param args {Array}
   * @returns {Observable}
   */
  static fromArray(args: any[] = []): Observable {
    return null;
  };

  /**
   * Static creation operators : fromPromise
   * Converts an promise to an Observable.
   *
   * @see {@link https://www.learnrxjs.io/operators/creation/frompromise.html } for examples.
   *
   * @param promise {Promise}
   * @returns {Observable}
   */
  static fromPromise(promise: Promise<any>): Observable {
    return null;
  };


  /**
   * Static creation operators : from
   * Converts almost anything to an Observable
   *
   * @see {@link https://www.learnrxjs.io/operators/creation/from.html } for examples.
   *
   * @param input
   * @returns {Observable}
   */
  static from(input): Observable {
    return null;
  };

  /**
   * Transformation operators : map
   * Apply a projection to each value and emits that projection in the returned observable
   *
   * @see {@link https://www.learnrxjs.io/operators/transformation/map.html } for examples.

   * @param projection
   * @param thisArgs: an optional argument to define what this is in the project function
   * @returns {Observable}
   */

  static map(projection: Function, thisArgs?: Observable): Observable {
    return null;
  };

  map(projection: Function, thisArgs?: Observable): Observable {
    return Observable.map(projection, thisArgs || this);
  };

  /**
   * Filtering operators : filter
   * only emits a value from the source if it passes a criterion function.
   *
   * @see {@link https://www.learnrxjs.io/operators/filtering/filter.html } for examples.

   * @param predicate
   * @param thisArgs: an optional argument to define what this is in the project function
   * @returns {Observable}
   */
  static filter(predicate: Function, thisArgs?: Observable): Observable {
    return null;
  };

  filter(predicate: Function, thisArgs?: Observable): Observable {
    return null;
  }

  /**
   * Transformation operators : mapTo
   * Maps every value to the same value every time
   *
   * @see {@link https://www.learnrxjs.io/operators/transformation/mapto.html } for examples.
   *
   * @param constant
   * @returns {Observable}
   */
  mapTo(constant: any): Observable {
    return null;
  };

  /**
   * Transformation operators : do
   * Transparently perform actions or side-effects, such as logging.
   *
   * @see {@link https://www.learnrxjs.io/operators/utility/do.html } for examples.
   *
   * @param next
   * @param error
   * @param complete
   * @returns {Observable}
   */
  do(next: Function = () => {
  }, error: Function = () => {
  }, complete: Function = () => {
  }): Observable {
    return null;
  };

  /**
   * Combinations operators : startWith
   * Emit given value first
   *
   * @see {@link https://www.learnrxjs.io/operators/combination/startwith.html} for examples.
   *
   * @param args {Array}
   * @returns {Observable}
   */
  startWith(...args): Observable {
    return null;
  };


  /**
   * Combinations operators : concat
   * Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.
   *
   * @see {@link https://www.learnrxjs.io/operators/combination/concat.html} for examples.
   *
   * @param args {Array}
   * @returns {Observable}
   */
  static concat(...observables: Observable[]): Observable {
    return null;
  };

  concat(...observables): Observable {
    return Observable.concat.apply(this, observables)
  }

  /**
   * Filtering operators : take
   * Takes the first count values from the source, then completes.
   *
   * @see {@link https://www.learnrxjs.io/operators/filtering/take.html } for examples.
   *
   * @param count {Number}
   * @returns {Observable}
   */
  take(count: number): Observable {
    return null;
  };

  /**
   * Filtering operators : first
   * Emits only the first value. Or emits only the first value that passes some test.
   *
   * @see {@link https://www.learnrxjs.io/operators/filtering/first.html } for examples.
   *
   * @param predicate {Function}
   * @returns {Observable}
   */
  first(predicate?: Function) {
    return null;
  };

  /**
   * Filtering operators : skip
   * Returns an Observable that skips n items emitted by an Observable.
   *
   * @see {@link https://www.learnrxjs.io/operators/filtering/skip.html } for examples.
   *
   * @param the {number}
   * @returns {Observable}
   */
  skip(the: number): Observable {
   return null; 
  };
}