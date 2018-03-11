$(function() {
	$("#calendar").jeDate({
    	isShow: false,
    	format: "YYYY-MM-DD",
	}); 
	
	var options = [
        {name:'事项编号',field:'id', width:"120", align: 'left'},
        {name:'事项来源', field:'source', width:"200", align: 'left'},
        {name:'发起人', field:'person' ,width:"80", align:'left'},
        {name:'事项内容', field:'content' ,width:"80", align:'left'},
        {name:'日期时间', field:'time' ,width:"150", align:'left'},
        {name:'状态', field:'state' ,width:"80", align:'left'}
   ];

    jeui.use(["jquery","jeTable","jeCheck"],function () {
   	 	$("#testtable01").jeTable({
        	height:"200",
        	isPage:true,
        	datas:user.data,
        	columns: options
    	});

    	$("#testtable02").jeTable({
        	height:"200",
        	isPage:true,
        	datas:user.data,
        	columns: options
    	});

    	$("#testtable03").jeTable({
        	height:"200",
        	isPage:true,
        	datas:user.data,
        	columns: options
    	});

    	$("#testtable04").jeTable({
        	height:"200",
        	isPage:true,
        	datas:user.data,
        	columns: options
    	});
	});

	jeui.use(["jquery","jeTabs"],function () {  
		$("#je-tabs").jeTabs({tabIndex:1});
	}) 
});