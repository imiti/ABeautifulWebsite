$(document).ready(function() {
        $("#hongqiu>div>div").toggle(function() {
			$(this).css("background","url(../images/shuangseqiu/" + $(this).attr("id") + ".bmp)");
			redArray[$(this).attr("id").substring(1)] = true;
		},function() {
			$(this).css("background","url(../images/shuangseqiu/w" + $(this).attr("id").substring(1)+".bmp)");
			redArray[$(this).attr("id").substring(1)] = false;
		});
		$("#lanqiu>div>div").toggle(function() {
			$(this).css("background","url(../images/shuangseqiu/" + $(this).attr("id") + ".bmp)");
			blueArray[$(this).attr("id").substring(1)] = true;
		},function() {
			$(this).css("background","url(../images/shuangseqiu/w" + $(this).attr("id").substring(1) +".bmp)");
			blueArray[$(this).attr("id").substring(1)] = false;
		});
		
    });
	
	var redArray = [false,false,false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,false,false,
					false,false,false,false,false,false,false,false,false,false,
					false,false,false,false];
	var blueArray = [false,false,false,false,false,false,
					false,false,false,false,false,false,
					false,false,false];
	var sure = function() {
		var str1 = "";
		var str2 = "";
		for(var i = 0;i < redArray.length;i++) {
			if(redArray[i] == true) {
				str1 += i + " ";
			}
		}
		for(var i = 0;i < blueArray.length;i++) {
			if(blueArray[i] == true){
				str2 += i + " ";
			}
		}
		$("#text_id").val("红:" + str1 + "蓝:" + str2).append();
	}