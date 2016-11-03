function Ball(width,hudu,parW,speed){//这个是需要的元素属性
	this.ele=document.createElement('div');//创建一个球
	this.elePar=document.createElement('div');//创建一个框
	document.body.appendChild(this.elePar);//把创建的东西给body让他们显示在body里
	this.elePar.appendChild(this.ele);//把创建的东西给body让他们显示在body里
	this.ele.setAttribute('style','width:'+width+'px;height:'+width+'px;border-radius:50%;background-color:red;position:absolute;left:0;top:0');
	this.elePar.setAttribute('style','height:'+parW+'px;width:'+parW+'px;border:1px solid #000;margin:0 auto;position:relative');
	this.speedX=speed*Math.sin(hudu);//初始化一个x角度
	this.speedY=speed*Math.cos(hudu);//初始化一个y角度
	this.dirX=1;//初始化一个方向
	this.dirY=1;
	this.x=0; //存储的移动x距离
	this.y=0; //存储的移动y距离
	this.start();
}
//在写ball需要的方法
Ball.prototype={
	start:function(){//这个是开始动的函数
		console.log(this)
		var me=this;//定时器里不能用this
		this.timer=setInterval(function(){
			//me.pz();//调用一个碰撞的函数
			if(me.x<0){
				me.dirX=1;
		}
		if(me.x>me.elePar.offsetWidth-me.ele.offsetWidth){
			me.dirX=-1;
		}
		if(me.y<0){
			me.dirY=1;
		}
		if(me.y>me.elePar.offsetHeight-me.ele.offsetHeight){
			me.dirY=-1;
		}
			me.x+=me.speedX*me.dirX;
			me.y+=me.speedY*me.dirY;
			me.ele.style.left=me.x+'px';
			me.ele.style.top=me.y+'px';
		},30);
	},
	// pz:function(){//这个是判断边界的函数
	// 	//console.log(this)
	// 	var me=this;
	// 	if(me.x<0){
	// 			me.dirX=1;
	// 	}
	// 	if(me.x>this.elePar.offsetWidth-this.ele.offsetWidth){
	// 		me.dirX=-1;
	// 	}
	// 	if(me.y<0){
	// 		me.dirY=1;
	// 	}
	// 	if(me.y>this.elePar.offsetWidth-this.ele.offsetWidth){
	// 		me.dirY=-1;
	// 	}
	// }
}