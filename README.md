LocalStorageJSON
================

simple option localstorage to save data by JSON
sample code1:
<script src="LocalStorageJSON.js" type="text/javascript"></script>
<script type="text/javascript">
	var lsj=new LocalStorageJSON("namespace");
	lsj.set("key","value");
	alert(lsj.get("key"));
	lsj.delete();
</script>

sample code2:
<script src="LocalStorageJSON.js" type="text/javascript"></script>
<script type="text/javascript">
	var array=["aa","bb"];
	var lsj=new LocalStorageJSON("namespace");
	lsj.set("key",array);
	alert(lsj.get("key")[0]);
	lsj.delete();
</script>

constructor:
LocalStorageJSON(nameSpace)

function:
set(key,value)
get(key)
clear()
delete()
