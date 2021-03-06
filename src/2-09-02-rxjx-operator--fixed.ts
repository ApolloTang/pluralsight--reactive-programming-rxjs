import {Observable} from 'rxjs/Observable';
import {
  map,
  filter
} from 'rxjs/operators';
// https://stackoverflow.com/questions/47198706/rxjs-pipe-and-lettable-operator-map-this-context-of-type-void-is-not-assi/47198895

let numbers = [1,5,10];

let source = Observable.create(function subscribe(observer:any){

  const length = numbers.length;
  let i = 0;
  const produceValue = () => {
    if (i < length ) {
      observer.next(numbers[i++])
    } else {
      observer.complete()
    }
    setTimeout( produceValue , 2000)
  }

  produceValue();

}).pipe(
  map( (n:any) => n*2 ),
  filter( (n:any) => n > 4 )
)


import {Observer} from 'rxjs/Observer';
class MyObjserver implements Observer<number> {

  next(value: any) {
    console.log('value: ', value)
  }

  error(e: any){
    console.error('error: ', e)
  }

  complete(){
    console.log('done')
  }

}
source.subscribe( new MyObjserver() );


// source.subscribe(
//   (value: any) => console.log('value: ', value),
//   (err: any) => console.error('something wrong occurred: ' + err),
//   () => console.log('done')
// )
