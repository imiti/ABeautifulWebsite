
		$(document).ready(function() {
			$("#login").click(function(){
				$.XYTipsWindow({
					___title:"登录",
					___content:"iframe:./rights/login.html",
					___width:"460",
					___height:"150",
					___showbg:true,
					___drag:"___boxTitle"

				});
			});
	
			$("#reg").click(function(){
				$.XYTipsWindow({
					___title:"注册",
					___content:"iframe:./rights/reg.html",
					___width:"460",
					___height:"450",
					___showbg:true,
					___drag:"___boxTitle"
				});
			});
		});