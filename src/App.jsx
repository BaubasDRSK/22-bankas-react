import './App.scss';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="main-header">
      <Header/>
      </header>
      <div className="main-footer-wrapp">
        <main>
        
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
