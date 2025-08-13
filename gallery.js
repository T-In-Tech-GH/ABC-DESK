const btn = document.getElementById("btn-card");
const btn1 = document.getElementById("btn-card1");
const btn2 = document.getElementById("btn-card2");
const subscribeBtn = document.getElementById("subscribe-btn");
const emailInput = document.getElementById("email-input");


const addToCart = () => { 
   alert("Item added to cart!");
}

const sub = () => { 
    const email = emailInput.ariaValueMax.trim();
    if (email) { 
        alert(`Subscribed with: ${email}`);
        emailInput.value = "";
    } else { 
        alert("Please enter your email address")
    }
}

btn.addEventListener("click", addToCart);
btn1.addEventListener("click", addToCart);
btn2.addEventListener("click", addToCart);
subscribeBtn.addEventListener("click", sub);
emailInput.addEventListener("click", sub);