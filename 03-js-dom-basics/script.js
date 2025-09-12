

const bodyElement = document.getElementById('body');

const images = [
    'https://www.liveabout.com/thmb/APMQQFMHcHHnJyXnZntsFDu0RLo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg',
    'https://vignette.wikia.nocookie.net/familyguyfanon/images/a/a5/Lois_Griffin.png/revision/latest?cb=20110116222207',
    'https://assets.mycast.io/characters/brian-griffin-9488098-normal.jpg?1672282449',
    'https://vignette.wikia.nocookie.net/familyguyfanon/images/0/02/Stewie_Griffin.png/revision/latest?cb=20161119043926',
    'https://tse4.mm.bing.net/th/id/OIP.8qFRPyVVmlwgZJc8IRZ7nQAAAA?r=0&cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://th.bing.com/th/id/R.4405134d45d2d6d145e59df0ba59cb48?rik=Oq1aVkJRnLTqBA&riu=http%3a%2f%2fimages.shoutwiki.com%2ffamilyguy%2fthumb%2fd%2fdf%2fChris_Griffin.png%2f1200px-Chris_Griffin.png&ehk=nTTuVIWMJhyXpKghtpHUQCVFb0lPHnH7LIBXnbU9Tj0%3d&risl=&pid=ImgRaw&r=0'
];


function BackgroundChange(){

    differentIndex = Math.floor(Math.random() * backgroundImages.length);
    randomImage = backgroundImages[randomImage];
    bodyElement.style.backgroundImages = `url('${randomImage}')`;

}

BackgroundChange();