$(document).ready(function() {
    $("#form").submit(function(e) {
        e.preventDefault();
        var rowCount = $('#myTable tr').length;

        if (rowCount == 0) {
            var th = "<tr><th>Name</th><th>Number</th><th>Email</th></tr>";
            $("table").append(th);
        }

        var name = $("#name").val();
        var number = $("#number").val();
        var email = $('#email').val();

        var tr = "<tr><td>" +
            name + "</td><td>" +
            number + "</td><td>" + email + "</td><td><button class='dlt'>Delete</button></td></tr>";
        $("table").append(tr);
        $('#email').val("");
        $("#name").val("");
        $("#number").val("");

        $(".dlt").each(function() {
            $(this).click(function() {
                $(this).parent().parent().remove();
            })
        });

    });


});