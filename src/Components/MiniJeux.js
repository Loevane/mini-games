import {useState} from 'react'
import {Link} from 'react-router-dom';
import { Row, Col, Card, Modal, Button } from 'antd';

import Nav from './Nav';


function MiniJeux() {

  const { Meta } = Card;

  let cards=[
    {title: 'La liste maudite', img:'url(../images/liste-maudite.png)', desc: 'Une liste de mots vous sera donné et il vous faudra lire celle-ci mot par mot à un rythme régulier sans rire! Définissez plus précisemment les règles entre vous si vous souhaitez rajouter de la diffuculté.', link: "liste-maudite"},
    {title: 'La chasse aux...', img: 'url(../images/chasse-aux.png)', desc: `Le premier qui revient au point de départ avec un selfie ccompagné de l'objet ou la personne désigné à l'avance à gagné! Par exemple: La chasse aux... chauves. A vos selfies!` },
    {title: 'Déguise toi, toi', img: 'url(../images/deguise-toi.png)', desc: 'Après avoir choisit une personnalité, vous aurez 1 minute chrono pour vous déguisez en ce qui rapproche le plus de la personnalité choisit avec les éléments de la pièce.'},
    {title: 'La presque chanson', img: 'url(../images/presque-chanson.png)', desc: "Le principe est simple, vous devez faire devinez aux autres une chanson en remplaçant les paroles par des synonymes uniquement! Par exemple: Navré pour la nuit dernière, d'm'être mis dans une position non-standard... Réponse: Tryo-Désolé pour hier soir."},
    {title: 'Random', img: 'url(../images/random.png)', desc: "Juste un outil de tirage au hasard, qui peut être nécessaire lors d'une soirée pour tiré au sort quelqu'un ou quoi que ce soit d'autre. Possibilité de tiré un chiffre au hasard OU un nom dans une liste que vous aurez défini. ", link: "random-nombre"},
    {title: 'Qui rap ?', img: 'url(../images/qui-rap.png)', desc: "Soyez le premier à trouver quel rappeur se cache derrière la punchline.", link: "qui-rap"}
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [modalLink, setModalLink] = useState('');

  const showModal = (i) => {
    setIsModalVisible(true);
    setModalDesc(cards[i].desc);
    setModalName(cards[i].title);
    setModalLink(cards[i].link)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="one">
      
      <Row justify='space-between'>

        <Col sm={24} md={4} className='navPosition'>
          <Nav/>
        </Col>

        <Col sm={20} md={12}>
          <h1>Mini-Jeux</h1>
        </Col>

        <Col sm={24} md={4}>
        </Col>

      </Row>

      <Row justify='center' >

        {cards.map((jeux, i)=>(
      
          <Col sm={24} md={4} key={i} style={{margin: '30px'}}>
            <div className='imgCard'
              onClick={()=>showModal(i)}
              style={{background: `${jeux.img} center center`, backgroundSize: 'contain'}}
            >
            </div>
          </Col>

        ))}

        <Modal
          title={modalName}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelText='Retour'
          maskStyle={{backgroundColor: 'rgba(0, 0, 0, 0.9'}}
          width='700px'
          centered
          style={{textAlign: 'center',  fontFamily: "'Orbitron', sans-serif"}}
        >
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <p>{modalDesc}</p>
          {modalLink
            ?<Button className='buttonAccueil'><Link to={modalLink} style={{color: 'white'}}>Lancer</Link></Button>
            : null
          }
          </div>
          
        </Modal>
        
      </Row>
        
    </div>
  );
}

export default MiniJeux;
