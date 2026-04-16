let container = document.getElementById("container");
let wrapper = document.getElementById("wrapper");
let allData = []
fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
  .then(response => response.json())
  .then(data => {
    render(data);
    let allData = []; 
  })
  .catch(err => console.error("Xatolik:", err)); 

function render(dataArray) {
  let cards = dataArray.map(el => `
    <div class="card" key="${el.id}">
        <img src="${el.avatar}" alt="${el.name}">
        <p>${el.name}</p>
        <a href="#">${new Date(el.createdAt).toLocaleDateString()}</a>
    </div>
  `).join(""); 


  wrapper.innerHTML = cards;
}

function filter (data){
    search.addEventListener("input", (el) =>{
        let searchInput = el.target.value.toLowerCase();
    } )
     let filteredData = allData.filter(item => {  
      return item.name.toLowerCase().includes(inputValue)
            
    });

   
    render(filteredData); 
  };
