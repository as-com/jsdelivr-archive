ej.addCulture( "rw", {
	name: "rw",
	englishName: "Kinyarwanda",
	nativeName: "Kinyarwanda",
	language: "rw",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "RWF"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["Ku cyumweru","Ku wa mbere","Ku wa kabiri","Ku wa gatatu","Ku wa kane","Ku wa gatanu","Ku wa gatandatu"],
				namesAbbr: ["cyu.","mbe.","kab.","gat.","kan.","gat.","gat."],
				namesShort: ["cy","mb","ka","ga","ka","ga","ga"]
			},
			months: {
				names: ["Mutarama","Gashyantare","Werurwe","Mata","Gicurasi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza",""],
				namesAbbr: ["Mut","Gas","Wer","Mat","Gic","Kam","Nyak","Kan","Nze","Ukwak","Ugus","Ukub",""]
			},
			AM: ["z.m","z.m","Z.M"],
			PM: ["z.n","z.n","Z.N"],
			patterns: {
				d: "d/MM/yyyy",
				D: "d ' ' MMMM ' ' yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d ' ' MMMM ' ' yyyy H:mm",
				F: "d ' ' MMMM ' ' yyyy H:mm:ss",
				M: "MMMM dd"
			}
		}
	}
});
