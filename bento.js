const board = document.getElementById('box')
const pieces = document.querySelectorAll('.img')
const slots = document.querySelectorAll('.slots')

pieces.forEch((piece) => {
    piece.addEeventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plaim', e.target.id);
    });
});

slots.forEach((slot) => {
slot.addEventListener ('dragover', (e) => {
    e.preventDefault();

});
slot.addEventListener('drop', (e) => {
    e.preventDefault();


const draggedpieceId = 
e.dataTransfer.getData('text/plai');
const draggedpiece = document.getElementById('draggedpieceId');
 if (slot.children.length === 0 && draggedpiece) {
    slot.appendChild(draggedpiece);
 }
 });
});
//breakfast time
