let tinh = document.getElementById("button")
    tinh.addEventListener("click", onclick)

function onclick() {
    let toan = parseFloat(document.getElementById("toan").value)
    let ly = parseFloat(document.getElementById("ly").value)
    let hoa = parseFloat(document.getElementById("hoa").value)
    let tong = toan + ly + hoa
    let tb = tong/3
    document.getElementById("tb").innerHTML = "Diem trung binh:" + tb
    document.getElementById("tong").innerHTML = "Tong:" + tong
}



