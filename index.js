let display=document.getElementById("input")
let btn1= document.getElementById("one")
let btn2=document.getElementById("two")
let btn3=document.getElementById("three")
let btn4=document.getElementById("four")
let btn5=document.getElementById("five")
let btn6=document.getElementById("six")
let btn7=document.getElementById("seven")
let btn8=document.getElementById("eight")
let btn9=document.getElementById("nine")
let btn0=document.getElementById("zero")
let btnC=document.getElementById("c")
let btnbrecket=document.getElementById("bracket")
let btnpar=document.getElementById("par")
let btndivi=document.getElementById("divi")
let btnmulti=document.getElementById("multi")
let btnsub=document.getElementById("sub")
let btnsum=document.getElementById("sum")
let btnsum_sub=document.getElementById("sum-sub")
let btndot=document.getElementById("dot")
let btnequl=document.getElementById("equl")

console.log(display,one,two,three, four, five,six, seven, eight, nine ,zero,btnbrecket,btnpar,btndivi,btnmulti,btnsub,btnsum,btnsum_sub,btndot,btnequl)

function addtodisplay(value){
    display.value+=value;
}
function cleardisplay(){
    display.value=''
}
function calculator(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value='error;'
    }
}


