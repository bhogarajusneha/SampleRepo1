Ext.define('YelpExtplorer.view.BusinessMap', {
    extend: 'Ext.form.Panel',
    requires:['Ext.form.HtmlEditor',
       'Ext.Editor'
    ],
    layout:'vbox',
    xtype: 'businessmap',
	items:[{

            xtype:'htmleditor',
		 
        }
	]
    
});
