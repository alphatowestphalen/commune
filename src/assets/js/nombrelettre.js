function Unite( nombre ){
	let unite;
	switch( nombre ){
		case 0: unite = "aotra";	break;
		case 1: unite = "iraika";	break;
		case 2: unite = "roa";		break;
		case 3: unite = "telo"; 	break;
		case 4: unite = "efatra"; 	break;
		case 5: unite = "dimy"; 	break;
		case 6: unite = "enina"; 	break;
		case 7: unite = "fito"; 	break;
		case 8: unite = "valo"; 	break;
		case 9: unite = "sivy"; 	break;
	}
	return unite;
}

function Dizaine( nombre ){
	let dizaine;
	switch( nombre ){
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

function Centaine( nombre ){
	let centaine;
	switch( nombre ){
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

function NombreEnLettre(nombre){
	let i, j, n, quotient, reste, nb ;
	let ch
	let numberToLettre='';
	//__________________________________
	
	if(  nombre.toString().replace( / /gi, "" ).length > 15  )	return "dépassement de capacité";
	if(  isNaN(nombre.toString().replace( / /gi, "" ))  )		return "Nombre non valide";

	nb = parseFloat(nombre.toString().replace( / /gi, "" ));
	if(  Math.ceil(nb) != nb  )	return  "Nombre avec virgule non géré.";
	
	n = nb.toString().length;
	switch( n ){
		 case 1: numberToLettre = Unite(nb); break;
		 case 2: if(  nb > 19  ){
					   quotient = Math.floor(nb / 10);
					   reste = nb % 10;
					   if(  nb < 100)  {
							 if(  reste == 0  ) numberToLettre = Dizaine(quotient * 10);
							 if(  reste >= 1   ) numberToLettre = Unite(reste)+ " amby " + Dizaine(quotient * 10)  ;
					   }else numberToLettre = Dizaine((quotient - 1) * 10) + "-" + Dizaine(10 + reste);
				 }else numberToLettre = Dizaine(nb);
				 break;
		 case 3: quotient = Math.floor(nb / 100);
				 reste = nb % 100;
				
				 if(  quotient == 1 && reste == 0   ) numberToLettre = "zato";
				 if(  quotient == 1 && reste == 1  ) numberToLettre = " iraika amby zato";
				 if(  quotient == 1 && reste != 1  ) numberToLettre = NombreEnLettre(reste) + " " + "amby zato" ;
				 if(  quotient > 1 && reste == 0    ) numberToLettre = Centaine(quotient *100);
				 if(  quotient > 1 && reste != 0    ) numberToLettre = NombreEnLettre(reste) + " sy " +  Centaine(quotient*100) ;
				 
				 break; 
		 case 4 :  quotient = Math.floor(nb / 1000);
					  reste = nb - quotient * 1000;
					  if(  quotient == 1 && reste == 0   ) numberToLettre = "arivo";
					  if(  quotient == 1 && reste != 0   ) numberToLettre =  NombreEnLettre(reste) + " sy arivo";
					  if(  quotient > 1 && reste == 0    ) numberToLettre = NombreEnLettre(quotient) + " sy arivo";
					  if(  quotient > 1 && reste != 0    ) numberToLettre =  NombreEnLettre(reste) + " sy " + NombreEnLettre(quotient)  + " arivo " ;
					  break;
 }

	 return numberToLettre;
}

function MoisMalgache( nombre ){
	let moismalgache;
	switch( nombre ){
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
		
	}//fin switch
	return moismalgache;
}