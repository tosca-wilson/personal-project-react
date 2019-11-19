import React from 'react'
import {getPlants} from '../api/plants'

class allPlants extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plants: []
    } 
    this.getPlants()
  }

  getPlants = () => {
    getPlants()
    .then(plants => this.setState({plants: plants}))
  } 

  render(){
    const plants = this.state.plants
    // console.log(plants)
    return (
      <>
        <div className="allPlants">
          <h3>All Plants</h3>
          <ul>
            {plants.map(plant => {
              return <li>{plant.name}</li>
            })}
          </ul>
        </div> 
      </>
    )
  }
}

export default allPlants