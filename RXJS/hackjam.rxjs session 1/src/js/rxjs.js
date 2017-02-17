// an observable is a function that accepts a producer in parameter and has a subscribe method
// a producer is a function that throws/produce values and accepts an observer
// an observer is just an object that has 3 functions: next, error, complete
// and listen to the value emitted  by the producer
export class Observable {
    constructor(producer){
        this._producer = producer
    }

    subscribe (next, error, complete){
        let observer
        if (arguments.length === 1 && typeof next ==='object') { 
            observer = next;
        } else {
            observer = {
                next: next || function next () {},
                error: error || function error () {},
                complete: complete || function complete () {},
            }
        }
        return this._unsubscribe = this._producer(observer)
    }

    unsubscribe() {
        return this._unsubscribe();
    }
}


/**
 * Static creation operators : of
 * Emits the arguments you provide, then completes.
 *
 * @see {@link https://www.learnrxjs.io/operators/creation/of.html } for examples.
 *
 * @param args
 * @returns {Observable}
 */
Observable.of = (...args) => {
    const ofProducer = function producer(observer) {
        args.forEach((val) => {
            observer.next(val)
        })
        observer.complete();
    }
    return new Observable(ofProducer);
};

/**
 * Static creation operators : interval
 * Emit numbers in sequence based on provided timeframe.
 *
 * @see {@link https://www.learnrxjs.io/operators/creation/interval.html } for examples.
 *
 * @param period {Number}
 * @returns {Observable}
 */
Observable.interval = (period) => {
    
    const intervalProducer = function producer(observer) {
        var counter = 0;
        const intervalID = setInterval(() => {
            observer.next(counter++)
        }, period);
        return function unsubscribe () {
            clearInterval(intervalID)
            observer.complete()
        }
    }
    return new Observable(intervalProducer);
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
Observable.fromArray = (args = []) => {
    const fromArrayProducer = function producer(observer) {
        args.forEach((val) => {
            observer.next(val)
        })
        observer.complete();
    }
    return new Observable(fromArrayProducer);
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
Observable.fromPromise = (promise = {}) => {
    const promiseProducer = function producer(observer){
        promise.then(val => {
            observer.next(val)
        }).catch(val =>{
            observer.error(val)
        }).then(() =>  observer.complete())
    }
    return new Observable(promiseProducer);
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
Observable.from = (input) => {



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

Observable.prototype.map = Observable.map = function (projection, thisArgs) {};

/**
 * Filtering operators : filter
 * only emits a value from the source if it passes a criterion function.
 *
 * @see {@link https://www.learnrxjs.io/operators/filtering/filter.html } for examples.

 * @param predicate
 * @param thisArgs: an optional argument to define what this is in the project function
 * @returns {Observable}
 */
Observable.prototype.filter = Observable.filter = function (predicate, thisArgs) {};

/**
 * Transformation operators : mapTo
 * Maps every value to the same value every time
 *
 * @see {@link https://www.learnrxjs.io/operators/transformation/mapto.html } for examples.
 *
 * @param constant
 * @returns {Observable}
 */
Observable.prototype.mapTo = function (constant) {};

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
Observable.prototype.do = function (next = (() => {
}), error = (() => {
}), complete = (() => {
})) {};

/**
 * Combinations operators : startWith
 * Emit given value first
 *
 * @see {@link https://www.learnrxjs.io/operators/combination/startwith.html} for examples.
 *
 * @param args {Array}
 * @returns {Observable}
 */
Observable.prototype.startWith = function (...args) {};

/**
 * Combinations operators : concat
 * Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.
 *
 * @see {@link https://www.learnrxjs.io/operators/combination/concat.html} for examples.
 *
 * @param args {Array}
 * @returns {Observable}
 */
Observable.prototype.concat = Observable.concat = function (...observables) {};

/**
 * Filtering operators : take
 * Takes the first count values from the source, then completes.
 *
 * @see {@link https://www.learnrxjs.io/operators/filtering/take.html } for examples.
 *
 * @param count {Number}
 * @returns {Observable}
 */
Observable.prototype.take = function (count) {};

/**
 * Filtering operators : first
 * Emits only the first value. Or emits only the first value that passes some test.
 *
 * @see {@link https://www.learnrxjs.io/operators/filtering/first.html } for examples.
 *
 * @param predicate {Function}
 * @returns {Observable}
 */
Observable.prototype.first = function (predicate) {};

/**
 * Filtering operators : skip
 * Returns an Observable that skips n items emitted by an Observable.
 *
 * @see {@link https://www.learnrxjs.io/operators/filtering/skip.html } for examples.
 *
 * @param the {Function}
 * @returns {Observable}
 */
Observable.prototype.skip = function (the) {};
