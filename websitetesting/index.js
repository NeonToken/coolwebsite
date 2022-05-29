
function start() {
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    let Email = document.getElementById("Email").value;
    let Age = document.getElementById("Age").value;
    if (Age < 18) {
        location.href = "TooYoung.html"
    }
    else if (Age => 18) {
        location.href = 'website2.html#' + Username + "," + Password + "," + Email + "," + Age
    }
}