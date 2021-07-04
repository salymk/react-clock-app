import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote';
import Time from './components/Time';
import MoreInfo from './components/MoreInfo';

function App() {
  return (
    <main className="app-container">
      <Quote />
      <section>
        <Time />
        <MoreInfo />
      </section>
    </main>
  );
}

export default App;
