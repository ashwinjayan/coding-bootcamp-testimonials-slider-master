var btn, testimony;

const selectAllElements = () => {
    btn = document.querySelectorAll(".btn");
    testimony = document.querySelectorAll(".testimony");
}

selectAllElements();

btn.forEach(x => x.addEventListener('click', function() {
    selectAllElements();
    testimony.forEach(y => y.classList.toggle('hidden'));
}));