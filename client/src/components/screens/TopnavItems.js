import React from 'react'



function TopnavItems(props) {
  const { active } = props
  return (
    <div className={active ? "dropdown-content active" : "dropdown-content"}>
      {props.item === 1 ? (
        <ul className="ul">
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Computer-Portatili" title="Computer Portatili">Computer Portatili</a>
            </div>
            <ul>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Computer-Portatili/Notebook">Notebook<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Computer-Portatili/MacBook">MacBook<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Computer-Portatili/2-in-1---Convertibili">2 in 1 - Convertibili<span class="icon-arrow-right"></span></a>
              </li>
            </ul>

          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner" title="Stampanti e Scanner">Stampanti e Scanner</a>
            </div>

            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Stampanti-Inkjet">Stampanti Inkjet<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Stampanti-Laser">Stampanti Laser<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Multifunzione-Inkjet">Multifunzione Inkjet<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Stampanti-3D">Stampanti 3D<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Stampanti-ad-aghi">Stampanti ad aghi<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Plotter">Plotter<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Stampanti-per-etichette">Stampanti per etichette<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Scanner">Scanner<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Stampanti-e-Scanner/Cartucce-Toner-e-Consumabili">Cartucce, Toner e Consumabili<span class="icon-arrow-right"></span></a>
              </li>
            </ul>

          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/PC-Desktop-e-Monitor" title="PC Desktop e Monitor">PC Desktop e Monitor</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/PC-Desktop-e-Monitor/PC-Desktop">PC Desktop<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/PC-Desktop-e-Monitor/All-in-one">All-in-one<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/PC-Desktop-e-Monitor/iMac">iMac<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/PC-Desktop-e-Monitor/MacMini">MacMini<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/PC-Desktop-e-Monitor/Monitor">Monitor<span class="icon-arrow-right"></span></a>
              </li>
            </ul>


          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Hard-Disk-e-Storage" title="Hard Disk e Storage">Hard Disk e Storage</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Hard-Disk-e-Storage/Hard-Disk">Hard Disk<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Hard-Disk-e-Storage/SSD">SSD<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Hard-Disk-e-Storage/Chiavette-USB">Chiavette USB<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Hard-Disk-e-Storage/Lettori-Multimediali">Lettori Multimediali<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Hard-Disk-e-Storage/Masterizzatori">Masterizzatori<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Hard-Disk-e-Storage/Supporti-registrabili">Supporti registrabili<span class="icon-arrow-right"></span></a>
              </li>
            </ul>


          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Server-e-Workstation" title="Server e Workstation">Server e Workstation</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Server-e-Workstation/Server-di-salvataggio-dati">Server di salvataggio dati<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Server-e-Workstation/Server">Server<span class="icon-arrow-right"></span></a>
              </li>
            </ul>



          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Accessori-informatica" title="Accessori informatica">Accessori informatica</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Tastiere">Tastiere<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Mouse">Mouse<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Tavolette-grafiche">Tavolette grafiche<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Webcam-PC">Webcam PC<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Microfoni-cuffie-periferiche-audio-pc">Microfoni, cuffie, periferiche audio pc<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Hub-USB">Hub USB<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Software">Software<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Borse-custodie-e-zaini">Borse, custodie e zaini<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Batterie-per-PC-portatili">Batterie per PC portatili<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Accessori-PC-portatili">Accessori PC portatili<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Cavi-e-connettori">Cavi e connettori<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Accessori-informatica/Distruggi-documenti">Distruggi documenti<span class="icon-arrow-right"></span></a>
              </li>
            </ul>

          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Tablet-e-eBook-Reader" title="Tablet e eBook Reader">Tablet e eBook Reader</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Tablet-e-eBook-Reader/iPad">iPad<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Tablet-e-eBook-Reader/Tablet">Tablet<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Tablet-e-eBook-Reader/eBook-Reader">eBook Reader<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Tablet-e-eBook-Reader/Accessori-Tablet-eBook">Accessori Tablet eBook<span class="icon-arrow-right"></span></a>
              </li>
            </ul>

          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Reti-e-Connettivit" title="Reti e Connettività">Reti e Connettività</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Modem-Router">Modem Router<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Router-e-Access-Point">Router e Access Point<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Powerline-ed-Extender">Powerline ed Extender<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Switch-di-rete">Switch di rete<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Firewall-e-gateway">Firewall e gateway<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Chiavette-wireless">Chiavette wireless<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Domotica">Domotica<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Reti-e-Connettivit/Cavi-e-connettori">Cavi e connettori<span class="icon-arrow-right"></span></a>
              </li>
            </ul>


          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Gaming" title="Gaming">Gaming</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Gaming/PC-desktop">PC desktop<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Gaming/Notebook">Notebook<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Gaming/Monitor">Monitor<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Gaming/Periferiche">Periferiche<span class="icon-arrow-right"></span></a>
              </li>
            </ul>

          </li>
          <li className="top-shild">
            <div class="second-item__title">
              <a href="/online/Computer-e-Tablet/Componenti-per-PC" title="Componenti per PC">Componenti per PC</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Case-rack-e-accessori">Case, rack e accessori<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Schede-madri">Schede madri<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Processori">Processori<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/RAM">RAM<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Schede-audio">Schede audio<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Schede-grafiche">Schede grafiche<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Schede-PCI">Schede PCI<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Alimentatori">Alimentatori<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/Ventole-e-dissipatori">Ventole e dissipatori<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Computer-e-Tablet/Componenti-per-PC/UPS">UPS<span class="icon-arrow-right"></span></a>
              </li>
            </ul>

          </li>
        </ul>
      ) : null}
      {props.item1 === 2 ? (
        <ul class="navigation-panel__container__items">
          <li class="second-item">
            <div class="second-item__title">
              <a href="/online/Telefonia-e-Smartphone/Smartphone-e-Cellulari" title="Smartphone e Cellulari">Smartphone e Cellulari</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Smartphone-e-Cellulari/Smartphone">Smartphone<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Smartphone-e-Cellulari/iPhone">iPhone<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Smartphone-e-Cellulari/Cellulari">Cellulari<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Smartphone-e-Cellulari/Accessori-Cellulari-e-Smartphone">Accessori Cellulari e Smartphone<span class="icon-arrow-right"></span></a>
              </li>
            </ul>
          </li>
          <li class="second-item">
            <div class="second-item__title">
              <a href="/online/Telefonia-e-Smartphone/Wearable" title="Wearable">Wearable</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Wearable/Smartwatch">Smartwatch<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Wearable/Sportwatch">Sportwatch<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Wearable/Activity-tracker">Activity tracker<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Wearable/Visori-VR">Visori VR<span class="icon-arrow-right"></span></a>
              </li>
            </ul>
          </li>
          <li class="second-item">
            <div class="second-item__title">
              <a href="/online/Telefonia-e-Smartphone/Cordless-e-Telefonia-Fissa" title="Cordless e Telefonia Fissa">Cordless e Telefonia Fissa</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Cordless-e-Telefonia-Fissa/Telefoni-Fissi">Telefoni Fissi<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Cordless-e-Telefonia-Fissa/Telefoni-Cordless">Telefoni Cordless<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Cordless-e-Telefonia-Fissa/Walkie-Talkie-Ricetrasmittenti">Walkie Talkie / Ricetrasmittenti<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Cordless-e-Telefonia-Fissa/Accessori-cordless">Accessori cordless<span class="icon-arrow-right"></span></a>
              </li>
            </ul>
          </li>
          <li class="second-item">
            <div class="second-item__title">
              <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia" title="Accessori telefonia">Accessori telefonia</a>
            </div>
            <ul class="items">
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Caricabatterie">Caricabatterie<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Powerbank">Powerbank<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Custodie-cellulari">Custodie cellulari<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Protezione">Protezione<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Bluetooth">Bluetooth<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Cuffie-e-Auricolari">Cuffie e Auricolari<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Memorie">Memorie<span class="icon-arrow-right"></span></a>
              </li>
              <li class="third-item">
                <a href="/online/Telefonia-e-Smartphone/Accessori-telefonia/Altri-accessori-telefonia">Altri accessori telefonia<span class="icon-arrow-right"></span></a>
              </li>
            </ul>
          </li>
        </ul>
      ) : null}

    </div>

  )


}

export default TopnavItems;