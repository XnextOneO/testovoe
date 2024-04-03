document.querySelector('.dropdown-button').addEventListener('click', function() {
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    this.classList.toggle('open');
});

// Закрытие выпадающего списка при клике вне его
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-button') && !event.target.closest('.dropdown-content')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
                openDropdown.previousElementSibling.classList.remove('open');
            }
        }
    }
});


var dropdownContentDivs = document.querySelectorAll('.dropdown-content div');
var selectedDiv = null;

dropdownContentDivs.forEach(function(div) {
    div.addEventListener('click', function() {
        // Если был выбран другой div, вернуть его цвет на стандартный
        if (selectedDiv) {
            selectedDiv.style.color = 'white';
        }

        // Изменить цвет текста выбранного div и сохранить его как выбранный
        this.style.color = '#42A9ED';
        selectedDiv = this;
    });
});


document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


document.querySelector('.burger-button').addEventListener('click', function() {
    var burgerContent = document.getElementById('burgerContent');
    if (burgerContent.style.display === 'none' || burgerContent.style.display === '') {
        burgerContent.style.display = 'block';
    } else {
        burgerContent.style.display = 'none';
    }
});

window.addEventListener('click', function(event) {
    var burgerContent = document.getElementById('burgerContent');
    if (!burgerContent.contains(event.target) && !event.target.matches('.burger-button')) {
        burgerContent.style.display = 'none';
    }
});


