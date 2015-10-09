Ext.define('YelpExtplorer.view.Main', {
    extend: 'Ext.tab.Panel',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Fit',
	'YelpExtplorer.view.BusinessMap'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'fit'
    },

   
        items:[{
            title: 'Map',
		//html:'hello world!',
		xtype:'businessmap'
        },
	{
            title: 'Grid',
		html:'hello world!'
        },
	{
            title: 'View',
		html:'hello world!'
        }]
    
});
