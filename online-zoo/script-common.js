if (document.querySelectorAll(".arrow")) {
    const arrow = document.querySelectorAll(".arrow");
    const text = document.querySelectorAll(".text");
    const block = document.querySelectorAll(".block");

    function addClickEvent(text, block, arrow) {
        arrow.addEventListener('click', () => {
            if (arrow.classList.contains("main-block__arrow-up")) {
                if (block.classList.contains("main-block__animal-down")) {
                    text.style.display = "none";
                    block.classList.remove("main-block__animal-down");
                    block.classList.add("main-block__down-rolled");
                    arrow.classList.remove("main-block__arrow-up", "main-block__arrow");
                    arrow.classList.add("main-block__arrow-rolled", "main-block__arrow-down");
                } else {
                    text.style.display = "none";
                    block.classList.remove("main-block__animal");
                    block.classList.add("main-block__rolled");
                    arrow.classList.remove("main-block__arrow-up", "main-block__arrow");
                    arrow.classList.add("main-block__arrow-rolled", "main-block__arrow-down");
                }
            } else {
                if (block.classList.contains("main-block__down-rolled")) {
                    text.style.display = "block";
                    block.classList.add("main-block__animal-down");
                    block.classList.remove("main-block__down-rolled");
                    arrow.classList.add("main-block__arrow-up", "main-block__arrow");
                    arrow.classList.remove("main-block__arrow-rolled", "main-block__arrow-down");
                } else {
                    text.style.display = "block";
                    block.classList.add("main-block__animal");
                    block.classList.remove("main-block__rolled");
                    arrow.classList.add("main-block__arrow-up", "main-block__arrow");
                    arrow.classList.remove("main-block__arrow-rolled", "main-block__arrow-down");
                }
            }
        });
    }

    for (let i = 0; i < arrow.length; i++) {
        addClickEvent(text[i], block[i], arrow[i]);
    }
}
////////////////////////////////////////////////////////////////
if (document.querySelector(".toolbar__arrow")) {
    const toolbarArrow = document.querySelector(".toolbar__arrow");
    const toolbar = document.querySelector(".toolbar");

    toolbarArrow.addEventListener("click", () => {
        if (toolbarArrow.classList.contains("toolbar__arrow--clicked")) {
            toolbarArrow.classList.remove("toolbar__arrow--clicked");
            toolbar.classList.remove("toolbar--clicked");

        } else {
            toolbarArrow.classList.add("toolbar__arrow--clicked");
            toolbar.classList.add("toolbar--clicked");
        }
    });
}
////////////////////////////

const links = document.querySelector('.youtube');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://drsavaug.github.io/links/src.json');
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        return;
    }
};
xhr.onprogress = function (event) {
    links.href = JSON.parse(event.target.responseText)['online-zoo'];
    console.log(links.href);
};