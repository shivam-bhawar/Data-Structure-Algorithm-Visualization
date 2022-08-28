arr = [];
var key_shift = 0;
var i = 0;

function randomArray()
{
	document.getElementById("step1").style.backgroundColor = "RED";
	document.getElementById("step1").style.color = "WHITE";
	document.getElementById("START").play();
	document.getElementById("random_button").style.display= "none";
	document.getElementById("custom_button").style.display= "none";
	document.getElementById("current_index").style.display = "inline-block";
	document.getElementById("index").style.display = "inline-block";
	document.getElementById("result").style.display = "block";
	document.getElementById("key").style.display = "inline-block";
	document.getElementById("submit_button").style.display = "inline-block";
	document.getElementById("next_button").style.display = "inline-block";
	document.getElementById("prev_button").style.display = "inline-block";
	
	for(i = 0; i <= 9; i++)
	{
		document.getElementById("index" + i).style.color = "BLACK";
		document.getElementById(i).style.color = "BLACK";
		document.getElementById(i).style.backgroundColor = "WHITE";
		document.getElementById(i).style.border = "1px solid black";
		arr.push(Math.floor(Math.random() * 99));
		document.getElementById(i).innerHTML = arr[i];
	}
}

function customInput()
{
	document.getElementById("random_button").style.display = "none";
	document.getElementById("custom_button").style.display = "none";
	document.getElementById("current_index").style.display = "inline-block";
	document.getElementById("index").style.display = "inline-block";
	document.getElementById("result").style.display = "block";
	document.getElementById("element_input").style.display = "inline-block";
	document.getElementById("sub_button").style.display = "inline-block";
}

var j = 0;
function acceptCustomElements()
{
	if(document.getElementById("element_input").value != "")
	{
		if(j <= 9)
		{
			arr[j] = document.getElementById("element_input").value;
			document.getElementById(j).innerHTML = arr[j];
			document.getElementById("index" + j).style.color = "BLACK";
			document.getElementById("index" + j).style.display = "inline-block";
			document.getElementById(j).style.border = "1px solid BLACK";
			document.getElementById(j).style.color = "BLACK";
			document.getElementById(j).style.backgroundColor = "WHITE";
			document.getElementById("index" + j).innerHTML = j;
			document.getElementById("result").innerHTML = "Element " + document.getElementById("element_input").value + " inserted in Array at index " + j;
			document.getElementById("element_input").value = "";
			j++;
		}
		else
		{
			document.getElementById("result").innerHTML = "Result";
			document.getElementById("element_input").style.display = "none";
			document.getElementById("sub_button").style.display = "none";
			document.getElementById("key").style.display = "inline";
			document.getElementById("submit_button").style.display = "inline";
			document.getElementById("next_button").style.display = "inline";
			document.getElementById("prev_button").style.display = "inline";
			document.getElementById("ERROR").play(); 
			alert("Array Size Limit Exceeded !");
			document.getElementById("step1").style.backgroundColor = "RED";
			document.getElementById("step1").style.color = "WHITE";
			document.getElementById("START").play(); 
		}
	}
	else
	{
		document.getElementById("ERROR").play(); 
		alert("Input Required: Please, Enter the Element in order to insert into the Array !");
	}
}

function nextStep() 
{
	if(document.getElementById("key").readOnly == true)
	{
		if(document.getElementById("key").value != "")
		{
			var index = document.getElementById("index").value;
				
			if(document.getElementById("key").value == arr[document.getElementById("index").value])
			{
				document.getElementById("" + index).style.backgroundColor = "green";
				document.getElementById("result").innerHTML = "Key Element " + document.getElementById("key").value +" found at Array Index = " + index;
				document.getElementById("result").style.color = "GREEN";
				document.getElementById("result").style.animation = "animate 0.3s alternate infinite";
				
				document.getElementById("step3").style.backgroundColor = "rgba(255, 255, 255, 0)";
				document.getElementById("step3").style.color = "BLACK";
				document.getElementById("step4").style.backgroundColor = "RED";
				document.getElementById("step4").style.color = "WHITE";
				document.getElementById("step5").style.backgroundColor = "RED";
				document.getElementById("step5").style.color = "WHITE";
				document.getElementById("step10").style.backgroundColor = "RED";
				document.getElementById("step10").style.color = "WHITE";
				document.getElementById("step6").style.backgroundColor = "rgba(255, 255, 255, 0)";
				document.getElementById("step6").style.color = "BLACK";
				document.getElementById("step7").style.backgroundColor = "rgba(255, 255, 255, 0)";
				document.getElementById("step7").style.color = "BLACK";
				
				document.getElementById("step2_audio").pause(); 
				document.getElementById("step4_audio").pause(); 
				document.getElementById("step3_audio").load(); 
				document.getElementById("step3_audio").play(); 
			}
			else
			{
				document.getElementById("result").innerHTML = "Key Element = " + document.getElementById("key").value + ", Array[i] = " + arr[document.getElementById("index").value] + "<br>Key Element Does Not Match";
				document.getElementById("step3").style.backgroundColor = "rgba(255, 255, 255, 0)";
				document.getElementById("step3").style.color = "BLACK";
				document.getElementById("step6").style.backgroundColor = "RED";
				document.getElementById("step6").style.color = "WHITE";
				document.getElementById("step7").style.backgroundColor = "RED";
				document.getElementById("step7").style.color = "WHITE";
				document.getElementById("step2_audio").pause(); 
				document.getElementById("step4_audio").load(); 
				document.getElementById("step4_audio").play(); 
				document.getElementById("index").value = (parseInt(index)+1);
				
				if(document.getElementById("index").value > 9)
				{
					document.getElementById("result").style.color = "RED";
					document.getElementById("result").innerHTML = "Element NOT found !!!";
					document.getElementById("result").style.animation = "animate 0.3s alternate infinite";
					
					document.getElementById("step3").style.backgroundColor = "rgba(255, 255, 255, 0)";
					document.getElementById("step3").style.color = "BLACK";
					document.getElementById("step6").style.backgroundColor = "rgba(255, 255, 255, 0)";
					document.getElementById("step6").style.color = "BLACK";
					document.getElementById("step7").style.backgroundColor = "rgba(255, 255, 255, 0)";
					document.getElementById("step7").style.color = "BLACK";
					document.getElementById("step8").style.backgroundColor = "RED";
					document.getElementById("step8").style.color = "WHITE";
					document.getElementById("step9").style.backgroundColor = "RED";
					document.getElementById("step9").style.color = "WHITE";
					document.getElementById("step10").style.backgroundColor = "RED";
					document.getElementById("step10").style.color = "WHITE";
					document.getElementById("" + index).style.backgroundColor = "RED";
					document.getElementById("index").value = 9;		
					document.getElementById("step4_audio").pause(); 					
					document.getElementById("step5_audio").load(); 
					document.getElementById("step5_audio").play(); 
					return;
				}
			
				document.getElementById("" + index).style.backgroundColor = "RED";
				document.getElementById("key").style.left = "" + (key_shift+9.4) + "%";
				key_shift = key_shift+9.4;
			}
		}
		else
		{
			document.getElementById("ERROR").play(); 
			alert("Input Required: Please, Enter the Key Element in order to perform Linear Search !");
		}
	}
	else
	{
		document.getElementById("step1_audio").pause(); 
		document.getElementById("ERROR").play(); 
		alert("Click on Submit button first in order to Submit the Key Element !");
	}
}

function prevStep() 
{
	if(document.getElementById("key").value != "")
	{
		var index = document.getElementById("index").value;
		document.getElementById("result").style.animation = "animate 0s alternate infinite";
		
		if(document.getElementById("index").value != 0)
		{
			document.getElementById("index").value = (parseInt(index)-1);
			
			document.getElementById("" + index).style.backgroundColor = "WHITE";
			document.getElementById("key").style.left = "" + (key_shift-9.4) + "%";
			key_shift = key_shift-9.4;
			
			document.getElementById("result").style.color = "BLACK";
			document.getElementById("result").innerHTML = "Key Element = " + document.getElementById("key").value + ", Array[i] = " + arr[document.getElementById("index").value] + "<br>Key Element Does Not Match";
			document.getElementById("step4").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step4").style.color = "BLACK";
			document.getElementById("step5").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step5").style.color = "BLACK";
			document.getElementById("step6").style.backgroundColor = "RED";
			document.getElementById("step6").style.color = "WHITE";
			document.getElementById("step7").style.backgroundColor = "RED";
			document.getElementById("step7").style.color = "WHITE";
			document.getElementById("step8").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step8").style.color = "BLACK";
			document.getElementById("step9").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step9").style.color = "BLACK";
			document.getElementById("step10").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step10").style.color = "BLACK";
			
			document.getElementById("step5_audio").pause();
			document.getElementById("step3_audio").pause();		
			document.getElementById("step4_audio").load(); 
			document.getElementById("step4_audio").play(); 
		}
		else
		{	
	document.getElementById("result").style.color = "BLACK";
			document.getElementById("result").innerHTML = "Result";
			document.getElementById("result").style.color = "BLACK";
			
			document.getElementById("key").value = "";
			document.getElementById("key").style.backgroundColor = "WHITE";
			document.getElementById("key").style.color = "BLACK";
			document.getElementById("key").style.border = "1px solid BLACK";
			
			document.getElementById("key").readOnly = false;
			document.getElementById("submit_button").disabled = false;
		
			document.getElementById("submit_button").style.display = "inline-block";
			
			document.getElementById("" + index).style.backgroundColor = "WHITE";
			
			document.getElementById("step2").style.backgroundColor = "RED";
			document.getElementById("step2").style.color = "WHITE";
			document.getElementById("step3").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step3").style.color = "BLACK";
			document.getElementById("step4").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step4").style.color = "BLACK";
			document.getElementById("step5").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step5").style.color = "BLACK";
			document.getElementById("step6").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step6").style.color = "BLACK";
			document.getElementById("step7").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step7").style.color = "BLACK";
			document.getElementById("step10").style.backgroundColor = "rgba(255, 255, 255, 0)";
			document.getElementById("step10").style.color = "BLACK";
			
			document.getElementById("step2_audio").pause();
			document.getElementById("step4_audio").pause();
			document.getElementById("step1_audio").load(); 
			document.getElementById("step1_audio").play(); 
		}
	}
	else
	{
		document.getElementById("ERROR").play(); 
		alert("Input Required: Please, Enter the Key Element in order to perform Linear Search !");
	}
}

function enterKey()
{
	document.getElementById("step1").style.backgroundColor = "rgba(255, 255, 255, 0)";
	document.getElementById("step1").style.color = "BLACK";
	
	document.getElementById("step2").style.backgroundColor = "RED";
	document.getElementById("step2").style.color = "WHITE";
	
	document.getElementById("START").pause(); 
	document.getElementById("step1_audio").load(); 
	document.getElementById("step1_audio").play(); 
}

function acceptKey()
{
	if(document.getElementById("key").value != "")
	{
		document.getElementById("result").innerHTML = "Key Element = " + document.getElementById("key").value + ", Array[i] = " + arr[document.getElementById("index").value];
		
		document.getElementById("key").readOnly = true;
		document.getElementById("submit_button").disabled = true;
		document.getElementById("submit_button").style.display = "none";
		
		document.getElementById("key").style.backgroundColor = "BLUE";
		document.getElementById("key").style.color = "WHITE";
		document.getElementById("key").style.border = "1px solid BLACK";
		
		document.getElementById("step2").style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.getElementById("step2").style.color = "BLACK";
		
		document.getElementById("step3").style.backgroundColor = "RED";
		document.getElementById("step3").style.color = "WHITE";
		document.getElementById("step1_audio").pause(); 
		document.getElementById("step2_audio").load(); 
		document.getElementById("step2_audio").play(); 
	}
	else
	{
		document.getElementById("ERROR").play(); 
		alert("Input Required: Please, Enter the Key Element in order to perform Linear Search !");
	}
}