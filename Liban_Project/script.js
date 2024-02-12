document.addEventListener('DOMContentLoaded', (event) => {    
    // Animation de Scroll pour les Liens de Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Affichage Dynamique du Prix Total sur la Page de Réservation VIP
    // (Uniquement si les éléments sont présents dans la page actuelle)
    const vipOptions = document.querySelectorAll('.vip-option');
    const totalPrice = document.querySelector('#total-price'); // Assurez-vous d'avoir un élément avec id="total-price" dans votre HTML pour la réservation VIP

    if (vipOptions.length > 0 && totalPrice) {
        vipOptions.forEach(option => {
            option.addEventListener('click', () => {
                const price = option.querySelector('.price').textContent;
                totalPrice.textContent = `Prix Total: ${price}`;
            });
        });
    }

    // Modal d'Information sur les Cocktails ou Apéritifs
    // (Uniquement si les éléments sont présents dans la page actuelle)
    const cocktails = document.querySelectorAll('.cocktail');

    if (cocktails.length > 0) {
        cocktails.forEach(item => {
            item.addEventListener('click', () => {
                const description = item.querySelector('.description').innerHTML;
                showModal(description);
            });
        });

        function showModal(content) {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `<div class="modal-content">${content}<span class="close-button">&times;</span></div>`;

            document.body.appendChild(modal);

            modal.querySelector('.close-button').addEventListener('click', () => {
                modal.remove();
            });
        }
    }

    // Bouton "Retour en Haut"
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'myBtn';
    backToTopButton.textContent = 'Retour en Haut';
    backToTopButton.onclick = topFunction;
    backToTopButton.style.display = 'none'; // Commence par être caché
    document.body.appendChild(backToTopButton);

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});