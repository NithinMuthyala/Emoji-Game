// Write your code here.
import './index.css'

const EmojiGame = props => {
  const {eachEmoji, scoreCard} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const emojiClicked = () => {
    scoreCard(id)
  }

  return (
    <li className="emoji-bg-container">
      <button type="button" onClick={emojiClicked} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiGame
