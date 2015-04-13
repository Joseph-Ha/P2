var isArmstrong = function(n){
	"use strict";
	var sum = 0;

	//convert to string
	n = String(n);
	// traverse n
	for(var i = 0; i < n.length; ++i){
		sum = sum + Math.pow(Number.n[i],n.length)
	}
	if(n==sum){
		return = true;
	} else{
		return = false;
	}

}