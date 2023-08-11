function auth() {
    var username= document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username === "guts" && password === "316") {
        document.getElementById("message").innerHTML = "access granted";
        window.location.replace("./dd.html")
    }else{
        document.getElementById("message").innerHTML = "Nah uh";
        return
    }
    }
    const form = document.getElementById("login")
    form.addEventListener('login'), (e) => {
    (e).preventDefault
    }
    
    
    
    








