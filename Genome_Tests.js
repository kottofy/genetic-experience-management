var Genome = require('./Genome');

var genomeConfig = '{\
						"headerFontFamily" : ["Lobster", "Raleway", "Allerta", "Arvo", "Dancing Script", "Allan", "Molengo", "Droid Serif", "Corben", "Ubuntu", "Bree Serif", "Bevan", "Abril Fatface", "Playfair Display", "Sansita One", "Istok Web", "Pacifico", "Nixie One", "Cantata One", "Rancho"],\
						"paragraphFontFamily" : ["Cabin", "Goudy Bookletter 1911", "Crimson Text", "PT Sans", "Josefin Sans", "Lekton", "Molengo", "Droid Sans", "Nobile", "Vollkorn", "Open Sans", "Pontano Sans", "Average", "Muli", "Kameron", "Lora", "Arimo", "Ledger", "Imprima", "Gudea"],\
						"headerColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"],\
						"paragraphColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"],\
						"backgroundColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"]\
					}';

var genome = new Genome(genomeConfig);
genome.printGenome();
