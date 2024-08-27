import '../styles/App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NewProject from './projects/NewProject';
import Landing from './Landing';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';



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
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/"  element={<NewProject uploadProjectPicture={uploadProjectPicture} handleUploadPicture={handleUploadPicture} />} />
        </Routes>
      </main>

      <Footer />
      
    </div>
  )
}

export default App;