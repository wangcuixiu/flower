window.onload=function(){
	
	var box=document.getElementById("box");

	var btnLeft=document.getElementById("leftBtn");

	var btnRight=document.getElementById("rightBtn");

	var list=document.getElementById("listBox");

	var btn=document.getElementById("btn");
	var btns=btn.children;

	var num=0;
	var len=list.children.length;
	var myTime=null;

	//划过小圆点的时候的事件
	for(let x=0;x<btns.length;x++){
		btns[x].index=x;
		btns[x].onmouseover=function(){
			
			num=this.index;
			bufferMove(list,{left:-num*790});
			for(let j=0;j<btns.length;j++){
				btns[j].className="";
			}
			btns[num].className="active";
		}
	}
}