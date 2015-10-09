Ext.define('YelpExtplorer.store.Carstore', {
    extend: 'Ext.data.Store',
	requires:['YelpExtplorer.model.Carmodel'],
	model:'YelpExtplorer.model.Carmodel',
	proxy:{
	type:'ajax',
	url:'cars.json',
	reader:{
	type:'json',
	root:'data'
	}
	},
	autoLoad:true
});
