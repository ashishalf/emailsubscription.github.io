const scriptURL = "https://script.google.com/macros/s/AKfycbwcbT_S7HTEfsNwEPCzoOVnBBhhA67lw-0Ajt7uS9_A6-GIynb_tNeQ3iI1OMt1aOSj/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>{ 
        document.getElementById("msg").innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            document.getElementById("msg").innerHTML = ""
        },5000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
