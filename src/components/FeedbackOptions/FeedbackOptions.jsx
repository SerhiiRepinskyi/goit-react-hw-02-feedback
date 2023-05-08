import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => {
          return (
            <Button
              type="button"
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
