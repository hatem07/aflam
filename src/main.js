function add(i){$("#"+i).load(i+".html");}
function tt(){a=document.title;$("#"+a).css("color","white");}
setTimeout(function(){ tt() }, 1000);



//navigate to other pages
/*function add(i){
$.ajax(i+".html", {
success: function(response) {
$("#"+i).html(response);
}

}); 
};



function add(i){
if(i=='index'){$("#loading").style('display:block;');}
$("#"+i).load(i+".html", function(responseTxt, statusTxt, xhr){
if(statusTxt == "success")$("#loading").style("display:none;");
if(statusTxt == "error")$("#"+i).html(("Error: " + xhr.status + ": " + xhr.statusText));
  });
}*/

