import '../styles/App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NewProject from './projects/NewProject';
import Landing from './Landing';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';




function App() {

  //Global variables

  const [allValues, setAllValues] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    photo: '',
    image: '',
  });

  const [messageUrl, setMessageUrl] = useState(''); 
  const [messageError, setMessageError] = useState('');

  //Get input values
  const handleInputValue = (nameProperty, valueProperty) => {
    const newValues = { ...allValues, [nameProperty]: valueProperty };
    setAllValues(newValues);

    console.log(newValues);
  }
  
  const handleClickCreate = () => {

    fetch('https://dev.adalab.es/api/projectCard', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allValues)
    })
      .then(response => response.json())
      .then(data => {
        console.log('respuesta', data)
        if (data.success) {
          console.log('respuesta', data)
          setMessageUrl(
            <div> 
              Tarjeta creada. URL:
              <a className='link_create_card' href={data.cardURL} target="_blank"> {data.cardURL}</a>
            </div>
          );
        } else {
          setMessageError (data.error)
        }


      })
  };


  return (
    <div className="container">

      <Header />
      <Routes>
        <Route path="/landing" element={<Landing />} />

        <Route path="/" element={<NewProject

          handleInputValue={handleInputValue}
          messageError={messageError}
          messageUrl={messageUrl}
          handleClickCreate = {handleClickCreate}

          allValues={allValues} 
          
          />} />
      </Routes> 


      <Footer />

    </div>
  );
}

export default App;