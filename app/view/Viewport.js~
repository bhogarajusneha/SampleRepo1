Ext.define('YelpExtplorer.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'YelpExtplorer.view.Title',
	'YelpExtplorer.view.Filter',
	'YelpExtplorer.view.Main',
	'YelpExtplorer.view.datail.BusinessDetail'
    ],

    layout: {
        type: 'border'
    },

    items: [{
	region:'north',
        xtype: 'title'
    },
	{
	region:'west',
        xtype: 'filter',
	width:180
    },
	{
	region:'center',
        xtype: 'app-main'
    },
	{
	region:'east',
        xtype: 'businessdetail'
    },]
});
