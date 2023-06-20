function Unite(nombre) {
	let unite;
	switch (nombre) {
		case 0: unite = "aotra"; break;
		case 1: unite = "iraika"; break;
		case 2: unite = "roa"; break;
		case 3: unite = "telo"; break;
		case 4: unite = "efatra"; break;
		case 5: unite = "dimy"; break;
		case 6: unite = "enina"; break;
		case 7: unite = "fito"; break;
		case 8: unite = "valo"; break;
		case 9: unite = "sivy"; break;
	}
	return unite;
}

function Dizaine(nombre) {
	let dizaine;
	switch (nombre) {
		case 10: dizaine = "folo"; break;
		case 11: dizaine = "iraika ambin'ny folo"; break;
		case 12: dizaine = "roa ambin'ny folo"; break;
		case 13: dizaine = "telo ambin'ny folo"; break;
		case 14: dizaine = "efatra ambin'ny folo"; break;
		case 15: dizaine = "dimy ambin'ny folo"; break;
		case 16: dizaine = "enina ambin'ny folo"; break;
		case 17: dizaine = "fito ambin'ny folo"; break;
		case 18: dizaine = "valo ambin'ny folo"; break;
		case 19: dizaine = "sivy ambin'ny folo"; break;
		case 20: dizaine = "roapolo"; break;
		case 30: dizaine = "telopolo"; break;
		case 40: dizaine = "efapolo"; break;
		case 50: dizaine = "dimapolo"; break;
		case 60: dizaine = "enimpolo"; break;
		case 70: dizaine = "fitopolo"; break;
		case 80: dizaine = "valopolo"; break;
		case 90: dizaine = "sivifolo"; break;
	}//fin switch
	return dizaine;
}

function Centaine(nombre) {
	let centaine;
	switch (nombre) {
		case 100: centaine = "zato"; break;
		case 200: centaine = "roan-jato"; break;
		case 300: centaine = "telon-jato"; break;
		case 400: centaine = "efan-jato"; break;
		case 500: centaine = "diman-jato"; break;
		case 600: centaine = "enin-jato"; break;
		case 700: centaine = "fiton-jato"; break;
		case 800: centaine = "valon-jato"; break;
		case 900: centaine = "sivin-jato"; break;

	}//fin switch
	return centaine;
}

function NombreEnLettre(nombre) {
	let i, j, n, quotient, reste, nb;
	let ch
	let numberToLettre = '';
	//__________________________________

	if (nombre.toString().replace(/ /gi, "").length > 15) return "dépassement de capacité";
	if (isNaN(nombre.toString().replace(/ /gi, ""))) return "Nombre non valide";

	nb = parseFloat(nombre.toString().replace(/ /gi, ""));
	if (Math.ceil(nb) != nb) return "Nombre avec virgule non géré.";

	n = nb.toString().length;
	switch (n) {
		case 1: numberToLettre = Unite(nb); break;
		case 2: if (nb > 19) {
			quotient = Math.floor(nb / 10);
			reste = nb % 10;
			if (nb < 100) {
				if (reste == 0) numberToLettre = Dizaine(quotient * 10);
				if (reste >= 1) numberToLettre = Unite(reste) + " amby " + Dizaine(quotient * 10);
			} else numberToLettre = Dizaine((quotient - 1) * 10) + "-" + Dizaine(10 + reste);
		} else numberToLettre = Dizaine(nb);
			break;
		case 3: quotient = Math.floor(nb / 100);
			reste = nb % 100;

			if (quotient == 1 && reste == 0) numberToLettre = "zato";
			if (quotient == 1 && reste == 1) numberToLettre = " iraika amby zato";
			if (quotient == 1 && reste != 1) numberToLettre = NombreEnLettre(reste) + " " + "amby zato";
			if (quotient > 1 && reste == 0) numberToLettre = Centaine(quotient * 100);
			if (quotient > 1 && reste != 0) numberToLettre = NombreEnLettre(reste) + " sy " + Centaine(quotient * 100);

			break;
		case 4: quotient = Math.floor(nb / 1000);
			reste = nb - quotient * 1000;
			if (quotient == 1 && reste == 0) numberToLettre = "arivo";
			if (quotient == 1 && reste != 0) numberToLettre = NombreEnLettre(reste) + " sy arivo";
			if (quotient > 1 && reste == 0) numberToLettre = NombreEnLettre(quotient) + " sy arivo";
			if (quotient > 1 && reste != 0) numberToLettre = NombreEnLettre(reste) + " sy " + NombreEnLettre(quotient) + " arivo ";
			break;
	}

	return numberToLettre;
}

function MoisMalgache(nombre) {
	let moismalgache;
	switch (nombre) {
		case "01": moismalgache = "janoary"; break;
		case "02": moismalgache = "febroary"; break;
		case "03": moismalgache = "martsa"; break;
		case "04": moismalgache = "aprily"; break;
		case "05": moismalgache = "may"; break;
		case "06": moismalgache = "jiona"; break;
		case "07": moismalgache = "jolay"; break;
		case "08": moismalgache = "aogositra"; break;
		case "09": moismalgache = "septambra"; break;
		case "10": moismalgache = "oktobra"; break;
		case "11": moismalgache = "novambra"; break;
		case "12": moismalgache = "desambra"; break;

	}
	return moismalgache;
}

function HeureMalgache(nombre) {
	let heuremalgache;
	switch (nombre) {
		case "00": heuremalgache = "roa ambin'ny folo"; break;
		case "01": heuremalgache = "iray"; break;
		case "02": heuremalgache = "roa"; break;
		case "03": heuremalgache = "telo"; break;
		case "04": heuremalgache = "efatra"; break;
		case "05": heuremalgache = "dimy"; break;
		case "06": heuremalgache = "enina"; break;
		case "07": heuremalgache = "fito"; break;
		case "08": heuremalgache = "valo"; break;
		case "09": heuremalgache = "sivy"; break;
		case "10": heuremalgache = "folo"; break;
		case "11": heuremalgache = "iraika amin'ny folo"; break;
		case "12": heuremalgache = "roa ambin'ny folo"; break;

	}
	return heuremalgache;
}
function HeureMalgaches(nombre) {
	let heuremalgaches;
	switch (nombre) {
		case "13": heuremalgaches = "iray"; break;
		case "14": heuremalgaches = "roa"; break;
		case "15": heuremalgaches = "telo"; break;
		case "16": heuremalgaches = "efatra"; break;
		case "17": heuremalgaches = "dimy"; break;
		case "18": heuremalgaches = "enina"; break;
		case "19": heuremalgaches = "fito"; break;
		case "20": heuremalgaches = "valo"; break;
		case "21": heuremalgaches = "sivy"; break;
		case "22": heuremalgaches = "folo"; break;
		case "23": heuremalgaches = "iraika amin'ny folo"; break;


	}
	return heuremalgaches;
}

function HeureEnLettre(nombre){
	let heurelettre = "";
	nb = parseFloat(nombre.toString().replace(/ /gi, ""));
	n = nb.toString().length;
	if ( 1 <= nb && nb <= 9  ){
		
		heurelettre = HeureMalgache(nombre)+" ora";
		return heurelettre;
	}
	else if(10 <= nombre && nombre <= 12 ){
		
		heurelettre = HeureMalgache(nombre)+" ora";
		return heurelettre;
	}
	else if(13<= nombre && nombre <= 16){
		
		heurelettre = HeureMalgaches(nombre)+" ora";
		return heurelettre;

	}
	else if (17 <= nombre && nombre <= 19){
		
		heurelettre = HeureMalgaches(nombre)+" ora";
		return heurelettre;
	}
	else {
		
			heurelettre = HeureMalgaches(nombre)+" ora";
			return heurelettre;

		}

}


function MinuteEnlettre(nombre) {
	let MinuteEnlettre = "";
	nb = parseFloat(nombre.toString().replace(/ /gi, ""));
	n = nb.toString().length;
	switch (n) {
		case 1:
			if(nb == 0){
				MinuteEnlettre = " ";
			} 
			else MinuteEnlettre = " sy " + Unite(nb); break;
		case 2: if (nb > 19) {
			quotient = Math.floor(nb / 10);
			reste = nb % 10;
			if (nb < 100) {
				if (reste == 0) {
					minute = quotient * 10;
					if(minute == 10) MinuteEnlettre = " sy " + Dizaine(minute); 
					if(minute == 20) MinuteEnlettre =  " sy fahahefany"; 
					if(minute == 30) MinuteEnlettre = " sy sasany"; 
					if(minute == 40) MinuteEnlettre = " sy " +Dizaine(minute);
					if(minute == 50) MinuteEnlettre = " sy " +Dizaine(minute);
				}
				if (reste >= 1) MinuteEnlettre = " sy " + Unite(reste) + " amby " + Dizaine(quotient * 10);
			} 
			else MinuteEnlettre = " sy " + Dizaine((quotient - 1) * 10) + "-" + Dizaine(10 + reste); break;
		} 
		else MinuteEnlettre = " sy " + Dizaine(nb);break;
	}
	return MinuteEnlettre;
}


function LeraEnLettre(nombre){
	let heurelettre = "";
	nb = parseFloat(nombre.toString().replace(/ /gi, ""));
	n = nb.toString().length;
	if ( 1 <= nb && nb <= 9  ){
		
		heurelettre = " maraina";
		return heurelettre;
	}
	else if(10 <= nombre && nombre <= 12 ){
		
		heurelettre = " atoandro";
		return heurelettre;
	}
	else if(13<= nombre && nombre <= 16){
		
		heurelettre = " tolakandro";
		return heurelettre;

	}
	else if (17 <= nombre && nombre <= 19){
		
		heurelettre = " hariva";
		return heurelettre;
	}
	else {
		
			heurelettre = HeureMalgaches(nombre)+" alina";
			return heurelettre;

		}

}
