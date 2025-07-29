var productContainer=document.getElementById("products")
var  search= document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.Value.toUpperCase()

    for (count=0;count<productlist.length;count=count+1)
    {
        var productname= productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue)<0)

            {
                productlist[count].style.display="none"
            }
            else{
                productlist[count.style.display="block"]
            }
    }
})


    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const item = button.closest(".gallery-item");
        const name = item.dataset.name;
        const img = item.dataset.img;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, img });
        localStorage.setItem("cart", JSON.stringify(cart));

        // Redirect to cart page
        window.location.href = "cart.html";
      });
    });