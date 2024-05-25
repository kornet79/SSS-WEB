document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'red';
    });
});