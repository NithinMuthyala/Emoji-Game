/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameInProgress: true, emojisidList: [], score: 0, TopScore: 0}

  playagainBtn = () => {
    const {score, TopScore} = this.state
    this.setState({
      isGameInProgress: true,
      score: 0,
      TopScore: TopScore > score ? TopScore : score,
      emojisidList: [],
    })
  }

  renderwinorloss = () => {
    const {score, emojisidList, isGameInProgress} = this.state
    const {emojisList} = this.props
    const isWin = score === emojisList.length

    return (
      <WinOrLoseCard
        isWin={isWin}
        score={score}
        playagainBtn={this.playagainBtn}
      />
    )
  }

  //   renderwinorloss = () => <WinOrLoseCard />

  scoreCard = id => {
    const {emojisidList, score} = this.state
    const {emojisList} = this.props
    if (emojisidList.includes(id)) {
      this.setState(prevState => ({
        isGameInProgress: !prevState.isGameInProgress,
      }))
    } else {
      if (emojisidList.length === emojisList.length - 1) {
        this.setState(prevState => ({
          isGameInProgress: !prevState.isGameInProgress,
        }))
      }
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojisidList: [...prevState.emojisidList, id],
      }))
    }

    // if (emojisList.length - 1 === emojisidList.length) {
    //   this.setState(prevState => ({
    //     isGameInProgress: !prevState.isGameInProgress,
    //   }))
    // }
    // if (emojisidList.includes(id)) {
    //   this.setState(prevState => ({
    //     isGameInProgress: !prevState.isGameInProgress,
    //   }))
    // }
    //  else {
    //   this.setState(prevState => ({
    //     emojisidList: [...prevState.emojisidList, id],
    //     score: prevState.score + 1,
    //   }))
    // }

    // // console.log(score)
    // // console.log(id)
    // // console.log(emojisidList)
  }

  shuffledEmojiImage = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderemojipage = () => {
    const shuffledemojis = this.shuffledEmojiImage()

    return (
      <ul className="emoji-flex-container">
        {shuffledemojis.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            eachEmoji={eachEmoji}
            scoreCard={this.scoreCard}
          />
        ))}
      </ul>
    )
  }

  render() {
    // const {emojisList} = this.props
    const {isGameInProgress, score, TopScore} = this.state
    return (
      <div className="main-container">
        <div className="emoji-game-container">
          <div className="nav-container">
            <NavBar
              score={score}
              TopScore={TopScore}
              isGameInProgress={isGameInProgress}
            />
          </div>
          <div className="cards-container">
            {isGameInProgress ? this.renderemojipage() : this.renderwinorloss()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
