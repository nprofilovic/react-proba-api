import React from 'react';


const API = 'AIzaSyC7QpXWVGr4jfBhRE9xpPnGL6DDURuprkY';
const channelID = 'UC7O6CntQoAI-wYyJxYiqNUg';
const maxResults = 6;

const finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${maxResults}&key=${API}`

//https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC7O6CntQoAI-wYyJxYiqNUg&maxResults=6&key=AIzaSyC7QpXWVGr4jfBhRE9xpPnGL6DDURuprkY
class Youtube extends React.Component {
	constructor(){
		super();

		this.state = {
			data: [],

		};
	}

	componentDidMount(){
		fetch(finalURL)
			.then((response) => response.json())
			.then((responseJson) => {
				this.getData(responseJson);

			})


			.catch((error) => {
			console.error(error);
			});
	}
	getData(responseJson){
		const data = responseJson.items.map((item) => {
			return item
		})
		this.setState({data})
	}


	render(){
		console.log(this.state.data);

		return(
			<section className="wrapper style2">
				<div className="banner-youtube">

				</div>
				<div className="inner">

					<header>
							<h2>
								Ihatetomatoes
							</h2>
							<p>Great Videos</p>
					</header>
					<div className="flex flex-3">
						<div className="tabs">
							<div className="tab  flex flex-3 active">
								{this.state.data.map((vid, i) => {
										return(
											<div key={i} className="video col">
												<div className="image fit">
													<iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${vid.id.videoId}`} frameBorder="0" ></iframe>
													<p key={i} className="caption">{vid.snippet.title}</p>
												</div>
											</div>

										);
									})}
							</div>
						</div>
					</div>
				</div>
				{this.frame}
			</section>
		);
	}
}

export default Youtube;
