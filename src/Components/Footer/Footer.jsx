import "./Footer.css";

const Footer = ({children}) => {
  return (
    <section className="footer">   
        {children}
       <div className="itbankFooter"> 
            <p id="itBankFooter">ITBANK</p>
            <p id="paisFooter">🇦🇷 Argentina</p>
       </div>
       <div className="redesYLegalesFooter">
        <div className="redesFooter">
                <p id="instagram">Instagram</p>
                <p id="linkedin">LinkedIn</p>
        </div>
        <div className="legalFooter">
            <ul className="listaLegal">
                <li>Términos y condiciones</li>
                <li>Privacidad y confidencialidad</li>
                <li>Marcas registradas</li>
            </ul>
        </div>
       </div>
      <div className="derechosReservadosFooter">
        <p>Todos los Derechos Reservados. Prohibida su reproducción total o parcial. Los usuarios se obligan a cumplir con los Términos y Condiciones del Sitio de ITBANK. <br/> Copyright © 2023 <b>ITBANK</b>.</p>
      </div>
    </section>
  )
}

export default Footer