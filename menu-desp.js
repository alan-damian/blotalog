//menu desplegable o plegable 

function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}
//fin del menu desplegable

//elegir y fijar una opcion

function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	const icon = document.querySelector('.dropdown .title .fa');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
	
	//Activa evento personalizado
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	setTimeout(() => toggleClass(icon,'rotate-90',0));
}
 // fin de seleccion de opcion
 
function search_auto_menu () {
    let input = document.getElementsByClassName('.dropdown .title').value

    input = input.toLowerCase();

    let x = document.getElementsByClassName('segmento');

    for (i=0; i < x.length; i++) {
        if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {x[i].style.display = "list-item";}
    }
}
 


//obtiene elementos
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//vincula listeners a estos elementos
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
