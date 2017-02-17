import {expect} from 'chai';
import {Observable, Observer, Producer} from './intro';
import * as sinon from 'sinon';

// an observable is a function that accepts a producer in parameter and has a subscribe method
// a producer is  a function that throws/produces values and accepts an observer
// an observer is just an object that has 3 functions: next, error, complete
// and listen to the value emitted  by the producer

describe('What is an Observable', () => {

  it('An Observable is a function', () => {
    expect(typeof Observable).equal('function');
  });

  it('An observer is a object that has 3 functions: next, error, complete', () => {
    const observer: Observer = {
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
    const nextSpy: any = sinon.spy();
    const errorSpy: any = sinon.spy();
    const completeSpy: any = sinon.spy();
    const observer: Observer = {
      next: nextSpy,
      error: errorSpy,
      complete: completeSpy
    };
    const nextValue: number = 10;
    const errorValue: string = 'an error';
    const producer: Producer = function (observer: Observer) {
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
    const producer: Producer = function (observer: Observer) {
    };
    const spy: any = sinon.spy(Observable.prototype, 'constructor');
    const ObservableConstructor = Observable.prototype.constructor ;
    const inst: Observable = new ObservableConstructor(producer);
    expect(typeof spy.args[0][0]).equal('function');
  });

  it('An Observable is a function that has a subscribe method', () => {
    const producer: Producer = function (observer: Observer) {
    };
    const observable: Observable = new Observable(producer);
    expect(typeof observable.subscribe).equal('function');
  });

  it('The subscribe method of an Observable takes a observer as parameter', () => {
    const producer: Producer = function (observer: Observer) {
    };
    const observable: Observable = new Observable(producer);
    const observer: Observer = {
      next(val){
      },
      error(err){
      },
      complete(){
      }
    };

    const spy: any = sinon.spy(observable, 'subscribe');
    spy.withArgs(observer);

    observable.subscribe(observer);

    expect(spy.withArgs(observer).calledOnce)
  });

  it('The subscribe method of an Observable call the producer with the observer as parameter', () => {
    const nextValue: number = 10;
    const errorValue: string = 'an error';
    const nextSpy: any = sinon.spy();
    const errorSpy: any = sinon.spy();
    const completeSpy: any = sinon.spy();
    const observer: Observer = {
      next: nextSpy,
      error: errorSpy,
      complete: completeSpy
    };
    const producer: Producer = function (observer: Observer) {
      observer.next(10);
      observer.error(errorValue);
      observer.complete();
    };
    const observable: Observable = new Observable(producer);

    const spy: any = sinon.spy(observable, 'subscribe');
    spy.withArgs(observer);
    observable.subscribe(observer);

    expect(spy.withArgs(observer).calledOnce);
    expect(nextSpy.getCall(0).args[0]).equals(nextValue);
    expect(errorSpy.getCall(0).args[0]).equals(errorValue);
    expect(completeSpy.calledOnce);
  });
});
