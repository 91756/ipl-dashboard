// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    logo,
    firstInnings,
    secondIng,
    matchStatus,
  } = latestMatchDetails
  return (
    <div className="latest-details">
      <p className="title">Latest Matches</p>
      <div className="details1">
        <div className="details">
          <div className="title-details">
            <p className="team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="text">{venue}</p>
            <p className="text">{result}</p>
            <p className="text">{manOfTheMatch}</p>
          </div>
          <img
            src={logo}
            className="img"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="line" />
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondIng}</p>
          <p>Man Of The Match</p>
          <p>{matchStatus}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
