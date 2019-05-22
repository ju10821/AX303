$(document).ready(function(){
	$("#confirm").on("click",function(){
		chrome.tabs.create({"url": "https://docs.google.com/document/u/0/?tgif=c"});
	})
})