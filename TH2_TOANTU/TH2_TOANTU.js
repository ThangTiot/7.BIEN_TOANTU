let click = document.getElementById("button")
    click.addEventListener("click", onclick)

function onclick() {
    let inputWidth = prompt("Nhap chieu dai: ")
    let inputHeight = prompt("Nhap chieu rong: ")
    let area = inputWidth * inputHeight
    document.write("Dien tich la:" + area)
}

