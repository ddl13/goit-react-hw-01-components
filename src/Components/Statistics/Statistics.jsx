import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title = '', data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={css.statList}>
        {data.map(item => {
          return (
            <li key={item.id}>
              <StatisticsItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
