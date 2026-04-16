let wrapper = document.getElementById("wrapper");
let search = document.getElementById("search"); // HTML-da id="search" bo'lgan input bo'lishi shart
let allData = []; 

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
  .then(response => response.json())
  .then(data => {
    allData = data; // Ma'lumotni saqlab qo'yamiz
    render(allData);
  })
  .catch(err => console.error("Xatolik:", err)); 

function render(dataArray) {
  let cards = dataArray.map(el => `
    <div class="card">
        <img src="${el.avatar}" alt="${el.name}">
        <p>${el.name}</p>
        <a href="#">${new Date(el.createdAt).toLocaleDateString()}</a>
    </div>
  `).join(""); 
  wrapper.innerHTML = cards;
}
search.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase(); 
    

    let filteredData = allData.filter(item => {  
        return item.name.toLowerCase().includes(inputValue);
    });

    render(filteredData); 
});
