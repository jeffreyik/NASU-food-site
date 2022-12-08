const foodsContainer = document.querySelector(".food-items");
const cartCountEl = document.querySelectorAll(".cart-items")
const cartBtn = document.querySelectorAll(".cart-btn")
const checkoutEl = document.querySelector(".checkout")
const checkoutContainer = document.querySelector(".checkout-container")
const checkoutCol = document.querySelector(".col")
const backgroundFilter = document.querySelector(".background-filter")

const foodList = [
    {
        id: 1,
        name: "Jollof Rice",
        price: 1500,
        selected: false,
        quantity: 0,
    },
    {
        id: 2,
        name: "Pounded yam and egusi",
        price: 2000,
        selected: false,
        quantity: 0,
    },
    {
        id: 3,
        name: "Yam and Egg",
        price: 1300,
        selected: false,
        quantity: 0,
    },
]

const foodCart = [];

let cartCount;

const refresUI = () => {
    cartCount = foodCart.length
    cartCountEl.forEach(countEl => {
        cartCount <= 0 ? countEl.style.display = "none" : countEl.style.display = "flex", countEl.innerHTML = cartCount
    })
    document.querySelectorAll(".row").forEach(row => {
        row.innerHTML = ""
    })

    createCheckoutEl(foodCart)
    console.log(cartCount)
    console.log("refreshed!")
}

const createFoodCard = () => {
    foodList.forEach(foodItem => {
        const foodCard = document.createElement("div")
        foodCard.classList.add("food-card")
        const foodElements = `
            <img src="/img/image 1 (3).png" alt="">
            <div class="food-content">
                <h4>${foodItem.name}</h4>
                <h5>${foodItem.price}</h5>
            </div>
            <div class="controls">
                <button class="food btn secondary-btn">Order Now</button>
                <div class="item-count">
                    <div class="decrement">-</div>
                    <div class="count">1</div>
                    <div class="increment">+</div>
                </div>
            </div>
        `
        foodCard.insertAdjacentHTML("beforeend", foodElements)
        foodsContainer.appendChild(foodCard)

        foodCard.querySelectorAll(".food").forEach(btn => {
            btn.addEventListener("click", () => {
                addToCart(foodItem)
                foodCard.querySelector(".count").innerHTML = foodItem.quantity
            })
        })

        foodCard.querySelectorAll(".count").forEach(count => {
            count.innerHTML = foodItem.quantity
        })

        foodCard.querySelectorAll(".increment").forEach(btn => {
            btn.addEventListener("click", () => {
                if (foodItem.quantity > 0) {
                    increment(foodItem, foodCard)
                    foodCard.querySelector(".count").innerHTML = foodItem.quantity
                }
            })
        })

        foodCard.querySelectorAll(".decrement").forEach(btn => {
            btn.addEventListener("click", () => {
                if (foodItem.quantity > 1) {
                    decrement(foodItem, foodCard)
                    foodCard.querySelector(".count").innerHTML = foodItem.quantity
                }
            })
        })
    })
    
    
}

const createCheckoutEl = (cart) => {
    cart.forEach(item => {
        const checkoutFood = document.createElement("div")
        checkoutFood.classList.add("checkout-food")
        checkoutFood.classList.add("row")
        checkoutFood.innerHTML = item.name

        const checkoutPrice = document.createElement("div")
        checkoutPrice.classList.add("checkout-price")
        checkoutPrice.classList.add("row")
        checkoutPrice.innerHTML = item.price

        const checkoutQuantity = document.createElement("div")
        checkoutQuantity.classList.add("checkout-quantity")
        checkoutQuantity.classList.add("row")
        checkoutQuantity.innerHTML = item.quantity

        const checkoutTotal = document.createElement("div")
        checkoutTotal.classList.add("checkout-total")
        checkoutTotal.classList.add("row")
        checkoutTotal.innerHTML = item.price * item.quantity

        document.querySelector(".first-col").appendChild(checkoutFood)
        document.querySelector(".second-col").appendChild(checkoutPrice)
        document.querySelector(".third-col").appendChild(checkoutQuantity)
        document.querySelector(".fourth-col").appendChild(checkoutTotal)
    })
}

const increment = (item) => {
    item.quantity += 1
    console.log(item.quantity)
    refresUI()
}

const decrement = (item) => {
    item.quantity -= 1
    refresUI()
}

const addToCart = (item) => {
    if (!item.selected) {
        foodCart.push(item)
        item.selected = true
        item.quantity = 1
    } else {
        return
    }
    refresUI()
}

createFoodCard()
refresUI()

cartBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        checkoutEl.style.display = "block"
        backgroundFilter.style.display = "block"
    })
})

backgroundFilter.addEventListener("click", () => {
    checkoutEl.style.display = "none"
    backgroundFilter.style.display = "none"
})