import { Row, Col } from 'antd';

import Nav from './Nav';

function Roulette() {


    return (
    <div className="one">   

        <Row justify='space-between'>

            <Col sm={24} md={4} className='navPosition'>
                <Nav/>
            </Col>

            <Col sm={20} md={12}>
                <h1>La roulette</h1>
            </Col>

            <Col sm={24} md={4}>
            </Col>
           
        </Row>

       
    </div>
  );
}

export default Roulette;