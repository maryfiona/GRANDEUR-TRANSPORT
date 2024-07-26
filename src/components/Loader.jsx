import Load from '../assets/Loading.gif'
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader_bg">
      <div className="loader">
        <img src={Load} alt="Loading page" />
      </div>
    </div>
  );
};

export default Loader;
