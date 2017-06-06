function onPageInit() { 
	//页面初始化
	document.getElementById('chatContentFootDiv').style.height = document.getElementById('inputDiv').offsetHeight + "px";
}

document.addEventListener('click', function(){
	document.getElementById('inputText').focus();
})

//键盘监听
document.onKeyDown = function(e) {
    e = e ? e : window.event;
    var keyCode = e.which ? e.which : e.keyCode;

    if(e.keyCode){
       if (e.keyCode==13){
       	sendMessage();
       }
   	} else{
      	if(e.which==13){
      		sendMessage();
    	}
	}
}


//发出一个消息

function sendMessage() {
	var text = document.getElementById('inputText').value;


	if(text == "cd home"){
		window.location.href =('html/index.html');
	} else if (text == "firework") {
		window.location='html/firework.html';
	} else {

		if (text.length > 0) {
			document.getElementById('chatContent').innerHTML += '<li class="me" style="list-style-type:none;">' + 'nee@localhost:~$ ' +text + '</li>';
			document.getElementById('inputText').value = "";
			scrollBy(0, document.body.scrollHeight);

			var url="";    
			$.ajaxSetup({async:false}); 
			var json_root="config.json";
			var modeEng = new Boolean(true);

			for(var i = 0; i < text.length; i ++) {
				var ch = text[i];
				if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
					modeEng = true;
					break;
				} else {
					modeEng = false;
					break;
				}
			}


			if(modeEng) {
				$.getJSON(json_root,function(data){    
					url = data.url + "/api/chatEng";
				});
			} else {
				$.getJSON(json_root,function(data){    
					url = data.url + "/api/chatChi";
				});
			}

			$.ajax({
				url:url,
				type:"POST",
				data:{"chat":text},
				success:function setReceivedMessage(data) {
					document.getElementById('chatContent').innerHTML += '<a class="cat">' + data.chat + '</a>';
					scrollBy(0, document.body.scrollHeight);								
				}
			});
		}
		
	}

	
	
}