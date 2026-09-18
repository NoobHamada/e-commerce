// Getting JSON Data
let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.responseText)

        for (let i = 0; i < object.length; i++) {
            let container = document.createElement('div')
            container.classList.add(object[i].category)
            let name = document.createElement('div')
            name.classList.add('prodName')
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

            // SearchBar Menu After Typing Product's Name
            let option = document.createElement('option')
            document.getElementById('products-list-for-searchbar').appendChild(option)
            option.innerText = object[i].name
        }
    }

    // The Rest Of The Code
    let buttons = document.querySelectorAll("button");
    let priceArr = [];
    let ttl = document.getElementById("ttl");

    buttons.forEach(function (ele) {
        ele.addEventListener('click', function () {
            let itemName = this.previousElementSibling.previousElementSibling.innerText;
            let itemPrice = +this.nextElementSibling.innerText;

            priceArr.push(itemPrice);
            listFill(itemName, itemPrice);

            // Capture exactly where the clicked button sits on screen right now
            let rect = this.getBoundingClientRect();

            let ball = document.createElement("div");
            ball.classList = 'ball';
            ball.style.top = rect.top + 'px';
            ball.style.left = rect.left + 'px';
            this.appendChild(ball);

            price();
        })
    })

    function listFill(name, itemPrice) {
        let li = document.createElement("li");

        let nameSpan = document.createElement("span");
        nameSpan.innerText = name;

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "×";
        removeBtn.classList.add("remove-item");
        removeBtn.setAttribute('aria-label', `Remove ${name} from cart`);
        removeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            let idx = priceArr.indexOf(itemPrice);
            if (idx > -1) priceArr.splice(idx, 1);
            li.remove();
            price();
        });

        li.appendChild(nameSpan);
        li.appendChild(removeBtn);
        document.getElementById("cart").appendChild(li);
    }

    function price() {
        let calc = priceArr.reduce(function (a, b) {
            return a + b;
        }, 0);

        ttl.innerText = calc;
    }
}

document.addEventListener('keydown', (e) => {
  const typing = ['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName);
  if (typing) return; // don't hijack the search box
  if (e.key.toLowerCase() === 'c' || e.key.toLowerCase() === 'ؤ') {
    $('aside').trigger('click');
  }
});

request.open('get', 'script/data.json', true);
request.send()