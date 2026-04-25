import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p>Bienvenue ! Cette application vous aide a trouver
            votre ligne de bus a Dakar.</p>
        <div style={{display: 'flex', gap: '20px', marginTop: '20px'}}>
          <Statistique chiffre="10" libelle="lignes" />
          <Statistique chiffre="150" libelle="arrêts" />
          <Statistique chiffre="5000" libelle="voyageurs/jour" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;