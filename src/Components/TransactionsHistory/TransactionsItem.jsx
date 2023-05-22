import PropTypes from 'prop-types';

const TransactionItem = ({ item }) => {
  return (
    <>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
