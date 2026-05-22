const uname = document.getElementById('uname');
const alias = document.getElementById('alias');
const age = document.getElementById('age');
const submitBtn = document.getElementById('submitBtn');
const cards = document.getElementById('cards');

submitBtn.addEventListener('click', function(){
    cards.innerHTML += `<div class="card">
            <span>Name: ${uname.value}</span>
            <span>Alias: ${alias.value}</span>
            <span>Age: ${age.value}</span>
        </div>`;
    uname.value = "";
    alias.value = "";
    age.value = "";
})