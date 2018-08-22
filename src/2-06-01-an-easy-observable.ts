import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

let numbers = [11,5,10];
let source = Observable.from(numbers)
source.subscribe(
  (value: any) => console.log('value: ', value),
  (err: any) => console.error('something wrong occurred: ' + err),
  () => console.log('done')
)

// import {Observer} from 'rxjs/Observer';
// class MyObjserver implements Observer<number> {
//   next(value: any) {
//     console.log('value: ', value)
//   }
//
//   error(e: any){
//     console.log('error: ', e)
//   }
//
//   complete(){
//     console.log('done')
//   }
// }

// source.subscribe({
//   next: (x: number) => console.log('got value ' + x),
//   error: (err: any) => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });


