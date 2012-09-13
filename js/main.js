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
        $('#myLibrary').empty();
          $('#theShelf').empty();
          $.ajax({
			url: 'data/jsontest.json',
			type: 'GET',
               dataType: 'json',
               success: function(responseText) {
                   for (var i=0, j=responseText.item.length; i<j; i++){
					var book = responseText.item[i];
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
						).appendTo('#theShelf');
                              $("#theShelf").listview("refresh");
                              	console.log("Working");
                              	console.log(responseText);
                    }
			},
			error: function(result) { 
				console.log(result);  
               }
          });
          return false;
     });

                	
                	

/*
// Serialization of XML Data
    $('#xmlBooks').on('click', function() {
        $('#myLibrary').empty();
            $('#theShelf').empty();
            $.ajax({
            url: 'data/data.xml',
                type: 'GET',
                dataType: 'xml',
                success: function(xdata) {
                    $(xdata).find('item').each(function(){
                        var id = $(this).attr('id');
                            var title = $(this).find('title').text();
                            var author = $(this).find('author').text();
                            var isbn = $(this).find('isbn').text();
                            var comments = $(this).find('comments').text();
                            var series = $(this).find('series').text();
                            var seriesName = $(this).find('seriesName').text();
                            var seriesNum = $(this).find('seriesNum').text();
                            var date = $(this).find('date').text();
                            $('div class=').appendTo('#theShelf');
                            console.log(xdata);
                            return false;
                }
            );
                }
        });
    });
*/    

/*
// Serialization of YAML Data   -  this may be completely off base - unsure how to use the parser commands to pull yaml data.
	$('#yamlBooks').on('click', function() {
		$('#theLibrary').empty();
    		$('#theShelf').empty();
        	$.ajax({
			url: 'data/data.yml',
            	type: 'GET',
            	dataType: 'yaml',
            	success: function(ydata) {
                	for (var i=0, j=ydata.item.length; i<j; i++) {
                    	var book = ydata.item[i];
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
                    		).appendTo('#theShelf');
                    		console.log(ydata);
                    		return false;
                }
            }
        });
    });
*/
    
});