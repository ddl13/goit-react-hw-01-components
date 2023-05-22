import css from './TransactionsHistory.module.css';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionsItem';

const TransactionsHistory = ({ items }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <table className={css.transaction}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id}>
                <TransactionItem item={item} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ),
};

export default TransactionsHistory;
