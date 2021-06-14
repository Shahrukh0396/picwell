import React,{Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import { Col, Row } from "react-bootstrap";
import '../Components/card.css';
import { Icon } from 'react-icons-kit'
import { longArrowDown } from 'react-icons-kit/fa/longArrowDown'
import { longArrowUp } from 'react-icons-kit/fa/longArrowUp'



const CardData = (props) => {

  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
      var suffixes = ["", "K", "M", "B", "T"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
        var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
        if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  }
  const { data } = props;

  return (
    <div className="container-fluid">
      <div className="row mt-5 d-flex" style={{ justifyContent: 'center' }}>
        <div className="col-xl-7 col-lg-9 col-md-12">
          <Card className="cardwidth" border="light" bg='white' style={{ width: '', maxWidth: '', height: 'auto', borderColor: 'lightgray', elevetion: 0, borderRadius: 25, padding: 10, boxShadow: '0px 2px 6px rgb(231, 231, 231)' }}>
            <Card.Header style={{ backgroundColor: 'white' }}>
              <div className="row" style={{ marginBottom: '-0.5rem' }}>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h3 style={{ fontWeight: 'bold', color: 'black' }}>{data.symbol}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h6 style={{ color: 'gray' }}>{data.companyName}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7"></div>
                <div className="col" style={{ justifyContent: '', textAlign: '' }}>
                  <div className="row">
                    <div className="col">
                      <h3 style={{ fontWeight: 'bold', color: 'black' }}>{data.latestPrice}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p style={{ color: data.change > 0 ? '#27AE60' : '#EB5757' }} color='red'>{`${data.change}` + " " + "(" + `${data.changePercent}` + "%" + ")" + " " + `${<Fragment><Icon icon={data.change > 0 ? longArrowUp : longArrowDown} /></Fragment>}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body style={{ marginBottom: '-0.5rem', marginTop: '0.5rem' }}>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="row">
                    <div className="col">
                      <p>Mkt Cap</p>
                    </div>
                    <div className="col">
                      <p style={{ color: 'gray', textAlign: 'end' }}>{abbreviateNumber(data.marketCap)}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <p>P/E Ratio</p>
                    </div>
                    <div className="col">
                      <p style={{ color: 'gray', textAlign: 'end' }}>{data.peRatio}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <p>Avg. Volume</p>
                    </div>
                    <div className="col">
                      <p className="px-0" style={{ color: 'gray', textAlign: 'end' }}>{abbreviateNumber(data.avgTotalVolume)}</p>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-0 col-md-0 d-flex" style={{ justifyContent: 'center', borderLeft: '1px solid lightgray', left: '3%', borderWidth: '0.1px', border: '' }}>

                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <div className="row">
                    <div className="col">
                      <p className="">Prev Close</p>
                    </div>
                    <div className="col">
                      <p className="px-0" style={{ color: 'gray', textAlign: 'end' }}>{data.previousClose}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <p>52-wk high</p>
                    </div>
                    <div className="col">
                      <p className="px-0" style={{ color: 'gray', textAlign: 'end' }}>{data.week52High}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <p>52-wk low</p>
                    </div>
                    <div className="col">
                      <p className="px-0" style={{ color: 'gray', textAlign: 'end' }}>{data.week52Low}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CardData;