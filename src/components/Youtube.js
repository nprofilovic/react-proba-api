import React from 'react';
import img from '../banner-youtube.jpg';

const API = 'AIzaSyC7QpXWVGr4jfBhRE9xpPnGL6DDURuprkY';
const channelID = 'UC7O6CntQoAI-wYyJxYiqNUg';
const maxResults = 9;

const finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${maxResults}&key=${API}`

//https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC7O6CntQoAI-wYyJxYiqNUg&maxResults=6&key=AIzaSyC7QpXWVGr4jfBhRE9xpPnGL6DDURuprkY
class Youtube extends React.Component {
	constructor(){
		super();

		this.state = {
			resultyt: [],
			titleyt: ""
		};
	}

	componentDidMount(){
		fetch(finalURL)
			.then((response) => response.json())
			.then((responseJson) => {
				this.getVideo(responseJson);
				this.getTitle(responseJson);
			})

			
			.catch((error) => {
			console.error(error);	
			});
	}

	getVideo(responseJson){
		const resultyt = responseJson.items.map((item) => {
					return "https://www.youtube.com/embed/" + item.id.videoId;
		})
			this.setState({resultyt});
	}

	getTitle(responseJson){
		const titleyt = responseJson.items.map((item) => {
					return item.snippet.title;
		})
			this.setState({titleyt});
	}		
	render(){
		console.log(this.state.resultyt);
		console.log(this.state.titleyt);
		return(
			<section className="wrapper style2">
				<div className="banner-youtube">
						<img src={img} />
				</div>
				<div className="inner">
					
					<header>
							<h2>
								Ihatetomatoes
							</h2>
							<p>Great Videos</p>
					</header>
					<div className="flex flex-tabs">
						<div className="tabs">
							<div className="tab  flex flex-3 active">
								
									
									{this.state.resultyt.map((link, i) => {
										let frame = 
										<div key={i}  className="video col" >
											<div className="image fit">
												<iframe  className="youtube"  src={link} frameBorder="0"  allowFullScreen></iframe>
											</div>
											
											})}	
																				
										</div>
										return frame;
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