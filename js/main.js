





(function () {

	$(".dataTable_wrapper").html('<table class="table table-striped table-bordered table-hover" id="users-table"></table>');
	$.getJSON("http://localhost:3221/userlist/?v=1&callback=?", function (data) {
		$('#users-table').DataTable({
			"data": data,
			"columns": [
				{ "title": "User ID", "defaultContent": "", "data": "_id" },
				{ "title": "Country", "defaultContent": "", "data": "ct" },
				{ "title": "Product", "defaultContent": "", "data": "pr" },
				{ "title": "Data", "defaultContent": "", "data": "data" }
			]
		});

		$('#users-table tbody').on('click', 'tr', function () {
			$(this).toggleClass('selected');
		});

	});

	$("button[type=submit]").click(function (event) {

		event.preventDefault();

		var data = {
			hrdid: $("#hrdid").val(),
			ct: $("#ct").val(),
			pr: $("#pr").val(),
			data: $("#data").val()
		}

		$.ajax({
			type: "POST",
			url: "http://localhost:3221/adduser",
			data: data,
			success: function (err) {
				alert(err);
			},
			dataType: "json"
		});
	});

	$("#btnDel").click(function () {
		var table = $('#users-table').DataTable();
		var slctdArr = table.rows('.selected').data();
		
		var data = {};
		for (var i = 0 ; i < slctdArr.length ; i++) {
			data[slctdArr[i]._id] = "1";
		}
		
		$.ajax({
			type: "POST",
			url: "http://localhost:3221/removeuser",
			data: data,
			dataType: "json",
			success: function (err) {
				alert(err);
			}
		});
	});

})();


