if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

function clickEvent() {
    var field = document.getElementById("password");
    if(field.type == "password") {
        var ico = document.getElementById("icon");
        ico.classList.remove("fa-eye");
        ico.classList.add("fa-eye-slash");
        field.type = "text";
    }
    else {
        var ico = document.getElementById("icon");
        ico.classList.remove("fa-eye-slash");
        ico.classList.add("fa-eye");
        field.type = "password";
    }
}
