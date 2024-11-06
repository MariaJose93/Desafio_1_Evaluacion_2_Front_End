import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
       <Header title='ANIMALES EXÓTICOS' /> 
      <div className='contenedor'>
        <MyCard
          image="https://lamenteesmaravillosa.com/wp-content/uploads/2021/08/guacamayo-1024x683.jpg?auto=webp&quality=60&width=1920&crop=16:9,smart,safe"
          title="Guacamayo"
          paragraph="Perteneciente a la especie Ara, son conocidos por su deslumbrante colorido e inteligencia. Al volar en grandes bandadas, 
          crean un espectáculo visual único en la naturaleza."
          tagColor="success"
          tagText="Más Información"
        />
        <MyCard
          image="https://lamenteesmaravillosa.com/wp-content/uploads/2021/08/tigre-bengala-blanco-1024x683.jpg?auto=webp&quality=60&width=1920&crop=16:9,smart,safe"
          title="Tigre de Bengala Blanco"
          paragraph="Este majestuoso felino no es albino, sino resultado de una mutación genética. Al heredar dos genes recesivos para color claro, desarrolla pelaje blanco, 
          rayas oscuras, nariz rosa y ojos azules.."
          tagColor="success"
          tagText="Más Información"
        />
        <MyCard
          image="https://content.nationalgeographic.com.es/medio/2023/04/14/dragon-azul_db9261dd_230414144821_1280x960.jpg"
          title="Dragón Azul "
          paragraph="Este impresionante molusco debe su nombre a su apariencia mitológica. Aunque vive en mar abierto, a veces las corrientes lo llevan hasta la costa, 
          donde se puede observar su singular belleza."
          tagColor="success"
          tagText="Más Información"
        />
        <MyCard
          image="https://www.canal26.com/media/image/2023/11/30/575543.jpg"
          title="Zorro Fennec"
          paragraph="El zorro fennec, nocturno y cazador de pequeños animales, se caracteriza por sus grandes orejas y cola larga. 
          Es el animal nacional de Argelia, donde fennec significa zorro en árabe."
          tagColor="success"
          tagText="Más Información"
        />
      </div>
      <Footer/>
    </>
  );
}
export default App;
