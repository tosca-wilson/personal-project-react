import React from 'react'
import {getPlants} from '../api/plants'

class CurrentMonth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        backgroundColor: 'blue',
      },
      plants: []
    } 
    this.getPlants()
  }

    //componentDidMount(){
    //  get current month form external api call and set state({ currentMonth })
    //}

  getPlants = () => {
    getPlants()
    .then(plants => this.setState({plants: plants}))
  } 

  render(){
    const plants = this.state.plants
    console.log(plants)
    return (
      <>
        <div className="currentMonth">
          <h3>This month..</h3>
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

export default CurrentMonth