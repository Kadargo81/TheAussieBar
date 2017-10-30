// TODO Got Instagram working, Requires too much authorization atm to get public photos gonna refactor for another source.
var feed = new Instafeed({
        get: 'user',
        userId: "2166161902",
        accessToken: "2166161902.8f82b08.91225cc49f084d64b1987cd5e1816da2",
        clientId: '8f82b082cc9742ec99e1390881a4aedf',
        sortBy: "most-recent",
        limit: 18,
        // template: '<a href="{{link}}"><img src="{{image}}" /></a>',
        after: function() {
			var el = document.querySelectorAll('instagram');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});

window.onload = function() {
	feed.run();
};
