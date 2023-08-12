
function handleMouseEnter () {
    this.classList.add ('d-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave () {
    this.classList.remove ('d-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards () {
    const cardElements = document.getElementsByClassName ('d-card');
    
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener ("DOMContentLoaded", addEventListenersToCards, false);
