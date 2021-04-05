const arrow = document.querySelectorAll(".arrow");
const  text = document.querySelectorAll(".text");
const block = document.querySelectorAll(".block");
console.log(arrow);

function addClickEvent(text, block, arrow) {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains("main-block__arrow-up")) {
            if (block.classList.contains("main-block__animal-down")) {
                text.style.display = "none";
                block.classList.remove("main-block__animal-down")
                block.classList.add("main-block__down-rolled")
                arrow.classList.remove("main-block__arrow-up", "main-block__arrow")
                arrow.classList.add("main-block__arrow-rolled", "main-block__arrow-down")
            } else {
                text.style.display = "none";
                block.classList.remove("main-block__animal")
                block.classList.add("main-block__rolled")
                arrow.classList.remove("main-block__arrow-up", "main-block__arrow")
                arrow.classList.add("main-block__arrow-rolled", "main-block__arrow-down")
            }
        } else {
            if (block.classList.contains("main-block__down-rolled")) {
                text.style.display = "block";
                block.classList.add("main-block__animal-down")
                block.classList.remove("main-block__down-rolled")
                arrow.classList.add("main-block__arrow-up", "main-block__arrow")
                arrow.classList.remove("main-block__arrow-rolled", "main-block__arrow-down")
            } else {
                text.style.display = "block";
                block.classList.add("main-block__animal")
                block.classList.remove("main-block__rolled")
                arrow.classList.add("main-block__arrow-up", "main-block__arrow")
                arrow.classList.remove("main-block__arrow-rolled", "main-block__arrow-down")
            }
        }
    })
}

for (let i = 0; i < arrow.length; i++) {
    addClickEvent(text[i], block[i], arrow[i]);
}