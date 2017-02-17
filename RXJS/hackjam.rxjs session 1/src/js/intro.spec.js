import {expect} from "chai";
import sinon from "sinon";
import {Observable} from "./intro";

// an observable is a function that accepts a producer in parameter and has a subscribe method
// a producer is  a function that throws/produces values and accepts an observer
// an observer is just an object that has 3 functions: next, error, complete
// and listen to the value emitted  by the producer

describe('What is an Observable', () => {
  it('An Observable is a function', () => {
    expect(typeof Observable).equal('function');
  });
  it('An observer is an object that has 3 functions: next, error, complete', () => {
    const observer = {
      next(val){
      },
      error(err){
      },
      complete(){
      }
    };
    expect(typeof observer.next).equal('function');
    expect(typeof observer.error).equal('function');
    expect(typeof observer.complete).equal('function');
  });
  it('A Producer is a function that takes an observer as parameter and throws/produces values', () => {
    const nextSpy = sinon.spy();
    const errorSpy = sinon.spy();
    const completeSpy = sinon.spy();
    const observer = {
      next: nextSpy,
      error: errorSpy,
      complete: completeSpy
    };
    const nextValue = 10;
    const errorValue = 'an error';
    const producer = function (observer) {
      observer.next(10);
      observer.error(errorValue);
      observer.complete();
    };
    producer(observer);
    expect(nextSpy.getCall(0).args[0]).equals(nextValue);
    expect(errorSpy.getCall(0).args[0]).equals(errorValue);
    expect(completeSpy.calledOnce);
  });

  it('An Observable is a function that takes producer as parameter', () => {
    const producer = function () {
    };
    const spy = sinon.spy(Observable.prototype, 'constructor');
    const constructor = Observable.prototype.constructor;
    const inst = new constructor(producer);
    expect(typeof spy.args[0][0]).equal('function');
  });

  it('An Observable is a function that has a subscribe method', () => {
    const producer = function () {
    };
    const observable = new Observable(producer);
    expect(typeof observable.subscribe).equal('function');
  });

  it('The subscribe method of an Observable takes an observer as parameter', () => {
    const producer = function () {
    };
    const observable = new Observable(producer);
    const observer = {
      next(val){
      }, error(err){
      }, complete(){
      }
    };

    const spy = sinon.spy(observable, 'subscribe');
    spy.withArgs(observer);

    observable.subscribe(observer);

    expect(spy.withArgs(observer).calledOnce)
  });

  it('The subscribe method of an Observable call the producer with the observer as parameter', () => {
    const nextValue = 10;
    const errorValue = 'an error';
    const nextSpy = sinon.spy();
    const errorSpy = sinon.spy();
    const completeSpy = sinon.spy();
    const observer = {
      next: nextSpy,
      error: errorSpy,
      complete: completeSpy
    };
    const producer = function (observer) {
      observer.next(10);
      observer.error(errorValue);
      observer.complete();
    };
    const observable = new Observable(producer);

    const spy = sinon.spy(observable, 'subscribe');
    spy.withArgs(observer);
    observable.subscribe(observer);
    expect(spy.withArgs(observer).calledOnce);

    expect(nextSpy.getCall(0).args[0]).equals(nextValue);
    expect(errorSpy.getCall(0).args[0]).equals(errorValue);
    expect(completeSpy.calledOnce);
  });
});
