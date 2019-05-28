class Feature {
    constructor {
        this.feature = feature;
        this.icon = document.querySelector('.fas fa-robot fa-5x');
        this.heading = document.querySelector('.inside-of-features h3');
        this.paragraph = document.querySelector('.inside-of-features p');
    }

};




let features = document.querySelectorAll('.inside-of-features');

features.forEach(feature => new Feature(feature));