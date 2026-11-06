async function fetchproducts(){
   let response=await fetch("https://desistore.stackrel.com/products")
   let products= await response.json()
   let box= document.getElementById('box')
   box.innerHTML = products.map((n)=>{
    return `<div >
<img  src=${n.image} alt="">
<p>${n.category}</p>
<p>${n.price}</p>
</div>`
   }).join(" ")
}
fetchproducts();