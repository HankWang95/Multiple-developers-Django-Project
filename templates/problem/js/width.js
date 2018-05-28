/**
 * Created by DELL on 2018/4/11.
 */
function tab() {

    var w = window.screen.width ;
    if (w>980){
        var head = document.getElementsByTagName('HEAD').item(0);
//这种方法是导入js文件加载。
//或  var head = document.getElementsByTagName('HEAD')[0];
        var script= document.createElement("script");
        script.type = "text/javascript";
        script.src="";
        head.appendChild(script);
        var script1= document.createElement("script");
        script1.type = "text/javascript";
        script1.src="js/public.js";
        head.appendChild(script1);
    }else{
        var headm = document.getElementsByTagName('HEAD').item(0);
//这种方法是导入js文件加载。
//或  var head = document.getElementsByTagName('HEAD')[0];
        var scriptm1= document.createElement("script");
        scriptm1.type = "text/javascript";
        scriptm1.src="js-m/ins_hos_db.js";
        headm.appendChild(scriptm1);
        var scriptm2= document.createElement("script");
        scriptm2.type = "text/javascript";
        scriptm2.src="js-m/public.js";
        headm.appendChild(scriptm2);
    }
}