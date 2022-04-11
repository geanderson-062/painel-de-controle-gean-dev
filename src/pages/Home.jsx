//importando o css
import '../App.css';

//importando componentes principais
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Botaomenu from '../components/Botoes/botao_menu_principal';
import Menu_lateral from '../components/Menu_lateral/Menu_lateral';

//importando o componente titulo
import Title_web from '../components/Title/Title_web';
import Title_pwa from '../components/Title/Title_pwa';
import Title_mobile from '../components/Title/Title_mobile';
import Title_bemvindo from '../components/Title/Title_bemvindo';

//importando os cards
import Card_git from '../content/Cards/Card_git';
import Card_info from '../content/Cards/Card_info';
import Card_host from '../content/Cards/Card_hosting';

//importando as tabelas
import Tabela_web from '../content/Tabelas/Tabela_web/Tabela_web';
import Tabela_pwa from '../content/Tabelas/Tabela_pwa/Tabela_pwa';
import Tabela_mobile from '../content/Tabelas/Tabela_mobile/Tabela_mobile';
import Animation_bemvindo from '../animation/Animation_bemvindo';

export default function Home() {

  return (
    
    <>
    
    <Navbar/>

    {/*menu lateral coemço*/}

    <div className="container-fluid">
    <div className="row">
   
    <Menu_lateral/>

    {/*menu lateral fim*/}

    {/*menu central*/}

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 corSecundaria"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      
        <Title_bemvindo/> 

        <div className="btn-toolbar mb-2 mb-md-0">

         <Botaomenu/>
         
        </div>
      </div>

    {/*cards começo*/}

    <div className='row row-cols-1 row-cols-md-3 mb-3'>

      <Card_git/>
      
      <Card_info/>

      <Card_host/>
    
    </div>
      
    {/*cards fim*/}

    {/*menu central*/}
  
      {/* aqui vai ficar as tabelas e os titulos*/}

      <br />
      <br />

      <Title_web/> {/*titulo das tabelas*/}

      <br />

      <Tabela_web/>{/*tabelas*/}

      <br />

      <Title_pwa/>{/*titulo das tabelas*/}

      <br />

      <Tabela_pwa/>{/*tabelas*/}

      <br />

      <Title_mobile/>{/*titulo das tabelas*/}

      <br />

      <Tabela_mobile/>{/*tabelas*/}

      <br />
      <br />
  
    </main>

    <Footer/>

  </div>
  </div>

    </>

  );
}

