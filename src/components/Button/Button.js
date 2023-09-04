import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClick }) => (
  <button className={css.Button} type="button" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;