
const loadAllData=async (query = "") => {
    const url =`https://openapi.programming-hero.com/api/retro-forum/posts${query}`
    const response = await fetch(url);
    const dataU = await response.json();
    // console.log(data);

    dataU.forEach((data) => {
        
        const div = document.createElement("div");
div.classList.add("product");
div.innerHTML=`
<div id="fetch-box" class="w-[1000px] h-[150px] bg-slate-200 mr-[200px] rounded-3xl flex gap-10 justify-between items-center" >
<div>
    <img src="images/logo.png" alt="">
</div>

<div>
    <h1 class="text-2xl font-bold"> News</h1>
    <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis illo voluptatem, excepturi aliquid corporis, iste alias ipsa amet sequi dolores dicta ab facere molestiae quam dolor minus, voluptatibus adipisci!</p>
</div>

</div>
`;
        
        Fetching.append(div);
    });

    
    const Fetching = document.getElementById("fetch");




    
}


const handleSearch=() => {
    const value = document.getElementById("search-box").value;
    loadAllData(`?category=${value}`);
}
loadAllData(data);

// function loadUser(){
//     fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
// .then(Res => Res.json())
// .then(data => console.log(posts));
// }


// function displayData(data){
// const discuss = document.getElementById('fetch-box');
// for(const data of posts){
//     console.log(data);
//     }
// }
    