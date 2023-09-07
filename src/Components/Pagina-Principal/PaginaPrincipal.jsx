import Footer from "../Footer/Footer";


export default function PaginaPrincipal() {
  return (
    <>
    <main>
      <section className="banner">
        <div className="banner-img">
          <img src="https://i.imgur.com/4X9Q3XV.png" alt="banner" />
        </div>
        <div className="banner-text">
          <h1>!Presatamos a taza cero!</h1>
          <p>¡Solicitá tu préstamo en 3 simples pasos!</p>
          <button className="btn-banner">¡Quiero saber más!</button>
        </div>
      </section>
      <section className="dash-boards">
        
      </section>
    </main>
    <Footer/>
    </>
  )
}
