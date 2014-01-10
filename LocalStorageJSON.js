var LocalStorageJSON = function(nameSpace) {
	this.nameSpace=nameSpace;
	if(localStorage.getItem(this.nameSpace)==null){
		localStorage.setItem(nameSpace, '{}');
	}	
};
LocalStorageJSON.prototype.set = function(key,value) {
	var nameArr=JSON.parse(localStorage.getItem(this.nameSpace)); 
	nameArr[key]=value;
	var dataToStore = JSON.stringify(nameArr);
	localStorage.setItem(this.nameSpace, dataToStore);
};
LocalStorageJSON.prototype.get = function(key) {
	var nameArr=JSON.parse(localStorage.getItem(this.nameSpace)); 
	return nameArr[key];
};
LocalStorageJSON.prototype.clear = function() {
	localStorage.setItem(this.nameSpace, '{}');
	
};
LocalStorageJSON.prototype.delete = function() {
	localStorage.removeItem(this.nameSpace);
}