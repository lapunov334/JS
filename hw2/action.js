let modalWrap = document.querySelector('.modal-wrap');
document.querySelector('.close-modal').addEventListener('click', closeModal);
modalWrap.addEventListener('click', closeModal);

let channel = document.querySelector('.channels');
console.log(channel);
channels.forEach(item => {
    let cards = createCard(item);
    channel.appendChild(cards);
});

function createCard(neww) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('card-img');
    if (neww.logo) {
        img.src = neww.logo;
    }

    let info = document.createElement('div');
    info.classList.add('card-info');

    let rating = document.createElement('span');
    rating.classList.add('info-rating');
    rating.innerText = neww.age_rating;

    let name = document.createElement('span');
    name.classList.add('info-name');
    name.innerText = neww.name;

    info.appendChild(rating);
    info.appendChild(name);

    card.appendChild(img);
    card.appendChild(info);

    card.addEventListener('click', () => {
        createModalWrap(genres);
        openModal();
    });

    return card;
}

function openModal() {
    modalWrap.style.display = 'flex';
}

function closeModal() {
    modalWrap.style.display = 'none';
}

function createModalWrap(arrChannels) {
    let productTag = document.createElement('div');
    productTag.classList.add('product');

    let containerName = document.createElement('div');
    containerName.classList.add('containerName');

    let nameTag = document.createElement('span');
    nameTag.classList.add('name');
    nameTag.innerText = arrChannels.name;

    let name_enTag = document.createElement('span');
    name_enTag.classList.add('name_en');
    name_enTag.innerText = arrChannels.name_en;

    containerName.appendChild(nameTag);
    containerName.appendChild(name_enTag);

    productTag.appendChild(containerName);
}