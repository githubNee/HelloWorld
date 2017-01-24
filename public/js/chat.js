function onPageInit() { //页面初始化
		document.getElementById('chatContentFootDiv').style.height = document.getElementById('inputDiv').offsetHeight + "px";
	}
	//键盘监听

function onKeyDown(event) {
		if (window.event.keyCode == 13) { //按下ENTER发送消息
			sendMessage();
		}
	}
	//发出一个消息

function sendMessage() {
	var text = document.getElementById('inputText').value;
	if (text.length > 0) {
		//添加信息
		document.getElementById('chatContent').innerHTML += '<li class="me">' + text + '</li>';
		//清空输入框
		document.getElementById('inputText').value = "";
		//移动到底端
		scrollBy(0, document.body.scrollHeight);

		$.ajax({
			url:"http://localhost:3000/api/chat",
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