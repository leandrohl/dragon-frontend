import './styles.scss';

function Loading () {
  return (
    <div className="loading-overlay" data-testid="loading-overlay">
      <div className="spinner">
        <div className="spinner-circle" data-testid="spinner-circle"></div>
      </div>
    </div>
  );
};

export default Loading;
