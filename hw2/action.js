let channels = document.querySelector('.channels');
channels.innerHTML = '';
channels.forEach(item => {
    let card = createCard(item);
    channels.appendChild(card);
});


function createCard(neww) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('card-img');
    if (channels.logo) {
        img.src = channels.logo;
    }

    let info = document.createElement('div');
    info.classList.add('card-info');

    let rating = document.createElement('span');
    rating.classList.add('info-rating');
    rating.innerText = channels.age_rating;

    let priority = document.createElement('span');
    priority.classList.add('info-priority');
    priority.innerText = channels.priority;

    info.appendChild(rating);
    info.appendChild(priority);

    card.appendChild(img);
    card.appendChild(info);

    return card;



}