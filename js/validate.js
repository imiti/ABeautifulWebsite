var check = function()
{
	if(!document.getElementById("username").checkValidity())
	{
		document.getElementById("username").setCustomValidity("asdasd");
		return false;
	}
	if(!document.getElementById("password").checkValidity())
	{
		document.getElementById("password").setCustomValidity("asdasd");
		return false;
	}
	if(!document.getElementById("verificode").checkValidity())
	{
		document.getElementById("verificode").setCustomValidity("asdasd");
		return false;
	}
	if(!document.getElementById("password1").checkValidity())
	{
		document.getElementById("password1").setCustomValidity("asdasd");
		return false;
	}
	if(!document.getElementById("password2").checkValidity())
	{
		document.getElementById("password2").setCustomValidity("asdasd");
		return false;
	}
	if(!document.getElementById("accept").checkValidity())
	{
		document.getElementById("accept").setCustomValidity("asdasd");
		return false;
	}
};