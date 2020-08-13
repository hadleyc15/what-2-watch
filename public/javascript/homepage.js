var editText = document.getElementsByClassName("edit-link")
console.log(editText)
for (let i = 0; i < editText.length; i++) {
    const element = editText[i];
    console.log(element)
    element.style.display = "none"
}

