document.addEventListener('DOMContentLoaded', (event) => {
    const tagline = document.querySelector('.tagline');
    tagline.style.width = '100%';

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = Math.random() * 40 + 10; // Tamanho entre 10px e 50px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animation = `rise ${Math.random() * 5 + 5}s linear`;
        
        document.body.appendChild(bubble);

        bubble.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.left = `${e.clientX}px`;
            ripple.style.top = `${e.clientY}px`;
            document.body.appendChild(ripple);

            setTimeout(() => {
                ripple.style.width = '500px';
                ripple.style.height = '500px';
                ripple.style.marginLeft = '-250px';
                ripple.style.marginTop = '-250px';
                ripple.style.opacity = '0';
                ripple.style.transition = 'all 0.6s ease-out';
            }, 0);

            bubble.style.animation = 'pop 0.6s ease-out';
            setTimeout(() => {
                bubble.remove();
                ripple.remove();
            }, 600);
        });

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    setInterval(createBubble, 300);
});