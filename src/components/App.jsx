import '../styles/App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NewProject from './projects/NewProject';
import Landing from './Landing';
import Form from './form/Form';
import { useState } from 'react';



function App() {

  //Global variables
  const [uploadProjectPicture, setUploadProjectPicture] = useState('');


  //Upload pictures 
  const handleUploadPicture = (uploadProjectPicture) => {
    setUploadProjectPicture(uploadProjectPicture);
    console.log(uploadProjectPicture);
  }


  return (
    <div className="container">

      <Header />

      <main className="main">
        <Landing />
        <NewProject />
        <Form uploadProjectPicture={uploadProjectPicture} handleUploadPicture={handleUploadPicture} />
      </main>

      <Footer />
      
    </div>
  )
}

export default App;