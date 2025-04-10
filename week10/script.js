function dragElement(cakeElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    cakeElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        cakeElement.style.top = (cakeElement.offsetTop - pos2) + 'px';
        cakeElement.style.left = (cakeElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('topping1'));
dragElement(document.getElementById('topping2'));
dragElement(document.getElementById('topping3'));
dragElement(document.getElementById('topping4'));
dragElement(document.getElementById('topping5'));
dragElement(document.getElementById('topping6'));
dragElement(document.getElementById('topping7'));
dragElement(document.getElementById('topping8'));
dragElement(document.getElementById('topping9'));
dragElement(document.getElementById('topping10'));
dragElement(document.getElementById('topping11'));
dragElement(document.getElementById('topping12'));
dragElement(document.getElementById('topping13'));
dragElement(document.getElementById('topping14'));