var y=2;
function myname1(myname)
{
	var x=document.getElementById('demo') ;
	
	if(y%2==0)
	    {
	    	x.innerHTML= myname;
	    	document.body.style.backgroundColor = 'green';
	    }
    else
    {
    	x.innerHTML="fuck off ";
        document.body.style.backgroundColor = 'yellow';}
    y++;
    if(y>12){
    	y=2;
    	x.innerHTML=" ";
    	document.body.style.backgroundColor="white";
    }

}
function myfunc2()
{
	document.getElementById("newp").innerHTML = Date();
}
function myfunc3()
{
	document.getElementById("newp").innerHTML = " ";
}