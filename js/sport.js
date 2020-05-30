let SportsApi = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1c803bb05534495fb1dbf2e6d77093f8";


//................sports news starts from here...........

//1c803bb05534495fb1dbf2e6d77093f8
window
	.fetch(SportsApi)
	.then(SportsData => {
		SportsData.json()
			.then(sports => {
				let SportsInfo = sports.articles;
				let firstSportsBlock = sports.articles;
				let sportsnewsBlockOne = firstSportsBlock[0];
				document.getElementById("sportsFirstTemplate").innerHTML = `
				<ul>
					
					<a href="${sportsnewsBlockOne.url}" target="_block">
						<li class="text-dark">${sportsnewsBlockOne.title}</li>
					</a>
				</ul>
				`;
				let output = [];
				for (let sport of SportsInfo) {
					//console.log(sport);
					output += `
					<ul class="list-group">							
						<a href="${sports.url}" target="_blank" >
							<li class="text-dark">${sport.title}</li>
						</a>
					</ul>	
					`;
					document.getElementById("sportsAllTemplate").innerHTML = output;
				}
			})
			.catch(err => console.log(err));
	})
	.catch(err => console.log(err));