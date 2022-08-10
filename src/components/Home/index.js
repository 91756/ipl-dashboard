// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoader: true}

  componentDidMount() {
    this.getTeamPlayersData()
  }

  getTeamPlayersData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImgUrl: eachItem.team_image_url,
    }))

    console.log(updatedData)
    this.setState({teamData: updatedData, isLoader: false})
  }

  renderIPLMatch() {
    const {teamData} = this.state
    return (
      <ul className="team-card-list">
        {teamData.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader
        type="TailSpin"
        color="#FFFFFF"
        width={50}
        height={50}
        testid="loader"
      />
    </div>
  )

  render() {
    const {isLoader} = this.state
    return (
      <div className="home-container">
        <div className="logo-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="logo-img"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoader ? this.renderLoader() : this.renderIPLMatch()}
      </div>
    )
  }
}

export default Home
