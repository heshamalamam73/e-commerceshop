function PreFooter(props) {
  return (
    <div className="prefooter" id="services">
      <Row>
        <Col>
          <h2>AL TUO SERVIZIO</h2>
          <p>
            Scopri tutti i nostri servizi pensati per rendere i tuoi acquisti
            online sempre più facili e veloci. Scopri tutti i dettagli
            </p>
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <h1>
            <FaShoppingCart />
          </h1>
          <strong>Ritira</strong> in negozio
              Paga o ordina online e ritira i tuoi acquisti nel punto vendita
              più vicino a te, senza spese di spedizione.

          </Col>
        <Col xs={6} md={4}>
          <h1>
            <FaShippingFast />
          </h1>
          <strong>SCEGLI</strong> LA TUA CONSEGNA Seleziona tra le nostre
            opzioni di consegna quella che preferisci.
          </Col>
        <Col xs={6} md={4}>
          <h1>
            <RiInstallLine />
          </h1>
          <strong>INSTALLAZIONE</strong> E ALTRI SERVIZI Richiedi i nostri
            servizi di consegna e installazione a domicilio.
          </Col>
        <Col xs={6} md={4}>
          <h1>
            <FaMoneyCheckAlt />
          </h1>
          <strong>FINANZIAMENTI </strong>
            Rimborsa i tuoi acquisti in comode rate mensili.
          </Col>
        <Col xs={6} md={4}>
          <h1>
            <FaAssistiveListeningSystems />
          </h1>
          <strong>ASSISTENZA</strong> AGGIUNTIVA Proteggi i tuoi acquisti con
            Rilassati e Smile Service.
          </Col>
        <Col xs={6} md={4}>
          <h1>
            <MdAssignmentReturn />
          </h1>
          <strong>RESO</strong> E DIRITTO DI RECESSO Rendi il tuo prodotto
            acquistato online in un punto vendita Unieuro.
          </Col>
      </Row>
    </div>
  )
}
export default PreFooter;