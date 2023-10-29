


function calculateCagr() {
	
	var initial = document.getElementById("initial").value;
	var fina = document.getElementById("final").value;
	var year = document.getElementById("year").value;
	
	if (initial === "" ) { 
     alert("Please enter value") 
     return;		 
	}
	
	if (fina ==="" ) { 
     alert("Please enter value") 
     return;		 
	}
	
	if (year ==="" ) { 
     alert("Please enter year") 
     return;		 
	}
	
	var total01 = ( fina / initial ) ;
	var total02 = ( 1 / year ) ;
	var total03 = Math.pow(total01, total02 );
	var total04 = ( ( total03 - 1 ) * 100 )

	
	document.getElementById("rs").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("result").innerHTML = total04;
}
    
	document.getElementById("rs").style.display = "none";
	document.getElementById("result").style.display = "none";
	
	document.getElementById("button").onclick=function() { calculateCagr(); };