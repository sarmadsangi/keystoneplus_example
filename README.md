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




###Really the last step:

Run:
```bash
npm install
```

Then you can start your application by:
```bash
node keystone.js
```


Example code:

[keystoneplus_example](https://github.com/wangpingsx/keystoneplus_example)




###Source code of this solution:


As you see, my solution is all in a nodejs package -- keystoneplus. You can find the source code here:  https://github.com/DigitalInnovation/keystoneplus




###further read:

For more technical depth of how this sub-collection was implemented, please click below link hardly:

[keystoneplus](http://baiduhix.blogspot.co.uk/2015/01/a-new-type-of-keystonejs-objectarray_26.html)





#Acknowledge:


Massive thanks to [M&S](http://www.marksandspencer.com/) for sponsoring this project.

Of cause many thanks to all contributors of Keystonejs!!!!


![M&S](http://asset1.marksandspencer.com/is/image/mands/logo-mns?$CHECKOUT_LOGO$)



######This readme content also posted on my blog:  [Peter's blog](http://baiduhix.blogspot.co.uk/2015/01/a-new-type-of-keystonejs-objectarray.html)









