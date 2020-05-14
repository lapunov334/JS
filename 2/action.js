let channel = document.querySelector('channels');
channels.forEach(item => {
    let cards = createCard(item);
    channel.appendChild(cards);
});


function createCard() {
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

    let name = document.createElement('span');
    name.classList.add('info-name');
    name.innerText = channels.name;

    info.appendChild(rating);
    info.appendChild(name);

    card.appendChild(img);
    card.appendChild(info);

    return card;
}