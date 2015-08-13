
(function () {
	$(".dataTable_wrapper").html('<table class="table table-striped table-bordered table-hover" id="users-table"></table>');
	$.getJSON("http://localhost:3221/userlist/?v=1&callback=?", function (data) {
		$('#users-table').DataTable({
			"data": data,
			"columns": [
				{ "title": "User ID", "defaultContent" : "", "data" : "_id" },
				{ "title": "Country", "defaultContent": "", "data": "ct" },
				{ "title": "Product", "defaultContent": "", "data": "pr" },
				{ "title": "Data", "defaultContent": "", "data": "data" }
			]
		});
	});
})();