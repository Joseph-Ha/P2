var isArmstrong = function(n){
	"use strict";
	var sum = 0;

	//convert to string
	n = String(n);
	// traverse n
	for(var i = 0; i < n.length; ++i){
		sum = sum + Math.pow(n[i],n.length)
	}
	if(n==sum){
		return true;
	} else{
		return false;
	}

}

var allArmstrongs = function(){
	"use strict";

	var result = "";
	

    for(var i = 0; i <= 99999; ++i){
		if(isArmstrong(i) == true){
			result = result + i + ", ";
		} 
		
}
return result;
}
//dog
var allSubstrings1 = function(str){
	"use strict";
	//str = String(str);
	
	var result = "";
	
	for(var i = 0; i <str.length; i ++) {
		for(var j= i+1; j<=str.length;j++) {
			var s = str.substring(i,j);
			result = result + s + " ,";
		}

	}
return result;

}

var allSubstrings2 = function(str){
	"use strict";
	
	var result = [];
	
	
	
	for(var i = 0; i <str.length; i ++) {
		for(var j= i+1; j<=str.length;j++) {
			var s = str.substring(i,j);
			result.push(s);
		}
		

	}
return result;

}

var maxWord = function(string){
	"use strict";

	var res = string.split(" ");

	var longest = 0;

	var result = null;

	for(var i=0; i < res.length; i++){

		if(longest < res[i].length){
			longest = res[i].length;
			longest > res[i].length;
			result = res[i];
		}


	}
	return result;
	
}
