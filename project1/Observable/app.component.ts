import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // /////////////////////////////////////////////////////////////
    // ///////example: promise ////////////////////////////
    // /////////////////////////////////////////////////////////////
    // let promise = new Promise( resolve => {
    //   console.log('promise execution');

    //   setTimeout( ()=> {
    //     resolve('promise resolved');
    //   }, 5000);
    // });

    // promise.then( (value: string) => {
    //   console.log(value);
    // });

    // /////////////////////////////////////////////////////////////
    // ///////example: observable ////////////////////////////
    // /////////////////////////////////////////////////////////////
    // let stream$ = new Observable(observer => {
    //   console.log('observable execution');

    //   observer.next(1);
    //   observer.next(2);

    // });

    // let subscription = stream$.subscribe(
    //   value => console.log(value),
    //   error => console.log(error),
    //   () => console.log('done'));

    //   stream$.subscribe(
    //     value => console.log('second ' + value),
    //     error => console.log(error),
    //     () => console.log('done'));

    // /////////////////////////////////////////////////////////////
    // ///////example: subject ////////////////////////////
    // /////////////////////////////////////////////////////////////

    // let subject = new Subject();

    // subject.subscribe( (v) => {
    //   console.log('SubjectA:' + v);
    // });

    // subject.subscribe( (v) => {
    //   console.log('SubjectB:' + v);
    // });

    // subject.next(1);
    // subject.next(2);

    // subject.subscribe( (v) => {
    //   console.log('SubjectC:' + v);
    // });

    // subject.next(3);


    // /////////////////////////////////////////////////////////////
    // ///////example: Create observables from button click///////
    // /////////////////////////////////////////////////////////////
    
    // /// html add a button
    // // <button id="btn">Click me</button>

    // const btn = document.querySelector('#btn');
    // const btnStream$ = Observable.fromEvent(btn, 'click');

    // btnStream$.subscribe(
    //   (e: any) => console.log(e.target.innerHTML),
    //   err => console.error(err),
    //   () => console.log('complete')
    // );

    // /////////////////////////////////////////////////////////////
    // ///////example: Create observables keyup/keydown events////
    // /////////////////////////////////////////////////////////////
    
    /// html add an input
    // <input id='input' type="text">

    // const input = document.querySelector('#input');
    // const inputStream$ = Observable.fromEvent(input, 'keydown'); // or keydown

    // inputStream$.subscribe(
    //   (e: any) => console.log(e.target.value),
    //   err => console.error(err),
    //   () => console.log('complete')
    // );

    // /////////////////////////////////////////////////////////////
    // ///////example: Create observables from mousemove /////////
    // /////////////////////////////////////////////////////////////
    
    // /// html add an input
    // // <div id="output" style="height: 100px; border-color: black; border-style: solid;"></div>

    // const output = document.querySelector('#output');
    // const moveStream$ = Observable.fromEvent(output, 'mousemove'); // or keydown

    // moveStream$.subscribe(
    //   (e: any) => output.innerHTML = `<h1> x: ${e.clientX}, y: ${e.clientY}</h1>`,
    //   err => console.error(err),
    //   () => console.log('complete')
    // );

    // /////////////////////////////////////////////////////////////
    // ///////example: Create observables from arrays  ///////////
    // /////////////////////////////////////////////////////////////
    
    // const numbers = [1, 2, 3, 6, 4, 12];
    // const numbers$ = Observable.from(numbers);

    // numbers$.subscribe(
    //   (e: any) => console.log(e),
    //   err => console.error(err),
    //   () => console.log('complete')
    // );

    // /////////////////////////////////////////////////////////////
    // ///////example: http request example  ////////////////////
    // /////////////////////////////////////////////////////////////

    //// don't forget to import { Http, Response } from '@angular/http';
    // and add   constructor(private http: Http) {}
    // getGitHubAPI()
    //   .subscribe(
    //     // v => console.log(v)
    //     (res: Response) => console.log(res.json())
    //   );
    // getUser(username) {
    //     return this.http.get('https://api.github.com');
    // }

    // /////////////////////////////////////////////////////////////
    // ///////example: interval operator/////////////////////////
    // /////////////////////////////////////////////////////////////
    // const source$ = Observable.interval(1000).take(5); 
    // // every 1000 ms, produce 1 value, will produce 5 in total
    // source$.subscribe(
    //   v => console.log(v),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );

    // /////////////////////////////////////////////////////////////
    // ///////example: timer operator////////////////////////////
    // /////////////////////////////////////////////////////////////

    // const source$ = Observable.timer(5000, 500).take(5); 
    // // at the beginning, wait for 5s, then every 0.5s, produce a number
    // // in total, 5 numbers
    // source$.subscribe(
    //   v => console.log(v),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );

    // /////////////////////////////////////////////////////////////
    // ///////example: range operator////////////////////////////
    // /////////////////////////////////////////////////////////////

    // const source$ = Observable.range(100, 10); 
    // // starting from 100, will generate 10 in total
    // source$.subscribe(
    //   v => console.log(v),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );

    // /////////////////////////////////////////////////////////////
    // ///////example: map operator//////////////////////////////
    // /////////////////////////////////////////////////////////////

//     const source$ = Observable.from(['Adam', 'Bob', 'Charlie'])
//                     .map(v => v.toUpperCase())
//                     .map(v => 'I am ' + v);
//
//     source$.subscribe(
//       v => console.log(v),
//       err => console.error(err),
//       () => console.log('completed')
//     );

    // /////////////////////////////////////////////////////////////
    // ///////example: pluck operator////////////////////////////
    // /////////////////////////////////////////////////////////////
    // pluck: select properties
//     const users = [
//       {name: "Adam", age: 10 },
//       {name: "Bob", age: 50 },
//       {name: "Charlie", age: 88 }
//     ];
//     const source$ = Observable.from(users)
//                     .pluck('name');
//
//     source$.subscribe(
//       v => console.log(v),
//       err => console.error(err),
//       () => console.log('completed')
//     );
  }
}
