import "./App.css";
import Profile from "./assets/3d.jpg";
import Projet from "./assets/projet.jpg";

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-3xl">ZMTO</h1>
            </div>
            <div>
              <ul className=" flex gap-5">
                <li>
                  <a className="text-gray-400  hover:text-white cursor-pointer">
                    Projets
                  </a>
                </li>
                <li>
                  <a className="text-gray-400  hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400  hover:text-white cursor-pointer">
                    À propos de moi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className=" container m-auto px-4 py-10 flex gap-10">
            <div className=" gap-3">
              <h1 className=" font-bold text-5xl">
                Hello , je suis Moulahid Zakaria,
              </h1>
              <h1 className=" font-bold text-2xl mt-1 gradiant-text">
                ingénieur logiciel.
              </h1>
              <p className=" mt-4 text-gray-400">
                Bienvenue dans Zakaria Moulahid Tech Odyssey ! Je suis un
                passionné de technologie et un ingénieur logiciel dévoué, et ce
                portfolio est le récit visuel de mon voyage dans le monde de la
                technologie. De la conception de logiciels innovants à la
                résolution de problèmes complexes, chaque projet présenté ici
                représente une étape significative de mon parcours professionnel
                et personnel.
              </p>
            </div>
            <div>
              <img
                src={Profile}
                width={500}
                className=" rounded-full h-100 w-100"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="  container m-auto px-4 py-10">
            <h2 className="text-2xl font-semibold">projets</h2>
            <div className="flex gap-6 mt-12">
              <div className=" border rounded-lg p-5">
                <img src={Projet} width={300} />
                <h3 className=" text-2xl font-semibold mt-8">Projet 1</h3>
                <p className=" text-gray-400 text-sm mt-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet fugiat saepe minima sint nulla. Magni incidunt
                  quaerat, ea nostrum nesciunt, assumenda, fugiat ducimus
                  possimus enim mollitia corporis necessitatibus sequi ratione?
                </p>
                <div className="flex justify-evenly gap-2 mt-8">
                  <button className="  px-8 py-2 border rounded-3xl bg-gradient-to-t from-blue-500 to-cyan-500 ">
                    GitHub{" "}
                  </button>
                </div>
              </div>
              <div className=" border rounded-lg p-5">
                <img src={Projet} width={300} />
                <h3 className=" text-2xl font-semibold mt-8">Projet 1</h3>
                <p className=" text-gray-400 text-sm mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet fugiat saepe minima sint nulla. Magni incidunt
                  quaerat, ea nostrum nesciunt, assumenda, fugiat ducimus
                  possimus enim mollitia corporis necessitatibus sequi ratione?
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
