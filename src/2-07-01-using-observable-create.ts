import {Observable} from 'rxjs/Observable';

let numbers = [11,5,10];

let source = Observable.create(function subscribe(observer:any){
  for(let n of numbers) {
    if (n===5) {
      observer.error('error b/c n === 5');
    }
    observer.next(n)
  }
});

// source.subscribe(
//   (value: any) => console.log('value: ', value),
//   (err: any) => console.error('something wrong occurred: ' + err),
//   () => console.log('done')
// )

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


