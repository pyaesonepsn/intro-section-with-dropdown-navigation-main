document.querySelector('#features-nav').addEventListener('click',() => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    })
})

document.querySelector('#company-nav').addEventListener('click',() => {
    document.querySelectorAll('.toggle').forEach((item) => {
        item.classList.toggle('change');
    })
})
