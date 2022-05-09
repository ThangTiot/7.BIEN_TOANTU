function chuyendoi() {
    let amount=document.getElementById("number").value
    let from=document.getElementById("from").value
    let to=document.getElementById("to").value
    let result=amount*to/from
    let ht
    if (to==1) {
        ht="$"
    } else {
        ht="VND"
    }
    document.getElementById("kq").innerHTML="Result: " + result + " " + ht;
}