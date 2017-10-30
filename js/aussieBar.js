var imgInsta = document.querySelector(".instagram");

var feed = new Instafeed({
        get: 'tagged',
        tagName: 'kampot',
        clientId: '8f82b082cc9742ec99e1390881a4aedf'
    });
    feed.run();
