let conatiner = document.getElementById("container");
let wrapper = document.getElementById("wrapper");

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
  .then(response => response.json())
  .then(data => {
   console.log(data);
   render(datas);
   
   
  })
  .catch(error("Xatolik kelib chiqdi:", error));

  function render (datas){
    let data = datas.map(el => `
           div class="card" key="${el.id}">
        <img src="${el.avatar}" alt="${el.name}">
        <p>${el.name}</p>
        <a href="#">${new Date(el.createdAt).toLocaleDateString()}</a>
    </div>
        `) .joing();
        conatiner.innerHTML = datas();
  }