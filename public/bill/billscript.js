


function calculateTax() {
	
	var amount = document.getElementById("amount").value;
	var percentage = document.getElementById("percentage").value;
	
	if (amount === "" ) { 
     alert("Please enter value") 
     return;		 
	}
	
	if (percentage ==0 ) { 
     alert("Please choose option") 
     return;		 
	}
	
	var total = ( ( amount * 100 ) /  percentage ) ;
	
	total = Math.round(total);
	
	document.getElementById("rs").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("result").innerHTML = total;
}
    
	document.getElementById("rs").style.display = "none";
	document.getElementById("result").style.display = "none";
	
	document.getElementById("button").onclick=function() { calculateTax(); };