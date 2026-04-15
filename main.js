let conatiner = document.getElementById("container");
let wrapper = document.getElementById("wrapper");

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
  .then(response => response.json())
  .then(data => {
//    console.log(data);
   render(data);
   
   
  })
  .catch(error("Xatolik kelib chiqdi:", error));