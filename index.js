const cursor = document.querySelector('.cursorshi');
    
       window.addEventListener('mousemove', (e)=> 
        {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });