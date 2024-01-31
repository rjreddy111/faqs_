// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  onShowOrNot = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  displayAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {showAnswer} = this.state

    if (showAnswer) {
      return (
        <div>
          <hr />
          <p className="answer-text ">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {showAnswer} = this.state
    console.log(showAnswer)
    const {faqDetails} = this.props
    const buttonSign = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const buttonSignAltText = showAnswer ? 'minus' : 'plus'
    const {questionText} = faqDetails
    console.log(buttonSignAltText)
    return (
      <li className="each-question-answer-container">
        <div className="each-question">
          <h2 className="question-text">{questionText}</h2>
          <button
            className="button-style"
            onClick={this.onShowOrNot}
            type="button"
          >
            <img
              src={buttonSign}
              className="button-image-style"
              alt={buttonSignAltText}
            />
          </button>
        </div>

        {this.displayAnswer()}
      </li>
    )
  }
}

export default FaqItem
