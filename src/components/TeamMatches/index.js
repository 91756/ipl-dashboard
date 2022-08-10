// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class TeamMatches extends Component {
  state = {teamBanner: '', latestMatch: {}, recentMatch: [], isLoader: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatch = data.latest_match_details
    const latestMatchDetails = {
      umpires: latestMatch.umpires,
      result: latestMatch.result,
      manOfTheMatch: latestMatch.man_of_the_match,
      id: latestMatch.id,
      date: latestMatch.date,
      venue: latestMatch.venue,
      competingTeam: latestMatch.competing_team,
      logo: latestMatch.competing_team_logo,
      firstInnings: latestMatch.first_innings,
      secondIng: latestMatch.second_innings,
      matchStatus: latestMatch.match_status,
    }
    const recentMatchDetails = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      logo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondIng: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    console.log(recentMatchDetails)
    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: latestMatchDetails,
      recentMatch: recentMatchDetails,
      isLoader: false,
    })
  }

  renderTeamMatches() {
    const {teamBanner, latestMatch, recentMatch} = this.state
    const {logo} = latestMatch
    return (
      <div className="app-cont">
        <img src={teamBanner} className="banner-img" alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatch} key={latestMatch.id} />
        <ul className="match-card-list">
          {recentMatch.map(eachMatch => (
            <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#FFFFFF" width={50} height={50} />
    </div>
  )

  render() {
    const {isLoader} = this.state
    return (
      <div className="app-cont">
        {isLoader ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
