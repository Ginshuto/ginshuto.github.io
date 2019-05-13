$(function () {
$("#formulaire").submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "contact.php",
        data: $("#formulaire").serialize(),
        success: function () {
            alert("Message envoyé avec succès");
        },
        error: function () {
            alert("Problème dans l'envoi du message");
        }
    });
});
});