ej.addCulture( "sr-Cyrl-CS", {
	name: "sr-Cyrl-CS",
	englishName: "Serbian (Cyrillic, Serbia and Montenegro (Former))",
	nativeName: "српски (Србија и Црна Гора (Бивша))",
	language: "sr-Cyrl",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "није број",
		negativeInfinity: "-бесконачност",
		positiveInfinity: "+бесконачност",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "дин."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["недеља","понедељак","уторак","среда","четвртак","петак","субота"],
				namesAbbr: ["нед.","пон.","ут.","ср.","чет.","пет.","суб."],
				namesShort: ["не","по","ут","ср","че","пе","су"]
			},
			months: {
				names: ["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],
				namesAbbr: ["јан.","феб.","март","апр.","мај","јун","јул","авг.","септ.","окт.","нов.","дец.",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy.",
				D: "d. MMMM yyyy.",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy. H:mm",
				F: "d. MMMM yyyy. H:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy."
			}
		}
	}
});
