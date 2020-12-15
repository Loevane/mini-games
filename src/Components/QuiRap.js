import {useState} from 'react';
import { Row, Col, Button, Input } from 'antd';

import Nav from './Nav';

function QuiRap() {

    const [buttonVisible, setButonVisible] = useState(true);
    const [punchlineVisible, setPunchlineVisible] = useState(false);
    const [responseVisible, setResponseVisible] = useState(false);
    const [punchline, setPunchline] = useState('');
    const [rappeur, setRappeur] = useState('');
    const [responseUser, setResponseUser] = useState('');
    const [message, setMessage] = useState('');
    const [erreur, setErreur] = useState('');

    const punchlines= [
        {punchline: "Avant j’étais moche dans la tess, aujourd’hui je plais à Eva Mendes.", rappeur: 'PNL'},
        {punchline: "Elle voulait la rose mais sans les épines. J’ai perdu du terrain comme en Palestine.", rappeur: 'Damso'},
        {punchline: "Marion Maréchal me suit sur Twitter. J’aimerais la baiser, briser son p’tit cœur. J’ai envoyé ma bite et un emoji fleur. Bonjour au papy, j’suis pressé qu’il meure.", rappeur: 'Orelsan'},
        {punchline: "Ça commence par du Roméo et Juliette. Ça finit par du Jacquie et Michel.", rappeur: 'Damso'},
        {punchline: "Vaut mieux vivre un jour comme un lion que cent comme un chien.", rappeur: 'IAM'},
        {punchline: "Avale avale c'est riche en oméga 3, cavale cavale sur mon cheval de Troie.", rappeur: 'Lorenzo'},
        {punchline: "Si les meilleurs partent en premier, pourquoi suis-je toujours en vie ?", rappeur: 'Booba'},
        {punchline: "Se tailler les veines est devenu pour certains jeunes le seul moyen de se faire des grosses coupures.", rappeur: 'Nekfeu'},
        {punchline: "C'est l'retour de la sex machine: Winter is coming dans ta p'tite copine.", rappeur: 'Gringe'},
        {punchline: "Rien n'est gratuit même la violence est une prestation. Gava t'as du mal à parler mais l'ivresse t'assiste, je fais l'action, elle fellation.", rappeur: 'Django'},
        {punchline: "Se tailler les veines est devenu pour certains jeunes le seul moyen de se faire des grosses coupures.", rappeur: 'Nekfeu'},
        {punchline: "Leur victoire a le goût du sperme, ma défaite aura l'odeur du cash.", rappeur: 'PNL'},
        {punchline: "Si t'as trahi, m'fais plus la bise man.", rappeur: 'Jul'},
        {punchline: "La pauvreté, ma seule phobie, faire de la maille, mon seul hobbie.", rappeur: 'Ninho'}, 
        {punchline: "Quand j'n'aurais plus l'même train de vie, qu'j'serai plus coté. Qu'y aura plus d'gov, qu'y aura plus de love, qu'j'redeviendrai c'pauvre, et qu'j'n'aurai plus qu'ma dignité qui restera sauve.", rappeur: 'Dosseh'},
        {punchline: "J'te décris ma vie en la peignant dans un monde où être libre est payant.", rappeur: 'Alpha Wann'},
        {punchline: "Il a pas dit bonjour du coup, il s'est fait niquer sa mère.", rappeur: 'Vald'},
        {punchline: "J’veux un oscar pour tous les films que je me suis fait dans la tête.", rappeur: 'Lomepal'}, 
        {punchline: "Chez moi on t'aime puis on t'oublie, chez moi on saigne puis on grandit.", rappeur: 'PNL'}, 
        {punchline: "J'ai fais la guerre pour habiter rue de la paix.", rappeur: 'Booba'},
        {punchline: "Ma vie, ma princesse, mon amour, ma déesse je lui donne tout.", rappeur: "Jul"},
        {punchline: "Y a pas de cours de magie donc j'vais pas à la fac, ma bite Wingardium devant Emma Watson.", rappeur: 'Lorenzo'},
        {punchline: "C'est pas ma France à moi cette France profonde, celle qui nous fout la honte et aimerait que l'on plonge.", rappeur: "Diam's"},
        {punchline: "Elle veut mon buzz mais j’lui fait même pas la bise.", rappeur: 'RK'},
        {punchline: "Je suis albinos parce que j’suis né pour briller.", rappeur: 'Kalash Criminel'}
    ];

    function onStart(){
        const random=Math.floor(Math.random() * ((punchlines.length-1) - 0+1) + 0);
        setButonVisible(false);
        setPunchlineVisible(true);
        setPunchline(punchlines[random].punchline);
        setRappeur(punchlines[random].rappeur);
    };

    function onResponse() {
        setResponseVisible(!responseVisible);
    };

    function onNext(){
        const random=Math.floor(Math.random() * ((punchlines.length-1) - 0+1) + 0);
        setPunchline(punchlines[random].punchline);
        setRappeur(punchlines[random].rappeur);
        setResponseVisible(false);
        setMessage('');
        setErreur('');
    };

    function onChangeResponse({ target: { value } }){
        setResponseUser(value)
    };

    function onSubmit(){
        if(responseUser!==''){
          if(responseUser.toLowerCase() === rappeur.toLowerCase()){
            setMessage('Bonne réponse !')
          }else{
            setMessage('Mauvaise réponse !')
          }
          setResponseUser('');
          setErreur('')
        }else{
          setErreur('OUPS ! Le champ est vide.')
        }
    };

    function onEnter(event){
        if(event.key==='Enter'){
          onSubmit()
        }
    };

    return(
        <div className='one'>

            <Row justify='space-between'>

                <Col sm={24} md={4} className='navPosition'>
                    <Nav/>
                </Col>

                <Col sm={20} md={12}>
                    <h1>Qui rap ?</h1>
                </Col>

                <Col sm={24} md={4}/>

            </Row>

            <Row justify='center'>
                <div className='precision'>
                    <p className='principe'><span style={{textDecoration: 'underline'}}>Principe:</span> Des "punchlines" vous seront proposés, le premier à trouvé de quel rappeur elles viennent à gagné! Exemple: "Si t'es souvent seul avec tes  problèmes, c'est parce que, souvent, le problème, c'est toi." Réponse: Orelsan.</p>
                </div>
            </Row>

            {buttonVisible
            ?<Row justify='center'>
                <Button className='button2' onClick={onStart}>Commencer</Button>
            </Row>
            :<div style={{height: '50px'}}></div>}

            {punchlineVisible
            ?<div>
                <Row justify='center'>
                    <p className='punchline'>{punchline}</p>
                </Row>

                <Row justify='center'>
                    <h2>Qui rap ?</h2>
                </Row>

                <Row justify='center'>
                    <Col sm={24} md={12} className='colName'>
                        <Input.Group compact>
                            <Input placeholder="Votre réponse" onChange={onChangeResponse} value={responseUser} onKeyUp={onEnter} style={{width:'300px', height: '40px', borderRadius: '20px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}} />   
                            <Button className='button1' onClick={onSubmit} style={{borderRadius: '20px', height: '40px'}}>OK</Button> 
                        </Input.Group>
                        <p style={{color: 'red', marginTop: '15px'}}>{erreur}</p>
                        <p className='result'>{message}</p>
                    </Col>                    
                </Row>

                <Row justify='center'>
                    <Button className='button2' onClick={onResponse}>Voir la réponse</Button>
                    <Button className='button2' onClick={onNext}>Punchline suivante</Button>
                </Row>
            </div>
            : null}

            {responseVisible
            ?<Row justify='center'>
                <div className='containResult'>
                    <p className='result'>Réponse: {rappeur}</p>
                </div>
            </Row> 
            : null}

        </div>
    )
}

export default QuiRap;