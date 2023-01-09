import logo from '../../assets/box-truck.png'

export function Header() {
  return (
    <header>
      <div>
        <strong>Logistic</strong>
        <img src={logo} alt="Caminhão" />
      </div>
      <div>
        <button>Registro Entrada</button>
        <button>Registro Saída</button>
      </div>
    </header>
  )
}
