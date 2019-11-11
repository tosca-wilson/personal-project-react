import React from 'react'

class CurrentMonth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        backgroundColor: 'blue',
      }
    }
  }

  render(){
    return (
      <>
        <div className="currentMonth">
          <h3>This month..</h3>
          <ul>
            <li>Lettuce</li>
            <li>Tomato</li>
            <li>Pumpkin</li>
            <li>Beans</li>
            <li>Beetroot</li>
          </ul>
        </div> 
      </>
    )
  }
}

export default CurrentMonth