document.querySelector('.dropdown__button').addEventListener('click', function () {
    let dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    this.classList.toggle('open');
});

window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown__button') && !event.target.closest('.dropdown__content')) {
        let dropdowns = document.getElementsByClassName("dropdown__content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
                openDropdown.previousElementSibling.classList.remove('open');
            }
        }
    }
});


let dropdownContentDivs = document.querySelectorAll('.dropdown__content div');
let selectedDiv = null;

dropdownContentDivs.forEach(function (div) {
    div.addEventListener('click', function () {
        if (selectedDiv) {
            selectedDiv.style.color = 'white';
        }

        this.style.color = '#42A9ED';
        selectedDiv = this;
    });
});


document.getElementById('uploadButton').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


document.querySelector('.burger-button').addEventListener('click', function () {
    let burgerContent = document.getElementById('burgerContent');
    if (burgerContent.style.display === 'none' || burgerContent.style.display === '') {
        burgerContent.style.display = 'block';
    } else {
        burgerContent.style.display = 'none';
    }
});

window.addEventListener('click', function (event) {
    let burgerContent = document.getElementById('burgerContent');
    if (!burgerContent.contains(event.target) && !event.target.matches('.burger-button')) {
        burgerContent.style.display = 'none';
    }
});


