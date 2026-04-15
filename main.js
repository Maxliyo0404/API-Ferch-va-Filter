let conatiner = document.getElementById("container");
let wrapper = document.getElementById("wrapper");

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
  .then(response => response.json())
  .then(data => {
//    console.log(data);
   
   
  })
  catch(error => console.error("Xatolik yuz berdi:", error));