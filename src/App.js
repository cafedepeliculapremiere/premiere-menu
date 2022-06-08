import "./App.css";
import portada from "./assets/PORTADA.webp";
import pagina1 from "./assets/lugo-01.webp";
import pagina2 from "./assets/lugo-02.webp";
import pagina3 from "./assets/lugo-03.webp";
import pagina4 from "./assets/lugo-04.webp";
import pagina5 from "./assets/lugo-05.webp";
import logo from "./assets/logo.png"
import ReactWhatsapp from "react-whatsapp";
import { Popover, Input } from "antd";
import { useState } from "react";
import {Button, Image } from "antd";

function App() {
  const text = <span>Que deseas pedir?</span>;
  const { TextArea } = Input;

  const [postData, setPostData] = useState({
    waiter: "",
    message: "",
    table: 0,
  });

    const arrayTable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

  const [visible, setVisible] = useState(false);

  const content = (
    <div>
      <>
      <img src={logo} className="logoForm"/>
        <h5>Elige un contacto.</h5>
        <select
          name="waiter"
          onChange={(e) => {
            setPostData({ ...postData, waiter: e.target.value });
          }}
        >
          <option value="" selected>
            Selecciona...
          </option>
          <option value="3185211686">
            <h6 className="enlineaCarlos">Carlos Mario florez - En linea</h6>
          </option>
          <option value="3147648668">
            <h6 className="enlineaAlfonso">Alfonso Hernandez - En linea</h6>
          </option>
        </select>
        <br />
        <br />
      <h5>Tabla donde estas ubicado?</h5>
      <select name="table" onChange={(e) => {
          setPostData({ ...postData, table: e.target.value });
      }}>
      {
      arrayTable.map((number) => {
          return (
              <option value={number}>{number}</option>
          )
      })}
      </select>
        <br />
        <br />
        <TextArea
          placeholder="Describenos que deseas"
          allowClear
          name="message"
          onChange={(e) =>
            setPostData({
              ...postData,
              message: e.target.value,
            })
          }
        />
        <div className="sendMessage">
          <ReactWhatsapp
            number={`+57${postData.waiter}`}
            message={'mesa: ' + postData.table + '\n' + postData.message}
          />
        </div>
        <h6>Se realizara el envio por medio de WhatsApp</h6>
      </>
    </div>
  );

  return (
    <>
      <button onClick={()=> setVisible(true)} className="buttonShowMenu">
      Ver nuestro menu
      </button>
      <img src={logo} className="logoInicio"/>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image width={200} src={portada} />
          <Image width={200} src={pagina1} />
          <Image width={200} src={pagina2} />
          <Image width={200} src={pagina3} />
          <Image width={200} src={pagina4} />
          <Image width={200} src={pagina5} />
        </Image.PreviewGroup>
      </div>
      <div className="buttonPopover">
        <Popover
          placement="bottom"
          title={text}
          content={content}
          trigger="click"
        >
          <button className="ButtonToggle">Realizar pedido</button>
        </Popover>
      </div>
    </>
  );
}

export default App;
