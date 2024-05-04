

const loadAllData=async (query = "") => {
    const url =`https://openapi.programming-hero.com/api/retro-forum/posts${query}`
    
    const response = await fetch(url);
    const data = await response.json();
    const post = data.posts;
    console.log(post);

    const Fetching = document.getElementById("fetch");

    post.forEach((post1) => {
        // console.log(post1);
        
    const div = document.createElement("div");

div.innerHTML=`
<div id="fetch-box" class="w-[1000px] h-[150px] bg-slate-200 mr-[200px] rounded-3xl flex gap-10 justify-between items-center" >
<div>
    <img src="${post1.image}">;
</div>

<div>
    <h1 class="text-2xl font-bold">${post1.title}</h1>
    <h1 class="text-2xl font-bold">${post1.category}</h1>
    <p class="text-lg">${post1.description}</p>
</div>

</div>
`;
        
        Fetching.append(div);
    });

       
}


const handleSearch=() => {
    const value = document.getElementById("search-box").value;
    console.log(value);
    document.getElementById("fetch").innerHTML="";
    loadAllData(`?category=${value}`);

}

loadAllData();

const latestData = async () => {
    const url =`https://openapi.programming-hero.com/api/retro-forum/latest-posts`
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    const latestPost = document.getElementById("latest");
    data.forEach((data1) => {
        const div = document.createElement("div");

        div.innerHTML=`
        <div id="fetch-box" class="w-[1000px] h-[150px] bg-slate-200 mr-[200px] rounded-3xl flex gap-10 justify-between items-center" >
        <div>
            <img src="${data1.profile_image}">;
        </div>
        
        <div>
            <h1 class="text-2xl font-bold">${data1.title}</h1>
            <h1 class="text-2xl font-bold">${data1.category}</h1>
            <p class="text-lg">${data1.description}</p>
        </div>
        
        </div>
        `;
        latestPost.append(div);
    })

}

latestData();