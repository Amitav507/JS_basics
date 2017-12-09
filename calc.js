function calc(){

var i = prompt("please enter operation");
var k1 =parseInt(prompt("enter 1st digit"),10) ;
var k2 = parseInt(prompt("enter 2nd digit"),10);
if (i === "Add"){
	let r=k1+k2;
    alert ("Success, result= " + r );
    document.getElementById("res").innerHTML = r ;
}
else if (i === "Subtract"){
	 let r=k1-k2;
     alert ("Success,result= " + r );
     document.getElementById("res").innerHTML = r ;
}
else if (i === "Multiply"){
	 let r=k1*k2;
     alert ("Success,result= " + r );
     document.getElementById("res").innerHTML = r ;
}
else if (i === "Divide"){
	 let r=k1/k2;
     alert ("Success,result= " + r );
     document.getElementById("res").innerHTML = r ;
}
else  {
              alert ("Retry, operation not found");
             
		}

}
