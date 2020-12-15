import {useState} from 'react'
import {Link} from 'react-router-dom';
import { Row, Col, Button, InputNumber } from 'antd';

import Nav from './Nav';


function RandomNum() {

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(50);
  const [result, setResult] = useState('');
  const [resultVisible, setResultVisible] = useState(false)

  function onChangeMin(value) {
    console.log('changed', value);
    setMin(value);
    setResultVisible(false);
  }

  function onChangeMax(value) {
    setMax(value);
    setResultVisible(false);
  }
  
  function randomly() {
    setResult(`Résultat: ${Math.floor(Math.random() * (max - min+1) + min)}`);
    setResultVisible(true);
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

            <div className='choice' style={{opacity:'50%'}}>
              <p>Nombres</p>
            </div>

            <Link to='/random-nom'>
              <div className='choice'>
                <p>Noms</p>
              </div>
            </Link>
        
          </div>
          
        </Col>
        
      </Row>

      <Row justify='center'>
        <div className='precision'>
          <p className='principe'>Entrez les valeurs minimum et maximum de votre choix. Ensuite, cliquer sur "Lancer" pour obtenir un résultat aléatoire compris entre les nombres que vous avez sélectionnés.<br/>Vous pouvez réalisez la même chose avec des noms que vous choisirez qui seront tirés alétoirement en cliquant en haut à droite sur "noms".</p>
        </div>
      </Row>
        
      <Row justify='center'>

        <Col span={{sm: 24, md: 12}} className='colNum'>
          <p>Minimum :</p>
          <InputNumber className='input' min={1} max={Infinity} defaultValue={1} onChange={onChangeMin} style={{height: '40px', borderRadius: '20px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}/>
        </Col>

        <Col span={{sm: 24, md: 12}} className='colNum'>
        <p>Maximum :</p>
          <InputNumber className='input' min={2} max={Infinity} defaultValue={50} onChange={onChangeMax} style={{height: '40px', borderRadius: '20px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}/>
        </Col>

      </Row>
        
      <Button className='button2' onClick={randomly}>Lancer</Button>
      
      {resultVisible
      ?<Row justify='center'>
        <div className='containResult'>
          <p className='result'>{result}</p>
        </div>
      </Row>
      :null}

    </div>
  );
}

export default RandomNum;
