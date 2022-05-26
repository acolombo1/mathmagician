import PropTypes from 'prop-types';

export default function Screen(props) {
  const { obj } = props;
  let numbertoshow = 0;
  if (obj.next !== null) {
    numbertoshow = obj.next;
  } else if (obj.total !== null) { numbertoshow = obj.total; }
  return (
    <div className="screen">{numbertoshow}</div>
  );
}
Screen.propTypes = {
  obj: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};
