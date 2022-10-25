import './styles/App.scss';
import Header from './components/Header';
import Background from './components/Background';
import Characters from './components/Characters';

function Home() {
  return (
    <section>
        <Background name='background lucy'/>
        <Header/>
        <Characters/>

    </section>
  );
}


export default Home;