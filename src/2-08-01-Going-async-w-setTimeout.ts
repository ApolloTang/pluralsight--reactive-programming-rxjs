import {Observable} from 'rxjs/Observable';

let numbers = [11,5,10];

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

});


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
