let buttons = document.querySelectorAll("button");
let temp = '';
let priceArr = [];
let ttl = document.getElementById("ttl");

buttons.forEach(function(ele) {
    ele.addEventListener('click', function() {
        priceArr.push(+this.previousElementSibling.innerText)
        temp += this.previousElementSibling.previousElementSibling.innerText
        listFill();
        
        let ball = document.createElement("div");
        ball.classList = 'ball';
        this.appendChild(ball);
        price();
    })
})

function listFill() {
    let li = document.createElement("li");
    li.innerText = temp;
    temp = '';
    document.getElementById("cart").appendChild(li)
}

function price() {
    let calc = priceArr.reduce(function(a, b) {
        return a + b
    })
    
    ttl.innerText = calc;
}