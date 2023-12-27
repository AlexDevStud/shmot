var section = document.querySelectorAll('.section')[1],
    count = 0;

    section.style.backgroundRepeat = " no-repeat";
    section.style.backgroundSize = " 88px 36px";


section.onclick = function addLogo(event) {

    const withinBoundaries = event.composedPath().includes(document.querySelector('.products__header'));
 
	if ( ! withinBoundaries ) {
		let posX = event.offsetX-44,
        posY = event.offsetY-18;

        if(event.offsetX>44)event.offsetX-=44; else event.offsetX;

        if(event.offsetY>18)event.offsetY-=18; else event.offsetY;


    if (count == 0){
        section.style.backgroundImage += " url(./image/logo.png)";
        section.style.backgroundPosition = posX + "px " + posY + "px";
    }
        else {
        section.style.backgroundImage += ", url(./image/logo.png)";
        section.style.backgroundPosition += ", " + posX + "px " + posY + "px";
        }
        count++;
    console.log(section.style.backgroundImage, "\n", section.style.backgroundPosition);

	}

    }