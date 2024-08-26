import '../styles/App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NewProject from './projects/NewProject';
import Landing from './Landing';
import Form from './form/Form';


function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>

      <main className="main">

        <Landing />
        <NewProject />

        <Form />

      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default App;
