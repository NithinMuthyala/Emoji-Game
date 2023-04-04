// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, TopScore, isGameInProgress} = props
  console.log(isGameInProgress)
  const conatinerClass = isGameInProgress ? 'score-container' : 'displaynone'

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        {isGameInProgress ? <p className="score-card">Score: {score}</p> : ''}
        {isGameInProgress ? (
          <p className="totalscore">Top Score: {TopScore}</p>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}

export default NavBar
