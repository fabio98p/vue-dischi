Vue.config.devtools = true;
document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');
	//https://flynn.boolean.careers/exercises/api/random/mail
	var root = new Vue(
		{
			el: '#root',
			data: {
				titolo: "generatore di email da un posto random",
				arrayApi: []
			},
			methods: {
				//rubatissimo dal mio progetto lista cognomi
				ordinamentoArray: function (array, realArray) {
					//variabili che servono all'interno del for per il corretto funzionamento
					var x = 0
					var temp = ""

					//for che inizia i ciclo per quanto l'arrey è lungo
					for (let i = 0; i < array.length; i++) {
						//while che controlla se il cognome precedente è "maggiore" di quello attuale, nel caso la condizione sia vera entra nel while
						while (array[i - x] < array[i - x - 1]) {
							//uso la variabile temporanea(temp) per conservare il dato che poi andro a sostituire nel arrey
							temp = array[i - x - 1]
							//sostituzione effettiva dei dati
							array[i - x - 1] = array[i - x]
							array[i - x] = temp
							//aggiornamento della x per fare in modo che non solo venga sostituito il cognome con quello precedente ma anche che questa operazione si ripeta finche il cognome non arriva nella posizione ideale

							//stessa cosa ma per l'array interessato
							temp = realArray[i - x - 1]
							realArray[i - x - 1] = realArray[i - x]
							realArray[i - x] = temp

							x++
						}
						//reset della variabile x in modo che possa essere riutilizzata nel while
						x = 0
					}
					realArray.reverse()
					return realArray
				}
			},
			computed: {
				arrayOrderedForData: function () {
					const array = []
					
					var newArrayApi = this.arrayApi
					if (this.arrayApi.length != 0) {
						for (let i = 0; i < this.arrayApi.length; i++) {
							array.push(this.arrayApi[i].year);
						}
						newArrayApi = this.ordinamentoArray(array, newArrayApi)
					}
					console.log(newArrayApi);
					return newArrayApi
				}
			},

			created: function () {
				axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((response) => {
					this.arrayApi = response.data.response
					console.log(this.arrayApi)
				});

			}
		}
	);
});