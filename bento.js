const board = document.getElementById('box')
const pieces = document.querySelectorAll('.img')
const slots = document.getElementById('drop1, drop2, drop3, drop4')

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
});

  const draggedpieceId = e.dataTransfer.getData('text/plain');
  const draggedpiece = document.getElementById(draggedpieceId);
    if (slot.children.length === 0 && draggedpiece) {
        slot.appendChild(draggedpiece);
        }
    });

///im tired ill end this next week w a friends hellp
