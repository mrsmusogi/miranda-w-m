Element.addEventListener ("click", changeContent);

function changeContent() {
    document.getElementById ("continue");
    let content = document.getElementById ("text").innerHTML;
    content.innerHTML = "text2";
}


