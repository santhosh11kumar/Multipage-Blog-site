
import Content from '../Componentes/Content';
import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';

function Home() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
            <Header></Header >
            <Content ></Content>
            <Footer></Footer>
        </div>
    )
}
export default Home;