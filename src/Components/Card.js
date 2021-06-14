import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col, Row } from "react-bootstrap";

const CardData = (props) => {

  const { data } = props;

  return (
    <div>
      <Card border="light" bg='light' style={{ width: '24rem', borderWidth: 1, borderColor: 'lightgray', elevetion: 10, zIndex: 100, borderRadius: 15, padding: 10, boxShadow: { x: 20, y: 20 } }}>
        <Card.Header>
          <Row>
            <Col>
              <div>
                <h3>{data.symbol}</h3>
                <h5>{data.companyName}</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h3>{data.latestPrice}</h3>
                <p style={{ color: '#EB5757' }} color='red'>{`${data.change}` + " " + (`${data.changePercent}`)}</p>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row style={{ justifyContent: 'space-evenly', display: 'flex' }}>
            <Col style={{ borderRightWidth: 1, borderRightColor: 'lightgray' }}>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Mkt Cap</p>
                <p>{data.marketCap}</p>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>P/E Ratio</p>
                <p>{data.peRatio}</p>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Avg. Volume</p>
                <p>{data.avgTotalVolume}</p>
              </Row>
            </Col>
            <Col>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Prev Close</p>
                <p>{data.previousClose}</p>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>52-wk high</p>
                <p>{data.week52High}</p>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>52-wk low</p>
                <p>{data.week52Low}</p>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardData