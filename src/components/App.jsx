import '../styles/App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NewProject from './projects/NewProject';
import Landing from './Landing';
import { useEffect, useState } from 'react';
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

 useEffect(() => {
  const saveData = localStorage.getItem('formData');
  if(saveData){
    setAllValues(JSON.parse(saveData));
  }
 },[])

  //Get input values
  const handleInputValue = (nameProperty, valueProperty) => {
    const newValues = { ...allValues, [nameProperty]: valueProperty };
    setAllValues(newValues);

    localStorage.setItem('formData', JSON.stringify(newValues));

    console.log(newValues);
  }

  const handleClearForm = () => {
    setAllValues ({
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
    setMessageError('');
    setMessageUrl('');
    localStorage.removeItem('formData')
  };
  
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
          setMessageError('');
        } else {
          setMessageError (data.error)
        }
      })
      .catch(error => {
        console.error('Error en fetch:', error);
        setMessageError('Hubo un problema al crear la tarjeta. Inténtalo de nuevo.');
      });
  };


  return (
    <div className="container">

      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/newproject" element={<NewProject

          handleInputValue={handleInputValue}
          handleClickCreate = {handleClickCreate}
          handleClearForm={handleClearForm}
          messageError={messageError}
          messageUrl={messageUrl}
          allValues={allValues} 
          
          />} />
      </Routes> 


      <Footer />

    </div>
  );
}

export default App;