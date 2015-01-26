# keystoneplus_example

As people are discussing about keystone issue 153 (https://github.com/keystonejs/keystone/issues/153), Keystonejs users expect to have a sub-collection or sub object list/array.

Mongodb is a new database, which does not like traditional database. We can put sub-object and sub-collection(sub-array) into a table(to avoid confuse you I will keep calling mongodb collections as table). However Keystonejs does not support that, Keystonejs still suggest to use reference to another table.

I have implemented it and the result is:


###Is that what you want? :

![kseg](http://1.bp.blogspot.com/-bnBp5Wm3nTc/VMYEh0qNc8I/AAAAAAAAVT8/3RWKfmbiw_E/s1600/Snip20150126_1.png) 

I hope this is what you want!!

###How to use it:

![kshow](http://3.bp.blogspot.com/-mmEMygKGL3k/VMYIlOpVqZI/AAAAAAAAVUI/qVDYUw9YOTc/s1600/Snip20150126_3.png) 


###You almost got it, just one last step:

Put one more dependency into your package.json file:

```bash
"keystoneplus":"~0.0.1"
```


![kspackage](http://4.bp.blogspot.com/-F1NbQaS4jyI/VMZQQ4yA2SI/AAAAAAAAVUY/smphPhY5cOk/s1600/Snip20150126_4.png) 

Example code:

[keystoneplus_example](https://github.com/wangpingsx/keystoneplus_example)

