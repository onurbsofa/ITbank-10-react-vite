

export default function NameComponent({isLoggedIn, username}) {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Bienvenido, {username}!</p>
          {/* Otros elementos de la barra lateral */}
        </div>
      ) : (
        <div>
          <p>Inicia sesión para ver tu nombre</p>
          {/* Otros elementos de la barra lateral */}
        </div>
      )}
    </div>
  )
}
