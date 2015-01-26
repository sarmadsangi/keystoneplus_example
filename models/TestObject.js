var keystone = require('keystone'),
	Types = keystone.Field.Types;
var keystoneplus = require('keystoneplus');
 var ObjectArray = keystoneplus.ObjectArray;

var TestObject = new keystone.List('TestObject', {
	label: 'TestObject',
	path: 'TestObject',
	singular: 'TestObjects',
	schema :  { collection: 'TestObject' }

});

TestObject.add( 
	{
		name: { type: String , initial: true, required: true, index: true },
		group: { type: String },
		price: { type: String},
		'subobj.b': { type: String},
		'subobj.c': { type: String},

		//***** Note, this is nessary !!!  Start *****//
		'mySubObjectList': { type: ObjectArray, initial: true,
			subObjectDefine: { 
				a: { type: String}, //only string now
				b: { type: String},
				c:{ type: String}
			}
		},
		//***** Note, this is nessary !!!  End *****//

		TextArrayreall: { type: Types.TextArray, initial: true}
	}
);

//***** Note, this is also nessary !!!  Start *****//
var mongoose = keystone.mongoose;
    var schemaPaths = new mongoose.Schema({
        a:       String,
        b:           String,
        c:String
    });

    // schema.add(this._path.addTo({}, [schemaPaths]));
    
TestObject.schema.add({
    mySubObjectList: { type: [schemaPaths] }
});
//***** Note, this is also nessary !!!  End *****//


/** 
	Registration
	============
*/

TestObject.defaultSort = '-name';
TestObject.defaultColumns = 'name|10%,group|10%,price|15%';
TestObject.register();


