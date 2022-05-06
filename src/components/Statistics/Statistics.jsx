import PropTypes from "prop-types";
import { StatsList } from "./Statistics.styled";

const Statistics  = ({ good, neutral, bad, total, positivePercentage}) => (
        <StatsList >
            <li><span>Good:</span> {good}</li>
            <li><span>Neutral:</span> {neutral}</li>
            <li><span>Bad:</span> {bad}</li>
            <li><span>Total:</span> {total}</li>
            <li><span>Positive feedback:</span> {positivePercentage}%</li>
        </StatsList>
);

Statistics.prototypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;