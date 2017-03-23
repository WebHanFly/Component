//定义数组
 var data = [
      {img:1,h1:'Creative',h2:'DUTE'},
      {img:2,h1:'Creativ',h2:'DUTE'},
      {img:3,h1:'Create',h2:'DUTE'},
      {img:4,h1:'Creive',h2:'DUTE'},
      {img:5,h1:'Cative',h2:'DUTE'},
      {img:6,h1:'reative',h2:'DUTE'},
      {img:7,h1:'Crtive',h2:'DUTE'}
      
 ];
 //通用函数
 var g = function(id){
 	if(id.substr(0,1) == '.'){
 		return document.getElementsByClassName( id.substr(1) );
 	}
 	return document.getElementById(id);
 }
 //添加幻灯片的额操作（所有幻灯片对应的按钮）
 function addSlider(){
  //获取模板
    var tpl_main = g('header').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    var ctrl_main = g('footer').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
 	  var out_main = [];
 	  var out_ctrl = [];
 	for(i in data){
 		var html_main = tpl_main.replace(/{{index}}/g,data[i].img)
 								.replace(/{{h1}}/g,data[i].h1)
 								.replace(/{{h2}}/g,data[i].h2)
                .replace(/{{css}}/g,['','mat'][i%2]);
 		var html_ctrl = ctrl_main.replace(/{{index}}/g,data[i].img);
 		out_main.push(html_main);
 		out_ctrl.push(html_ctrl);
 		//获取到dom数组
 		g('header').innerHTML = out_main.join('');
 		g('footer').innerHTML = out_ctrl.join('');
 		//console.log(html_ctrl);
  			//幻灯片切换
  		g('header').innerHTML += tpl_main.replace(/{{index}}/g,'{{index}}')
 								.replace(/{{h1}}/g,data[i].h1)
 								.replace(/{{h2}}/g,data[i].h2)
                
 		  g('main_{{index}}').id = 'main_bg';		
 						
  		
 	}
 };
 function switchslider(n){
  			var main = g('main_'+n);
  			var ctrl = g('ctrl_'+n);
  			var clear_main = g('.main-i');
  			var clear_ctrl = g('.ctrl-i');
  			for(var i=0;i<data.length;i++){
  				clear_ctrl[i].className = clear_ctrl[i].className.replace('ctrl_active','');
  				clear_main[i].className = clear_main[i].className.replace('main_active','');
  			}
  			//附加样式
  			main.className += ' main_active'; 
  			ctrl.className += ' ctrl_active';
  			setTimeout(function(){g('main_bg').innerHTML= main.innerHTML;},1000);
  			 
  		}
 //调整图片的margin-top;
      function movepic (){
      	var pics = g('.picture');
      	for (var i=0;i<pics.length;i++){
      		pics[i].style.marginTop = (-1*pics[i].clientHeight/2)+'px';      
      			}
      }

 //定义幻灯片何时处理输出
 window.onload = function (){
 	addSlider();
 	switchslider(1);
 	setTimeout(function(){movepic();},100);
 	
 }