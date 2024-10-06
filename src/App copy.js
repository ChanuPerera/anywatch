import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";
import Barcode from 'react-barcode';

function App() {


  const barval = [
    
      "XGDE4567",
      "XGDE3462",
      "XGDE8712",
      "XGDE9135",
      "XGDE1356",
      "XGDE3229",
      "XGDE4537",
      "XGDE7459",
      "XCWD2367",
      "XCWD1953",
      "XCWD3754",
      "XCWS7681",
      "XSME9843",
      "XSME7356",
      "XSME6391",
      "XSME5819",
    
  ]
  return (
    <div className="App " style={{
      padding: "50px"
    }}>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 400, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={'https://whatsapp.com/channel/0029VaZc7ES35fLzP2mnGZ21'}
          viewBox={`0 0 256 256`}
        />
      </div>
{barval.map((item, index) => (

<Barcode key={index} value={item} />

))}
    
    </div>
  );
}

export default App;
