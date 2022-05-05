import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";

export class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = ((good / total) * 100).toFixed(2);
    return positiveFeedback;
  };
    
    onLeaveFeedback = type => {
        this.setState(prevState => ({
          [type]: prevState[type]+1,
        }));
    };

  
  render() {
    const { good, neutral, bad } = this.state;
    return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section>
        </div>
      )
    }
}




