import './index.css'

const WinOrLoseCard = props => {
  const {isWin, score, playagainBtn} = props
  const playAgainButton = () => {
    playagainBtn()
  }
  const imagesArray = [
    'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
  ]
  const image = isWin ? imagesArray[0] : imagesArray[1]
  const wintlosstext = isWin ? 'Won' : 'Lose'
  const text = isWin ? 'Best Score' : 'Score'
  return (
    <div className="win-or-loss-container">
      <div className="image-container">
        <img src={image} alt="win or lose" className="image-win-or-loss" />
      </div>
      <div className="footer-card">
        <h1 className="win-or-loss-heading">You {wintlosstext}</h1>
        <div>
          <p className="score-heading">{text}</p>
          <p className="score-value">{score}/12</p>
        </div>
        <button
          type="button"
          className="play-again-btn"
          onClick={playAgainButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
