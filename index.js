
// var x = 20;
//  var y = 4;

// x += y 

// document.write(x)

// var x = 10;
// var y = '20';

// document.write(x !== y);
// var male = "miss mina"
// var female = "mr gi"

// if(male == "miss mina" ){
//     document.write("hello mrs " + 'mobarak ho ap ek orat hain')
// }else{
//     document.write('sorry mujhe nahe pata ke ap kon ho')
// }
// var a = 'hello my dear friends'

// alert(a)

// var a = confirm('are you ready for your text')

// alert(a)
// var a = prompt('hello bhi ye ap ka nam hai')
// if(a = 'ali'){
//    document.write('sahe hai bhi');
// }else{
//     alert('tere jad ka bada');
// }

//  function geo(){
//     alert('HELLO EVERYONE WELCOME TO OUR WEBSITE')
//  }

// var a = 1;

// while(a <= 10){
//    document.write(a + 'geo khan geo <br>')
//    a = a + 1;
// }

// function recipy(){
//    document.write('kia karun haye kuch hita hai')
// }
// prompt('recipy();')
// var a = {
//    color:'white',
//    type:"smart",
//    price:'thousand'
// }
// a.color

// if (0){
//     document.write('heloo truthy')
// }else {
//     document.write('hello falsy')
// }

 //FOR EACH USE
// var a =[2,3,4,5,6,7,8,9,]

// a.forEach(function(val){
//     document.write(val*2)
// })

//FORIN USE 

// var obj = {
//     name:'arsalan',
//     age : '23',
//     class:'first year'
// }

// for(var key in obj){
//     document.write(key, obj[key]);
// }
// var a = document.querySelector('h1')
// a.addEventListener('click',function(){
//     a.style.color = 'red'
//     a.style.boxShadow = '2px 3px 4px 19px black'
// })

// a.style.color = 'green'
// a.style.backgroundColor = 'skyblue'

var main = document.querySelector('.main')
var bulb = document.querySelector('.bulb')

var  flag = 0;

bulb.addEventListener('click',function(){
    if (flag == 0){
        main.style.backgroundColor = 'yellow'
        flag = 1
    }else{
        main.style.backgroundColor = 'transparent'
        flag = 0
    }
})


























































