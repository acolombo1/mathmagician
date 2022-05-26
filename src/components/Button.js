import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

export default function Button(props) {
  function buttonclick() {
    const { obj, name, liftUp } = props;
    const newobj = calculate(obj, name);
    liftUp(newobj);
  }

  function keypressed() {
    buttonclick();
  }

  const { width, color, name } = props;
  return (
    <div
      className={`button${width} ${color}`}
      onKeyPress={keypressed}
      role="button"
      tabIndex={0}
      onClick={buttonclick}
    >
      { name }
    </div>
  );
}
Button.propTypes = {
  obj: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};
Button.propTypes = { liftUp: PropTypes.func.isRequired };
Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { color: PropTypes.string.isRequired };
Button.propTypes = { width: PropTypes.string };
Button.defaultProps = { width: '' };
