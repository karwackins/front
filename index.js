import 'bootstrap/dist/css/bootstrap.css'

import $ from 'jquery'
import m from './math'
import { minus, plus } from './math'
import * as mm from './math'

let c = $('#counter')
let v = Number(localStorage.getItem("counter"));

$('#plus').on('click', function(){
    let v = Number(localStorage.getItem("counter"));
    v += 1
    localStorage.setItem("counter", v)
    c.text(v)
});

/*
console.log("math*", mm)
console.log(minus(2,1))
console.log(plus(2,1))
*/