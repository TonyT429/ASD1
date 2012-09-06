// ASD 1209 Week 1
// Anthony Torrez



// JQuery file

var parseBookform = function(data){
	// uses the form data here:
	console.log(data);
};

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

	var rbform = $('#recordbooksform'),
		rberrorslink = $('#rberrorslink')
	;
	
	rbform.validate({
		invalidHandler: function(form, validator){
			rberrorslink.click();
			var html = '';
			//console.log(validator.submitted);
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');  // error with a label except those generated.
				//console.log(label.text());
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');  
				var fieldName = legend.length ? legend.text() : label.text();
				console.log(fieldName);
				html += '<li>'+ fieldName +'</li>';
			};
			$("#recordbookserrors ul").html(html);
		},
		submitHandler: function() {
			var data = rbform.serializeArray();
			localStorage.setItem('rbform', data);
			parseBookform(data);
		}
	});
});

$('#serial').on('pageinit', function(){

// Serialization of JSON Data
	$('#jsonBooks').on('click', function() {
		$('#theLibrary').empty();
    		$('#contain').empty();
        	$.ajax({
			url: 'data/json.data',
            	type: 'GET',
            	dataType: 'json',
            	success: function(jdata) {
                	for (var i=0, j=jdata.item.length; i<j; i++) {
                    	var book = jdata.item[i];
                    		$(""+
                    			'<p>' + book.genre + '</p>' +
                    			'<p>' + book.title + '</p>' +
                    			'<p>' + book.author + '</p>' +
                    			'<p>' + book.isbn + '</p>' +
                    			'<p>' + book.comments + '</p>' +
                    			'<p>' + book.series + '</p>' +
                    			'<p>' + book.seriesname + '</p>' +
                    			'<p>' + book.seriesnum + '</p>' +
                    			'<p>' + book.date + '</p>' 
                    		).appendTo('#contain');
                    		console.log(jdata);
                }
            }
        });
    });
    return false;
});

// Serialization of XML Data
	$('#jsonBooks').on('click', function() {
		$('#theLibrary').empty();
    		$('#contain').empty();
        	$.ajax({
			url: 'data/json.data',
            	type: 'GET',
            	dataType: 'json',
            	success: function(jdata) {
                	for (var i=0, j=jdata.item.length; i<j; i++) {
                    	var book = jdata.item[i];
                    		$(""+
                    			'<p>' + book.genre + '</p>' +
                    			'<p>' + book.title + '</p>' +
                    			'<p>' + book.author + '</p>' +
                    			'<p>' + book.isbn + '</p>' +
                    			'<p>' + book.comments + '</p>' +
                    			'<p>' + book.series + '</p>' +
                    			'<p>' + book.seriesname + '</p>' +
                    			'<p>' + book.seriesnum + '</p>' +
                    			'<p>' + book.date + '</p>' 
                    		).appendTo('#contain');
                    		console.log(jdata);
                }
            }
        });
    });
    return false;
});

// Serialization of YAML Data
	$('#jsonBooks').on('click', function() {
		$('#theLibrary').empty();
    		$('#contain').empty();
        	$.ajax({
			url: 'data/json.data',
            	type: 'GET',
            	dataType: 'json',
            	success: function(jdata) {
                	for (var i=0, j=jdata.item.length; i<j; i++) {
                    	var book = jdata.item[i];
                    		$(""+
                    			'<p>' + book.genre + '</p>' +
                    			'<p>' + book.title + '</p>' +
                    			'<p>' + book.author + '</p>' +
                    			'<p>' + book.isbn + '</p>' +
                    			'<p>' + book.comments + '</p>' +
                    			'<p>' + book.series + '</p>' +
                    			'<p>' + book.seriesname + '</p>' +
                    			'<p>' + book.seriesnum + '</p>' +
                    			'<p>' + book.date + '</p>' 
                    		).appendTo('#contain');
                    		console.log(jdata);
                }
            }
        });
    });
    return false;
});