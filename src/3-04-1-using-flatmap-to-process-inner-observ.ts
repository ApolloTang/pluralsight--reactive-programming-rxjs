import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

const button = document.createElement('button');
button.innerText = 'click me';
document.body.appendChild(button);

const outputDisplay = document.createElement('div');
document.body.appendChild(outputDisplay);

function load(url: string) {
  // vvvvvvvvvvvvvvvvvvv
  // Now load is subscrible because it is now returning an Observable
  return Observable.create( (observer:any) => {
    ///
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", ()=>{
      const movies = JSON.parse(xhr.responseText)
      renderMovies(movies)

      observer.next(movies) // <<<<<<<<
      observer.complete()   // <<<<<<<<
    });

    xhr.open('GET', url)
    xhr.send();
    ///
  })
}

function renderMovies(movies:any[]) {
  movies.forEach( (m:any)=>{
    const div = document.createElement('div');
    div.innerText = m.title;
    outputDisplay.appendChild(div)
  })
}

let sourceClick = Observable
  .fromEvent( button, 'click')

import {Observer} from 'rxjs/Observer';
class MyObjserver implements Observer<number> {

  next(value: any) {
    load('assets/movies.json')
      .subscribe(
        (value: any) => console.log('xxxxxx value: ', JSON.stringify(value, null, 2)),
              // xxxxxx value:  [
              //   {
              //     "title": "Star Wars"
              //   },
              //   {
              //     "title": "Star Trek"
              //   },
              //   {
              //     "title": "Starship Troopers"
              //   }
              // ]
      )
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
