function rel()
{
	
	var temp=0;
	var temp0 = 0;
	
	if(document.getElementById('bo1').checked == 1)
	{
		temp += 1;
	}
	if(document.getElementById('bo2').checked == 1)
	{
		temp += 2;
	}
	if(document.getElementById('bo3').checked == 1)
	{
		temp += 4;
	}
	if(document.getElementById('bo4').checked == 1)
	{
		temp += 8;
	}
	if(document.getElementById('bo5').checked == 1)
	{
		temp += 16;
	}
	var final = temp;
	if(document.getElementById('bo11').checked == 1)
	{
		temp0 += 1;
	}
	if(document.getElementById('bo22').checked == 1)
	{
		temp0 += 2;
	}
	if(document.getElementById('bo33').checked == 1)
	{
		temp0 += 4;
	}
	if(document.getElementById('bo44').checked == 1)
	{
		temp0 += 8;
	}
	//alert(temp0);
	
	switch(temp0)
	{
		case 1: var str = " of January.";
				break;
		case 2: var str = " of February.";
				break;
		case 3: var str = " of March.";
				break;
		case 4: var str = " of April.";
				break;
		case 5: var str = " of May.";
				break;
		case 6: var str = " of June.";
				break;		
		case 7: var str = " of July.";
				break;		
		case 8: var str = " of August.";
				break;	
		case 9: var str = " of September.";
				break;	
		case 10: var str = " of October.";
				break;	
		case 11: var str = " of November.";
				break;
		case 12: var str = " of December.";
				break;
		default: var str = " of XXX ;) "
	}			
	alert(":D It was on "+ temp+str + " that a Geek was born.:) ");
	
}



























