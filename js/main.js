// ASD 1209 Week 1
// Anthony Torrez

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

	var rbform = $('#recordbooksform'),
		rberrorslink = $('#rberrorslink')
	;
	
	var parseBookform = function(data){
		console.log(data);
	};
	
	rbform.validate({
		invalidHandler: function(form, validator){
		//	rberrorslink.bind();
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');  // error with a label except those generated.
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');  
				var fieldName = legend.length ? legend.text() : label.text();
				console.log(fieldName);
				html += '<li>'+ fieldName +'</li>';
			};
			$("#recordbookserrors ul").html(html);
		},
		submitHandler: function() {
			var book = {};
				book.btitle = ["Title:", $("btitle").val()];
				book.author = ["Author:", $("author").val()];
				book.isbn = ["ISBN:", $("isbn").val()];
				book.genre = ["Genre:", $("genre").val()];
				book.isaseries = ["Is Part of a Series:", $("isaseries").val()];
				book.seriesname = ["Series Name:", $("seriesname").val()];
				book.ibookrate = ["Rating:", $("bookrate").val()];
			var data = rbform.serializeArray();
			localStorage.setItem('rbform', data);
			parseBookform(data);
		}
	});


	//any other code needed for addItem page goes here
	
	


//The functions below can go inside or outside the pageinit function for the page in which it is needed.
//   This was an attempt to see redo my script

	var i=Number(localStorage.getItem('book-counter')) + 1,
	j = 0,
	k,
	form = $('recordbooksform'),
	removeLink = $('#showBooks li a'),
	bookList = $('#showBooks'),
	editable = $('.editable'),
	clearAll = $('#clear-all'),
	newBook = $('#book'),
	order = [],
	orderList;
	
// Load book list
	orderList = localStorage.getItem('bookOrder');
	
	orderList = orderList ? orderList.split(',') : [];
	
	for ( j = 0, k = orderList.length; j < k; j++) {
		bookList.append(
			"<li id='" + orderList[j] +"'>" + "<span class='editable'>" + localStorage.getItem(orderList[j]) + "</span> <a href='#'>X</a></li>"
		);
	}

// Add book
	form.submit(function(e) {
		e.publishDefault();
		$.publish('/add/', []);
	});
	
// Remove book
	bookList.delegate('a', 'bind', function(e) {
		var $this = $(this);
		
		e.preventDefault();
		$.publish('/remove/', [$this]);
	});
	
// Sort book
	bookList.sortable({
		revert: true,
		stop: function() {
			$.publish('/regenerate-list/', []);
		}
	});
	
// Edit and save book
	editable.inlineEdit({
		save: function(e, data) {
			var $this = $(this);
			localStorage.setItem(
				$this.parent().attr("id"), data.value
			);
		}
	});
	
// Clear all
	clearAll.bind(function(e) {
		e.preventDefault();
		$.publish('/clear-all/', []);
	});
});
	
// Subscribes
	$.subscribe('/add/', function() {
	if ($newBook.val() !== "") {           // take the input field value and save it to localStorage.
	localStorage.setItem(
		"book-" + i, $newBook.val()
	);
	
// Set the book counter.
	localStorage.setItem('book-counter', i);
	
// Append the new book with the value of the new book list
	bookList.append(
		"<li id='book-'" + i + ">" + "<span class='editable'>" + localStorage.getItem("book-" + i) + " </span><a href='#'>x</a></li>"
	);	
	
	$publish('/regenerate-list/', []);
	
	}
});

$.subscribe('/remove/', function($this) {
	var parentId = $this.parent().attr('id');
	
// Remove book list from localStorage based on the id of the clicked.
	localStorage.removeItem(
		"'" + parentId + "'"
	);
// ?????	
		$this.parent().remove();
	
		$.publish('/regenerate-list/', []);
	});
});

$.subscribe('/regenerate-list/', function() {
	var $bookItemLi = $('#showBooks li');
	// Empty the order array
	order.length = 0;
	
// Go through the list items and grab the ID
	$bookItemLi.each(function() {
		var id = $(this).attr('id');
		order.push(id);
	});
	
//	Convert the array into a string and save to localStorage
	localStorage.setItem(
		'book-orders', order.join(',')
	);
});

	$.subscribe('/clear-all/', function() {
		var bookListLi = $('#showBooks li');
	
		order.length = 0;
		localStorage.clear();
		bookListLi.remove();
	});

	


var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	var books = "";
	var b=0;
	var storeLength = localStorage.length-1;
	for (b=0; b <storeLength; b++) {
		
	}
		
}; 

var	deleteItem = function (){
			
};

	




