let modalWindow = document.querySelector('.modal');
let modalBtn = document.querySelector('.add-user');
let btnCloseX = document.querySelector('.close');
let btnClose = document.querySelector('.btn.close');
let popap = document.querySelector('.popap');

modalBtn.onclick = function() {
    modalWindow.style.display = 'block';
};

btnCloseX.onclick = function() {
    modalWindow.style.display = 'none';
};

btnClose.onclick = function() {
    modalWindow.style.display = 'none';
};



