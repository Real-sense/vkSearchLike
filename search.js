var searchLiker = (function () {
	var Module = '', Index, Massive;
	return {
		init: function () {
			console.log('init');
			Module = this;
			Index = 0;
			Massive = document.getElementById('results').children;
			Module.each();
		},
		each: function () {
			console.log('each');
			var row = Massive[Index];

			if (Module.hasClass(row, 'people_row')) {
				var img = row.querySelector('.img'),
					userIdParse = img.getAttribute('onmouseover').split(',')[1],
					userID = userIdParse.substring(1, userIdParse.length - 1);

				uiPhotoZoom.over(img, userID);
				var zoom = img.querySelector('.ui_zoom_added'),
					delay = Module.randomInteger(1000, 1500);
				if (zoom != null) {
					console.log(zoom);
					zoom.click();
					setTimeout(function () {
						var like = document.getElementById('pv_like');
						if (Module.hasClass(like, 'pv_liked')) {
							Module.likedBefore();
						} else {
							like.click();
							Module.close();
						}
					}, delay);
				} else {
					Module.next();
				}
			} else {
				Module.loadMore();
			}

		},
		next: function () {
			var delay = Module.randomInteger(500, 1300);
			Index++;
			setTimeout(function () {
				Module.each();
			}, delay)
		},
		close: function () {
			console.log('close');
			var closer = document.querySelector('.pv_close_btn');
			closer.click();
			Index++;
			Module.randomStart();
		},
		likedBefore: function () {
			var closer = document.querySelector('.pv_close_btn'),
				delay = Module.randomInteger(500, 1300);
			closer.click();
			Index++;
			setTimeout(function () {
				Module.each();
			}, delay)
		},
		randomStart: function () {
			console.log('start');
			var delay = Module.randomInteger(45000, 59000);
			setTimeout(function () {
				Module.each();
			}, delay);
		},
		loadMore: function () {
			var button = document.getElementById('ui_search_load_more'),
				delay = Module.randomInteger(400, 1200);
			button.click();
			setTimeout(function () {
				Module.each();
			}, delay);
		},
		randomInteger: function(min, max) {
		  	var rand = min + Math.random() * (max - min);
		  	rand = Math.round(rand);
		  	return rand;
		},
		hasClass: function (el, className) {
			if (el.classList) {
				return el.classList.contains(className);
		    } else {
		        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
		    }
		}
	}
})();
searchLiker.init();