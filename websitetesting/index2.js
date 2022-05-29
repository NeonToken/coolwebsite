function begin() {
const args = window.location.hash.substr(1).split(",")
    const username = args[0]
    const password = args[1]
    const email = args[2]
    const age = args[3]
    document.getElementById("UsernameHeader").innerHTML = username
    document.getElementById("PasswordHeader").innerHTML = password
    document.getElementById("EmailHeader").innerHTML = email
    document.getElementById("AgeHeader").innerHTML = age
}
