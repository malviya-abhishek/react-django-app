import 'antd/dist/antd.css';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomLayout from './containers/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
