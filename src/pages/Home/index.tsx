import { Profiles } from "../../components/Profiles"

const Home = () => {
  return (
    <>
      <header>
        <img className="w-20 rounded-sm" src="https://github.com/Leve-Type.png" alt="leve type logo" />
        <h2>Leve type community</h2>
      </header>
      <section>
        <h3>Quem somos?</h3>
        <p></p>
      </section>
      <section>
        <h3>Nossos objetivos</h3>
        <p></p>
      </section>
      <section>
        <h3>Colaboradores</h3>
        <Profiles />
      </section>
      <footer>
        <div className="">
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>

        <div className="">
          <p>&copy; 2023 Levetype. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default Home