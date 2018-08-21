import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

let numbers = [1,5,10];
let source = Observable.from(numbers)

{/*
    // the following does not work

    class MyObjserver {
      next(value: any) {
        console.log('value: ', value)
      }

      error(e: any){
        console.log('error: ', e)
      }

      complete(e: any){
        console.log('done')
      }
    }
    source.subscribe( new MyObjserver() )
*/}

source.subscribe({
  next: (x: number) => console.log('got value ' + x),
  error: (err: any) => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});


