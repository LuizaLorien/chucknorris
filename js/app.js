document.addEventListener('DOMContentLoaded', ()=>{
    const url = "https://api.chucknorris.io/jokes/categories"

    fetch(url).then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber dados')
        }
        return response.json()
    })
    .then((data)=>{
        gerarCategorias(data)
    })
    .catch((err) => console.error(err));

});

function gerarCategorias(categorias){
  
    const select = document.getElementById('select')
    categorias.map((categoria)=>{
        const options = document.createElement('option')
        options.innerHTML = `${categoria}`


        select.appendChild(options)
    })
}
const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const select = document.getElementById("select").value;
    // console.log(select)
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('faz de novo, faz direito')
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.error(err))
})
function gerarpiada(piada){
    console.log(piada)
}