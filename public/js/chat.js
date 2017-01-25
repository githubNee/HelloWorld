function onPageInit() { 
//页面初始化
	document.getElementById('chatContentFootDiv').style.height = document.getElementById('inputDiv').offsetHeight + "px";
	}

//键盘监听

 document.onKeyDown = function(e) {
    e = e ? e : window.event;
    var keyCode = e.which ? e.which : e.keyCode;

    if(e.keyCode){
       if (e.keyCode==13){
       	sendMessage();
       }
       }else{
          if(e.which==13){
          	sendMessage();
          }
       }
}


//发出一个消息

function sendMessage() {
	var text = document.getElementById('inputText').value;
	
	if (text.length > 0) {
		//添加信息
		document.getElementById('chatContent').innerHTML += '<li class="me" style="list-style-type:none;">' + '>>' +text + '</li>';
		//清空输入框
		document.getElementById('inputText').value = "";
		//移动到底端
		scrollBy(0, document.body.scrollHeight);

		var url="";    
		$.ajaxSetup({async:false}); 
		var json_root="config.json";
		$.getJSON(json_root,function(data){    
			url = data.url + "/api/chat";
		})   

		$.ajax({
			url:url,
			type:"POST",
			data:{"chat":text},
			success:function setReceivedMessage(data) {
			//添加信息
			document.getElementById('chatContent').innerHTML += '<a class="cat">' + data.text + '</a>';
			//移动到底端
			scrollBy(0, document.body.scrollHeight);
								
			}
		})
	}
}