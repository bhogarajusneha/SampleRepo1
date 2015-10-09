Ext.define('YelpExtplorer.view.Cargrid', {
    extend: 'Ext.grid.Panel',
	xtype:'cargrid',
	store:'Carstore',
	columns: [
        { text: 'manufacturer',  dataIndex: 'manufacturer' },
        { text: 'model', dataIndex: 'model' },
        { text: 'price', dataIndex: 'price' },
	{ text: 'wiki', dataIndex: 'wiki' },
	{ text: 'img', dataIndex: 'img' },
	{ text: 'quality', 
	columns:[
	{text:'overall',dataIndex:'quality',renderer:function(value, metaData)
	{
	return value[0].rating;
	}
	},
	{text:'mechanical',dataIndex:'quality',renderer:function(value, metaData)
	{
	return value[1].rating;
	}},
	{text:'powertrain',dataIndex:'quality',renderer:function(value, metaData)
	{
	return value[2].rating;
	}},
	{text:'body',dataIndex:'quality',renderer:function(value, metaData)
	{
	return value[3].rating;
	}},
	{text:'interior',dataIndex:'quality',renderer:function(value, metaData)
	{
	return value[4].rating;
	}},
	{text:'accessories',dataIndex:'quality',renderer:function(value, metaData)
	{
	return value[5].rating;
	}}
    ]}],
    height: 200,
    width: 1000
	
});
