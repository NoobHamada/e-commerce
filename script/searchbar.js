let prodName = document.getElementsByClassName('prodName')
let btn = document.getElementById('btn')

btn.onclick = function () {
    let input = document.getElementById('searchBar')
    
    for (i = 0; i < prodName.length; i++) {
        if (prodName[i].innerHTML.toLowerCase() == input.value.toLowerCase()) {
            prodName[i].parentElement.style.display = 'block'
            input.value = ''
        } else {
            prodName[i].parentElement.style.display = 'none'
        }
    }
}
