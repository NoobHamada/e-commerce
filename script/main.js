// Getting JSON Data
let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.responseText)

        for (i = 0; i < object.length; i++) {
            let container = document.createElement('div')
            container.className = object[i].category
            let name = document.createElement('div')
            name.innerText = object[i].name
            let image = document.createElement('img')
            image.setAttribute('src', object[i].img)
            let staticPrice = document.createElement('div')
            staticPrice.innerText = object[i].price
            let click = document.createElement('button')
            click.innerText = '+'

            document.getElementById('section').appendChild(container)
            container.appendChild(name)
            container.appendChild(image)
            container.appendChild(click)
            container.appendChild(staticPrice)
        }
    }

    // The Rest Of The Code
    let buttons = document.querySelectorAll("button");
    let temp = '';
    let priceArr = [];
    let ttl = document.getElementById("ttl");

    buttons.forEach(function (ele) {
        ele.addEventListener('click', function () {
            priceArr.push(+this.nextElementSibling.innerText)
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
        let calc = priceArr.reduce(function (a, b) {
            return a + b
        })

        ttl.innerText = calc;
    }
}
request.open('get', 'script/data.json', true);
request.send()
