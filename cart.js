document.addEventListener("DOMContentLoaded", function(){
    const cartDiv = document.getElementById("carrinho")
    const totalPriceSpan = document.getElementById("totalPrice")
    const cartLocalStorage = JSON.parse(localStorage.getItem("marioKart"))
    const comprarTudo = document.getElementById("buyAll")
    
    if (cartLocalStorage){
        cartDiv.innerHTML = ""
        const cartList = document.createElement("ul")
        let totalPrice = 0
        cartLocalStorage.forEach(product => {
            const li = document.createElement("li")
            li.setAttribute("id", product.id)
            li.innerHTML = `
            ${product.name}
            - ${product.price}R$
            (${product.quantity})
            `
            totalPrice += product.price * product.quantity
            cartList.appendChild(li)
        });
        totalPriceSpan.innerText = `Total: $${totalPrice}`
        cartDiv.appendChild(cartList)
        comprarTudo.addEventListener("click", function(){
            if(confirm("Tem certeza que deseja comprar tudo?")){
                localStorage.clear()
                alert("Compra efetuada com sucesso")
                window.location.reload()
            }
        })
        comprarTudo.disabled = false
    }
})
