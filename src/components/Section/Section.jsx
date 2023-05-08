import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
