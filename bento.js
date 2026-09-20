const board = document.getElementById('box')
const pieces = document.querySelectorAll('.img')
const slots = document.querySelectorAll('.slot1, .slot2, .slot3, .slot4 ')

pieces.forEach((piece) => {
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

slots.forEach((slot) => { 
 slot.addEventListener ('dragover', (e) => {
    e.preventDefault();
});
slot.addEventListener('drop', (e) => {
    e.preventDefault();


  const draggedpieceId = e.dataTransfer.getData('text/plain');
  const draggedpiece = document.getElementById(draggedpieceId);
        if (slot.children.length === 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 && draggedpiece) {
        slot.appendChild(draggedpiece);
        }
    });
});



///analyzing my life decisions rn
//im trying to finish this soon, i never used this js features bf btw
