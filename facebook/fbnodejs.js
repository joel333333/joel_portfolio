$(document).ready(function () {
    $('#formm').validate({
        rules: {
            fname: {
                required: true,
                minlength: 5
            },
            sname: {
                required: true,
                minlength: 5
            },
            mnumber: {
                required: true,
                minlength: 10
            },
            pascod: {
                required: true,
                minlength: 6
            },
            day: {
                required: true
            },
            month: {
                required: true
            },
            year: {
                required: true
            },
            gentle: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "Please enter ur first Name",
            },
            sname: {
                required: "Please enter your sur name",
            },
            mnumber: {
                required: "Please enter your mobile number",
            },
            pascod: {
                required: "Set    a    strong    pass    code",
            },
            day: {
                required: "Please enter the date you born",
            },
            month: {
                required: "Please enter the month you born",
            },
            year: {
                required: "Please enter the year you born",
            }
        }
    });
});