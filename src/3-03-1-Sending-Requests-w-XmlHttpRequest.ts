import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

const button = document.createElement('button');
button.innerText = 'click me';
document.body.appendChild(button);

const outputDisplay = document.createElement('div');
document.body.appendChild(outputDisplay);

function load(url: string) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", ()=>{
    const movies = JSON.parse(xhr.responseText)
    movies.forEach((m:any)=>{
      let div = document.createElement('div');
      div.innerText = m.title;
      console.log(div, m)
      outputDisplay.appendChild(div)
    })
  });

  xhr.open('GET', url)
  xhr.send();
}

let sourceClick = Observable
  .fromEvent( button, 'click')

import {Observer} from 'rxjs/Observer';
class MyObjserver implements Observer<number> {

  next(value: any) {
    load('assets/movies.json')
  }

  error(e: any){
    console.error('error: ', e)
  }

  complete(){
    console.log('done')
  }

}
sourceClick.subscribe( new MyObjserver() );


// source.subscribe(
//   (value: any) => console.log('value: ', value),
//   (err: any) => console.error('something wrong occurred: ' + err),
//   () => console.log('done')
// )
