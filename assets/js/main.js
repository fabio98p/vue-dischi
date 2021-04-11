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
				emailList: function () {
					axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((response) => {
						this.arrayApi = response.data.response
						console.log(this.arrayApi)
					});
				}
			},

		}
	);
});