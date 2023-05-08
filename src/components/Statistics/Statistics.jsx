import PropTypes from 'prop-types';
import { StatisticList, StcItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList>
      <StcItem>Good: {good}</StcItem>
      <StcItem>Neutral: {neutral}</StcItem>
      <StcItem>Bad: {bad}</StcItem>
      <StcItem>Total: {total}</StcItem>
      <StcItem>Positive feedback: {positivePercentage}%</StcItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
