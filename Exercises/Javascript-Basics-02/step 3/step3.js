document.querySelector("#name").addEventListener("blur" ,() =>{
    document.querySelector("div").innerHTML = document.querySelector("#name").value;
});