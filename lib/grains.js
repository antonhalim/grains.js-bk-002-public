'use strict';

function total(num){
	var allTheGrains = 0
	for( var i = 1; i <= num; i++){
		allTheGrains = allTheGrains + square(i);
	}
	return allTheGrains
};

function square(num){
	var grains = 1
	if (num == 1){return num};

	for(var i = 2; i <= num; i++){
	grains = grains *2
	}
	return grains
};
