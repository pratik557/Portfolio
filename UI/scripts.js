
function opennav() {
    let bar = document.getElementById("hiddenmenu");
    if (bar.className === "hidden") {
        bar.className = " "
    }
    else {
        bar.className = "hidden"
    }
}

let form_holder = document.getElementById('form_holder');
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

form_holder.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form1.value || !form2.value || !form3.value) {
        alert("Error: Please fillup the text :(");
    }
    else {
        const sendData = {
            name: form1.value,
            email: form2.value,
            comment: form3.value.trim()
        }
        options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        }
        fetch('http://localhost:8000/form', options).then((res) => {
            console.log(res);
            if (res.ok)
                alert('Thanks For Your Feedback :) ');
            else
                alert(res.statusText);
        }).catch(err => alert("There is Some Problem"));
    }
});

