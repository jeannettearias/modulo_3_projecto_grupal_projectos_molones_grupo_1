import '../styles/App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NewProject from './projects/NewProject';

function App() {
  return (
    <div className="container">

        <Header />
        <NewProject />
        <Footer />

    </div>
  )
}

export default App;
