ej.addCulture( "nso-ZA", {
	name: "nso-ZA",
	englishName: "Sesotho sa Leboa (South Africa)",
	nativeName: "Sesotho sa Leboa (Afrika Borwa)",
	language: "nso",
	numberFormat: {
		percent: {
			pattern: ["-%n","%n"]
		},
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Lamorena","Mošupologo","Labobedi","Laboraro","Labone","Labohlano","Mokibelo"],
				namesAbbr: ["Lam","Moš","Lbb","Lbr","Lbn","Lbh","Mok"],
				namesShort: ["La","Mo","Lb","Lr","Ln","Lh","Mk"]
			},
			months: {
				names: ["Janaware","Feberware","Matšhe","Aprele","Mei","June","Julae","Agostose","Setemere","Oktoboro","Nofemere","Disemere",""],
				namesAbbr: ["Jan","Feb","Matš","Apr","Mei","June","Julae","Agost","Set","Oky","Nof","Dis",""]
			},
			AM: ["MS","ms","MS"],
			PM: ["TP","tp","TP"],
			patterns: {
				d: "dd/MM/yy",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt"
			}
		}
	}
});
