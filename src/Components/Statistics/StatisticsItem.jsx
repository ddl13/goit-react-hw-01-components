import PropTypes from 'prop-types';

const StatisticsItem = ({ item }) => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div
      style={{
        backgroundColor: randomColor,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </div>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number,
  }),
};

export default StatisticsItem;
