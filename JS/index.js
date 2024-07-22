function changeApp() {
    var firstname, middlename, lastname, gender, dob, phone, email, address, qualification, university, skills
    firstname = document.getElementById("firstname").value
    middlename = document.getElementById("middlename").value
    lastname = document.getElementById("lastname").value
    gender = document.getElementById("gender").value
    dob=document.getElementById("date").value
    phone=document.getElementById("phone").value
    email=document.getElementById("email").value
    address=document.getElementById("address").value
    qualification=document.getElementById("qualification").value
    university=document.getElementById("University").value
    skills=document.getElementById("skills").value

    document.getElementById("result").className="resContainer"

    document.getElementById("result").innerHTML="Your Previously Submitted Form Results"+"<br>"+"First Name: "+firstname+"<br>"+"Middle Name: "+middlename+"<br>"+"Last Name: "+lastname+"<br>"+"Gender: "+gender+"<br>"+"Date of birth: "+dob
    +"<br>"+"Phone number: "+phone+"<br>"+"Email: "+email+"<br>"+"Address: "+address+"<br>"+"Qualification: "+qualification+"<br>"+"University: "+university+"<br>"+"Skills: "+skills

    //for my console
    console.log(firstname+"\n"+middlename+"\n"+lastname+"\n"+gender+"\n"+dob+"\n"+phone+"\n"+email+"\n"+address+"\n"+
        qualification+"\n"+university+"\n"+skills
    )
    inputs=document.querySelectorAll('form input, form textarea, form select')
    inputs.forEach(input => {
        input.value=''
    });
}