// stap -1
const handleCatagory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
// stap 2
    const tebContainer = document.getElementById('tab-container');
    data.data.news_category.slice(0,3).forEach((catagory) => {
        // console.log(catagory)
        const div = document.createElement('div');
        div.innerHTML = `  
        <a onclick="handleLoadNews('${catagory.category_id}')" class="tab">${catagory.category_name}</a> 
        `;
        tebContainer.appendChild(div);
        
    });
    // console.log(data.data.news_category);
}
// stap -3
const handleLoadNews = async (catagoryID) =>{
    const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${catagoryID}`);
    const data = await res.json();
    // console.log(data.data);

    const cardContainer =document.getElementById('card-container');
    cardContainer.textContent='';

    data.data.forEach((news) =>{
        console.log(news)
        const div = document.createElement('div');
        div.innerHTML =` 
        <div class="card w-96 bg-base-100 shadow-xl" id="card-container">
        <figure><img src="${news.image_url}" alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            ${news.title.slice(0,50)}
            <div class="badge badge-secondary p-4">${news.rating.badge}</div>
          </h2>
          <p>${news.details.slice(0,100)}</p>
          <p>total views:${news.total_view? news.total_view :  "no views" }</p>
          <div class="card-footer flex justify-between mt-8">
            <div>
              <img class="w-14 rounded-full" src="${news.author.img}" alt="">  
            </div>
            <div>
              <h4>${news.author.name}</h4>
              <p>${news.author.published_date}</p>
            </div>
            <div>
              <button class="btn btn-neutral">Neutral</button>
            </div>
            
          </div>
        </div>
      </div>

        
        `;
        cardContainer.appendChild(div)


    })
   
};
handleLoadNews('01');



handleCatagory();