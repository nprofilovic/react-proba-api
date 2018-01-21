import React from 'react';


const apiUrl = 'http://www.bros-jeans.com/wp-json/wp/v2/media';

class Wordpress extends React.Component {
  constructor(){
    super();

    this.state = {
      data: [],


      }
  }
  fatchData = async() => {
    const response = await
    fetch(apiUrl);

    const posts = await response.json();

    this.setState({data: posts});
  }
  componentDidMount(){
		this.fatchData();
	}



  render(){
    console.log(this.state.data);
    return(
      <div>
        <section className="wrapper style2">

  				<div className="inner">

  					<header className="align-center">
  							<h2>
  								Wordpress Posts
  							</h2>
  							<p>Great Posts</p>
  					</header>
  					<div className="flex flex-3">
  						<div className="tabs">
  							<div className="tab  flex flex-3 active">
                  {this.state.data.map((item, i) => {
                    return (
                      <div key={i} className="video col" >
                        <div className="image fit">
                          <img src={item.source_url} width="400" height="300" alt={item.title.rendered} />
                          <p className="caption title">{item.title.rendered}</p>
                        </div>
                      </div>
                    );
                  })}
  							</div>
  						</div>
  					</div>
  				</div>

  			</section>
      </div>
    );
  }
}

export default Wordpress;
