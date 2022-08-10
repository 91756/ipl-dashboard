// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
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
  } = matchCardDetails
  const classSty = matchStatus === 'Won' ? 'win-class' : 'lost-class'

  return (
    <li className="match-card-item">
      <img
        src={logo}
        className="logo-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="result">{manOfTheMatch}</p>
      <p className={classSty}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
