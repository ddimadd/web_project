function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
function formValid(){
    if (document.getElementById("fname").value == ""){
        alert("Please enter first name !")
    }
    else {
        if (document.getElementById("lname").value == ""){
            alert("Please enter last name !")
        }
        else {
            const email = document.getElementById("email").value;
            if (email == ""){
                alert("Please enter email !")
            }
            else{
                if(! validEmail(email)){
                    alert("Email is not corect !")
                }
                else{
                    if (document.getElementById("comment").value == ""){
                        alert("Please enter your comment !")
                    }
                    else{
                        alert ("Thank you for your comment !")
                    }

                }
            }
        }
    }
}