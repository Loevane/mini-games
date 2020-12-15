import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Row, Col, Button, Input } from 'antd';

import Nav from './Nav';

function RandomName() {

  const [liste, setListe] =  useState([]);
  const [lengthListe, setLengthListe] = useState();
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [resultVisible, setResultVisible] = useState(false)
  const [erreur, setErreur] = useState('');

  useEffect(() => {
    var changeList = () => {
        setLengthListe(liste.length);
    }
    changeList();
}, [lengthListe]);

  function onChangeName({ target: { value } }) {
    setName(value)
  }

  function onSubmit(){
    if(name!==''){
      setListe([...liste, name]);
      setName('');
      setErreur('');
      setResultVisible(false);
    }else{
      setErreur('OUPS ! Le champ est vide.');
    }
  }

  function onEnter(event){
    if(event.key==='Enter'){
      onSubmit()
    }
  }

  function randomly() {
    if(liste.length===0){
      setErreur('OUPS! la liste est vide.')
    } else {
      setResult(`Résultat: ${liste[Math.floor(Math.random() * ((liste.length-1) - 0+1) + 0)]}`)
      setResultVisible(true);
      setErreur("");
    }
  }

  function onClickDelete(i){
    console.log(i);
    liste.splice(i, 1)
    setLengthListe(lengthListe-1)
  }


  return (
    <div className="one">

      
      <Row justify='space-between'>

        <Col sm={24} md={4} className='navPosition'>
          <Nav/>
        </Col>

        <Col sm={20} md={12} style={{width: '100%'}}>
          <h1>Random</h1>
        </Col>

        <Col sm={24} md={4}>
          <div className='display'>

            <Link to='/random-nombre'>
              <div className='choice'>
                <p>Nombres</p>
              </div>
            </Link>

            <div className='choice' style={{opacity:'50%'}}>
              <p>Noms</p>
            </div>

          </div>
          
        </Col>

      </Row>

      <Row justify='center'>
        <div className='precision'>
          <p className='principe'>Entrez les noms de votre choix. Ensuite, cliquer sur "Lancer" pour obtenir un résultat aléatoire de cette liste.<br/>Vous pouvez réalisez la même chose avec un nombre tiré alétoirement en cliquant en haut à droite sur "nombres".</p>
        </div>
      </Row>

      <Row justify='start' align='middle'>

        <Col sm={24} md={6} style={{width: '100%'}}>
          {liste.map((name,i)=>(
            <div key={i} className='names'>
              <p>{name}</p>
              <svg onClick={()=>onClickDelete(i)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <path d="M10 10l4 4m0 -4l-4 4" />
              </svg> 
            </div>
          ))}
        </Col>

        <Col sm={24} md={12} className='colName'>
            <p>Entrez les noms :</p>
            <Input.Group compact>
              <Input placeholder="Nom" onChange={onChangeName} value={name} onKeyUp={onEnter}  style={{width:'300px', height: '40px', borderRadius: '20px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}/>   
              <Button className='button1' onClick={onSubmit} style={{borderRadius: '20px', height: '40px'}}>Ajouter</Button> 
            </Input.Group>
            <p style={{color: 'red', marginTop: '15px'}}>{erreur}</p>
        </Col>

      </Row>

      <Row justify='center'>
        <Button className='button2' onClick={randomly}>Lancer</Button>
      </Row>

      {resultVisible
      ?<Row justify='center'>
        <div className='containResult'>
          <p className='result'>{result}</p>
        </div>
      </Row>
      : null}

    </div>
  );
}

export default RandomName;
