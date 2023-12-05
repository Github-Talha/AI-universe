const loadAllData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const AllData = data.data.tools;
    loadSingleData(AllData)
}

const loadSingleData = (datas) => {
    for(const data of datas){
        console.log(data)
        // get the cards container 
        const cardsContainer = document.getElementById('cards');
        //create a new div
        const div = document.createElement('div');
        div.classList = `border rounded`
        // set the inner html on the div 
        div.innerHTML = `
        <img class="p-4" src="${data?.image}">
        <p class="ml-4">Name: ${data?.name}</p>
        <p class="ml-4">Description: ${data?.description}</p>
        <p class="ml-4">Description: ${data?.features}</p>
        `
        // append div into the container 
        cardsContainer.appendChild(div)

    }
}