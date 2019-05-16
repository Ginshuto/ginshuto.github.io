$(document).ready(function () {

    $('#formulaire').on('submit', function (e) {
        e.preventDefault();

        var name = $('.name').val();
        var surname = $('.surname').val();
        var email = $('.mail').val();
        var objet = $('.objet').val();
        var message = $('#message').val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url: 'https://formspree.io/martinmatthieupro@gmail.com',
            method: 'POST',
            data: {
                nom: name,
                prenom: surname,
                De: email,
                Objet: objet,
                Sujet: message,
            },
            dataType: "json",
            success: function () {
                alert("Votre message a bien été envoyé.")
            }

        });

    });

});