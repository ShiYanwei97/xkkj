var bianse=document.getElementById("bianse");
var li=bianse.getElementsByTagName("li");
var s1=true;
li[0].onclick=function(){
	if(s1==true){
		s1=false;
		li[0].style.backgroundColor="#FF4500";
	}else{
		li[0].style.backgroundColor="";
		s1=true;
	}
}
var s2=true;
li[1].onclick=function(){
	if(s2==true){
		s2=false;
		li[1].style.backgroundColor="#FF4500";
	}else{
		li[1].style.backgroundColor="";
		s2=true;
	}
}
var s3=true;
li[2].onclick=function(){
	if(s3==true){
		s3=false;
		li[2].style.backgroundColor="#FF4500";
	}else{
		li[2].style.backgroundColor="";
		s3=true;
	}
}
var s4=true;
li[3].onclick=function(){
	if(s4==true){
		s4=false;
		li[3].style.backgroundColor="#FF4500";
	}else{
		li[3].style.backgroundColor="";
		s4=true;
	}
}
var s5=true;
li[4].onclick=function(){
	if(s5==true){
		s5=false;
		li[4].style.backgroundColor="#FF4500";
	}else{
		li[4].style.backgroundColor="";
		s5=true;
	}
}

var djtc=document.getElementsByClassName("tj")[0];
djtc.onclick=function(){
	this.innerHTML='提交成功';
	alert('你的充气娃娃购买成功，我们将在3天内进行发货');
}

