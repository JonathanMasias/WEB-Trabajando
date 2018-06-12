
	var refTagger = {
		settings: {
			bibleVersion: "RVR60",
			dropShadow: false, 
			roundCorners: true,
			socialSharing: ["twitter","facebook"],
			customStyle : {
				heading: {
					backgroundColor : "#073763",
					color : "#ffffff",
					fontFamily : "Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif"
				},
				body   : {
					color : "#0000ff",
					fontFamily : "TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif",
					fontSize : "18px",
					moreLink : {
						color: "#d9d9d9"
					}
				}
			}
		}
	};
	(function(d, t) {
		var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
		g.src = "//api.reftagger.com/v2/RefTagger.es.js";
		s.parentNode.insertBefore(g, s);
	}(document, "script"));
