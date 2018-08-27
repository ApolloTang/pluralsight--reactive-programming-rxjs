import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

const circle = document.createElement('div');
circle.style.setProperty('width', '20px');
circle.style.setProperty('height', '20px');
circle.style.setProperty('border-radius', '50%');
circle.style.setProperty('background-color', 'red');
circle.style.setProperty('position', 'absolute');
document.body.appendChild(circle);


let source = Observable
  .fromEvent( document, 'mousemove')
  .map( (e:any) => ({x:e.clientX, y:e.clientY}))
  .filter( (v:any) => v.x < 300 )
  .delay(300)


function onNext(v:{x:number, y:number}) {
  circle.style.left = `${v.x}px`;
  circle.style.top = `${v.y}px`;
};


import {Observer} from 'rxjs/Observer';
class MyObjserver implements Observer<number> {

  next(value: any) {
    onNext(value)
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
