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

dragElement(document.getElementById('rock1'));
dragElement(document.getElementById('rock2'));
dragElement(document.getElementById('rock3'));
dragElement(document.getElementById('rock4'));
dragElement(document.getElementById('rock5'));
dragElement(document.getElementById('rock6'));
dragElement(document.getElementById('rock7'));
dragElement(document.getElementById('rock8'));
dragElement(document.getElementById('rock9'));
dragElement(document.getElementById('rock10'));
dragElement(document.getElementById('rock11'));
dragElement(document.getElementById('rock12'));
dragElement(document.getElementById('rock13'));
dragElement(document.getElementById('rock14'));