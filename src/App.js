import "./App.css";
import portada from "./assets/PORTADA.webp";
import pagina1 from "./assets/lugo-01.webp";
import pagina2 from "./assets/lugo-02.webp";
import pagina3 from "./assets/lugo-03.webp";
import pagina4 from "./assets/lugo-04.webp";
import pagina5 from "./assets/lugo-05.webp";
import ReactWhatsapp from "react-whatsapp";
import { Popover, Input } from "antd";
import { useState } from "react";
import { Image } from "antd";

function App() {
  const text = <span>Que deseas pedir?</span>;
  const { TextArea } = Input;

  const [postData, setPostData] = useState({
    waiter: "",
    message: "",
  });

  const [visible, setVisible] = useState(false);

  const content = (
    <div>
      <>
        <h5>Elige al mesero que te atendio?</h5>
        <select
          name="waiter"
          onChange={(e) => {
            setPostData({ ...postData, waiter: e.target.value });
          }}
        >
          <option value="" selected>
            Selecciona...
          </option>
          <option value="3137137829">Diego Alejandro Lugo Tellez</option>
          <option value="3116877470">Juan Guillermo</option>
          <option value="3148133470">Jhon Deiby Montoya</option>
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
            message={postData.message}
          />
        </div>
        <h6>Se realizara el envio por medio de WhatsApp</h6>
      </>
    </div>
  );

  return (
    <>
      <Image
        preview={{ visible: false }}
        src={portada}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={portada} />
          <Image src={pagina1} />
          <Image src={pagina2} />
          <Image src={pagina3} />
          <Image src={pagina4} />
          <Image src={pagina5} />
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