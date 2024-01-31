// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="faqs-main-bg-container">
        <div className="faqs-card-bg-container">
          <h1 className="heading">FAQs</h1>
          <ul className="question-answer-container">
            {faqsList.map(eachFaq => (
              <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
