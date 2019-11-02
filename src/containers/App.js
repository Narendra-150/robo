import React, { Component } from 'react';
import 'tachyons';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots:users}))
	}

	onSerachChange = (event) => {
		this.setState({searchfield: event.target.value })
		}

	render() {
		const fileredRobo=this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length ===0){
			return <h1 className='tc'>Loading....</h1>
		}else{
				return (
					<div className='tc'>
						<h1 className='f1'>Robo-Friends</h1>
						<SearchBox searchChange={this.onSerachChange}/>
						<Scroll>
							<CardList robots={fileredRobo} />
						</Scroll>
					</div>
					);}
		}
}

export default App;