import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Profiles } from "../../components/Profiles"
import andershejlsberg from "../../assets/anders-hejlsberg.png"

const Home = () => {
  return (
    <>
      <Header />
      <section className="flex gap-3">
        <Card
          title="TypeScript: The Future of JavaScript"
          subtitle="Who is typescript and who created it?"
          paragraph="TypeScript is an open-source programming language developed by Microsoft and designed by Anders Hejlsberg. It extends JavaScript with features like static typing, interfaces, classes, and modules, enabling more robust and scalable code. TypeScript's static typing helps catch errors early, offers autocompletion, and enhances code quality. It compiles to JavaScript, making it compatible with any JavaScript environment.

        Anders Hejlsberg, known for his work on languages like Turbo Pascal and Delphi, created TypeScript to address JavaScript development challenges. It introduces static typing for better tooling support and error detection. TypeScript is compatible with JavaScript, facilitating smooth integration into existing projects without extensive code rewriting. Its features enhance development productivity while ensuring code reliability."/>
        <Card image={andershejlsberg} />
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