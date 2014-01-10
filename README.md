LocalStorageJSON
================

simple<p>simple option localstorage to save data by JSON sample code1: <script src=&quot;LocalStorageJSON.js&quot; type=&quot;text/javascript&quot;></script> <script type=&quot;text/javascript&quot;>  var lsj=new LocalStorageJSON(&quot;namespace&quot;);  lsj.set(&quot;key&quot;,&quot;value&quot;);  alert(lsj.get(&quot;key&quot;));  lsj.delete(); </script></p>

<p>sample code2: <script src=&quot;LocalStorageJSON.js&quot; type=&quot;text/javascript&quot;></script> <script type=&quot;text/javascript&quot;>  var array=[&quot;aa&quot;,&quot;bb&quot;];  var lsj=new LocalStorageJSON(&quot;namespace&quot;);  lsj.set(&quot;key&quot;,array);  alert(lsj.get(&quot;key&quot;)[0]);  lsj.delete(); </script></p>

<p>constructor: LocalStorageJSON(nameSpace)</p>

<p>function: set(key,value) get(key) clear() delete() </p>
