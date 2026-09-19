const cursor = document.querySelector('.cursorshi');
    
       cursor.addEventListener('mousemove', (e)=> 
        {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });