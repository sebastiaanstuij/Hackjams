// an observable is a function that accepts a producer in parameter and has a subscribe method
// a producer is  a function that throws/produces values and accepts an observer
// an observer is just an object that has 3 functions: next, error, complete
// and listen to the value emitted  by the producer
export class Observable {}

export interface Observer {}

export type Producer = () => any;
