function quit()
{
    document.location = "ui://close";
}

function validar()
{
	valid_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-";
	value = document.getElementById("hostname").value;
	valid = true;

	for(i = 0;i < value.length; i++)
	{
		if(valid_chars.indexOf(value[i]) < 0)
		{
			valid = false;
		}
	}
	
	if(valid && value.length > 0)
	{
		document.getElementById("indicador").src = "img/pana-verde.png";
		result = true;
	}
	else
	{
		if(value.length == 0)
		{
			document.getElementById("indicador").src = "img/pana-gris.png";
		}
		else
		{
			document.getElementById("indicador").src = "img/pana-rojo.png";
		}
		result = false;
	}
	document.getElementById("accept").disabled = result ? "" : "disabled";
	return result;
}
