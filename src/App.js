import './App.css';
import Navigation from './component/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import 'react-tooltip/dist/react-tooltip.css'
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  return (
    <div className="App">
      <Navigation />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored" />
    </div>
  );
}

export default App;
