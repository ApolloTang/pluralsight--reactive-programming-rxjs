import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {Observer} from 'rxjs/Observer';

let numbers = [1,5,10];
let source = Observable.from(numbers)

class MyObjserver implements Observer<number> {
  next(value: any) {
    console.log('value: ', value)
  }

  error(e: any){
    console.log('error: ', e)
  }

  complete(){
    console.log('done')
  }
}
source.subscribe( new MyObjserver() )

// source.subscribe({
//   next: (x: number) => console.log('got value ' + x),
//   error: (err: any) => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });


