function search_auto () {
    let input = document.getElementById('searchbar').value

    input = input.toLowerCase();

    let x = document.getElementsByClassName('segmento');

    for (i=0; i < x.length; i++) {
        if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {x[i].style.display = "list-item";}
    }
}

