LocalStorageJSON
================

<p>simple option localstorage to save data by JSON<br />sample code1:<br />&lt;script src="LocalStorageJSON.js" type="text/javascript"&gt;&lt;/script&gt;<br />&lt;script type="text/javascript"&gt;<br /> var lsj=new LocalStorageJSON("namespace");<br /> lsj.set("key","value");<br /> alert(lsj.get("key"));<br /> lsj.delete();<br />&lt;/script&gt;</p>
<p>sample code2:<br />&lt;script src="LocalStorageJSON.js" type="text/javascript"&gt;&lt;/script&gt;<br />&lt;script type="text/javascript"&gt;<br /> var array=["aa","bb"];<br /> var lsj=new LocalStorageJSON("namespace");<br /> lsj.set("key",array);<br /> alert(lsj.get("key")[0]);<br /> lsj.delete();<br />&lt;/script&gt;</p>
<p>constructor:<br />LocalStorageJSON(nameSpace)</p>
<p>function:<br />set(key,value)<br />get(key)<br />clear()<br />delete()</p>
