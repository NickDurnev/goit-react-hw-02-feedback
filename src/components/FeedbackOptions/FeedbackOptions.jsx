import PropTypes from "prop-types";
import { ButtonList, Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const [ good, neutral, bad ] = options;
    return (
        <ButtonList>
            <li><Button type="button" onClick={() => onLeaveFeedback(good)}>Good</Button></li>
            <li><Button type="button" onClick={() => onLeaveFeedback(neutral)}>Neutral</Button></li>
            <li><Button type="button" onClick={() => onLeaveFeedback(bad)}>Bad</Button></li>
        </ButtonList>
)};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;