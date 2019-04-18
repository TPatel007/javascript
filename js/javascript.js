
$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    $("#submit").click(function(evt){
        var arrivalDate = $("#arrival_date").val().trim();
        var nights = $("#nights").val().trim();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var valid = true;
        if(!arrivalDate)
            {
                $("#arrival_date").next().text("Please enter arrival date!");
                $("#arrival_date").focus();
                valid = false;
            }
        else
            {
                $("#arrival_date").next().text("");
            }
        if(!nights || isNaN(nights))
            {
                $("#nights").next().text("Please enter valid nights!");
                $("#nights").focus();
                valid = false;
            }
        else
            {
                $("#nights").next().text("");
            }
        if(!name)
            {
                $("#name").next().text("Please enter name!");
                $("#name").focus();
                valid = false;
            }
        else
            {
                $("#name").next().text("");
            }
         if(!email || !emailPattern.test(email))
            {
                $("#email").next().text("Please enter valid email!");
                $("#email").focus();
                valid = false;
            }
        else
            {
                $("#email").next().text("");
            }
        if(!phone || isNaN(phone))
            {
                $("#phone").next().text("Please enter valid phone!");
                $("#phone").focus();
                valid = false;
            }
        else
            {
                $("#phone").next().text("");
            }
        console.log(valid);
        if(!valid)
            {
                evt.preventDefault();
            }
        });
		
});