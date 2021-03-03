import './styles/reset.scss';
import './styles/general.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Waves from './components/Waves/Waves';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Waves/>
    </>
  );
}
export default App;
