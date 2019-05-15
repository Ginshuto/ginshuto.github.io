    $(".change").click(function () {
        $("html").children().each(function () {
            $(this).html($(this).html().replace(/blue-grey lighten-2/g, " red lighten-3"));
            $(this).html($(this).html().replace("red lighten-2", "blue-grey lighten-3"));
            $(this).html($(this).html().replace("change", "change2"));
            $(this).html($(this).html().replace(/batman/g, "licorne"));
            $(this).html($(this).html().replace(/Batman/g, "Licorne"));
            $(this).html($(this).html().replace("Parfois discuter de son code peut mettre en évidence des erreurs, voici votre propre assistant personnel", "Peluche de licorne très connue qui est apparue dans un dessin animé"));
        });
    })