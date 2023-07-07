let buttons = document.querySelectorAll("button");
let priceArr = [];
let check = document.getElementById("check");
let ttl = document.getElementById("ttl");

buttons.forEach(function(ele) {
    ele.addEventListener('click', function() {
        priceArr.push(+this.previousElementSibling.innerText)
    })
})

check.onclick = function() {
    let calc = priceArr.reduce(function(a, b) {
        return a + b
    })
    
    ttl.innerText = calc;
}