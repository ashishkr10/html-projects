


function calculateIt() {
	
	var starting = document.getElementById("starting").value;
	var cagr = document.getElementById("cagr").value;
	var time = document.getElementById("time").value;
	
	if (starting === "" ) { 
     alert("Please enter value") 
     return;		 
	}
	
	if (cagr ==="" ) { 
     alert("Please enter value") 
     return;		 
	}
	
	if (time ==="" ) { 
     alert("Please enter year") 
     return;		 
	}
	
	var total01 = ( ( cagr / 100 ) + 1 ) ;	
	var total02 = Math.pow(total01, time);
	var total03 = ( starting * total02 )

	
	document.getElementById("rs").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("result").innerHTML = total03;
}

    document.getElementById("rs").style.display = "none";
	document.getElementById("result").style.display = "none";
	
	
	document.getElementById("button").onclick=function() { calculateIt(); };