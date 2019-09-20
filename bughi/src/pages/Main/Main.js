import React, { useEffect, useState } from 'react';
import { Input, Button } from 'react-rainbow-components';
import axios from 'axios';
import './Main.css';

export default function Main() {

  const [Layers, setLayers] = useState('');
  const [Url, setUrl] = useState('');
  const [UrlBase, setUrlBase] = useState('');


  async function getImage(e) {
    e.preventDefault();
    setUrlBase(Url + '/service=wms?request=getMap&WIDTH=400&HEIGHT=400&crs=epsg:4326&bbox=-180,-90,180,90&format=image%2Fpng&layers=' + Layers);
    console.log(UrlBase);
    document.getElementById("img").classList.remove("none");
  }

  useEffect(() => {
    const response = axios.get('http://sistemas.anatel.gov.br/geoserver/ANATEL/wms/service=wms?request=getCapabilities&format=json', {
    })
    console.log(response);
    })


  return (
    <div className="container">
      <div className="inputs">
        <form onSubmit={getImage}>
          <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
            <Input
              className="input"
              id="input-component-1"
              label="Digite o servidor"
              placeholder="Digite o servidor"
              onChange={e => setUrl(e.target.value)}
            />
            <Input
              className="input"
              id="input-component-1"
              label="Digite a Layer"
              placeholder="Digite a Layer"
              onChange={e => setLayers(e.target.value)}
            />

          </div>
          <div className="rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
            <Button
              className="input"
              shaded
              label="Pegar Imagem"
              type="submit"
              variant="brand" />
          </div>
        </form>
      </div>

      <br />
      <div id="img" className="none">
        <img src={UrlBase} alt="oi" />
      </div>

    </div>
  )
}