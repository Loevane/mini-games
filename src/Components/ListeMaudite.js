import {useState} from 'react'
import { Row, Button, Divider, Col } from 'antd';

import Nav from './Nav';

function ListeMaudite() {

    const liste1= ['Caca', 'Pipi', 'Coco', 'Pute', 'Pute', 'Caca de merde', 'Foutre de chien', 'Artichaut', 'Kaku le mystère', 'Mistigri', 'Mistigrou', 'Filapo', 'Macron le con', 'Va nu pied', "Bonjour j'ai fait caca", 'Gode el malek', 'Truppe', 'Cassin', 'Cossin', 'Fist'];
    const liste2=['Pâté', 'Cornichon', 'Fourchette', 'Croute', 'Anis', 'Anus', 'Poireau', 'Luge', 'Hurluberlu', 'Marine le pencil', 'Trotinette', 'Chatte', 'Lavabo', 'Dindon', 'Morue',"J'aime les pieds", 'Chipolata', 'Glue', 'Suce', 'Vulve'];
  
    const [visibleListe, setVisibleListe] = useState(liste1);

    function changeListe() {
        
        if(visibleListe===liste1){
            setVisibleListe(liste2);
        }else{
            setVisibleListe(liste1)
        }
        console.log(visibleListe)
    }

    return (
    <div className="one">   

        <Row justify='space-between'>

            <Col sm={24} md={4} className='navPosition'>
                <Nav/>
            </Col>

            <Col sm={20} md={12}>
                <h1>La liste maudite</h1>
            </Col>

            <Col sm={24} md={4}>
            </Col>
           
        </Row>

        <Row justify='center' >
            <div className='precision'>
                <p className='principe'><span style={{textDecoration: 'underline'}}>Principe: </span>Lire la liste mot par mot à un rythme régulier (ni trop vite ni trop lent) sans rigoler !</p>
            </div>
        </Row>

        <Row justify='center'>
            <ul className='list'>
                {visibleListe.map((world, i)=>(
                    <li key={i}>
                        <Divider>{world}</Divider>
                    </li>
                ))}
            </ul>
        </Row>

        <Row justify='center'>
            <Button onClick={changeListe} className='button2'>Changer de liste</Button>
        </Row>

    </div>
  );
}

export default ListeMaudite;
