import './App.css';
import Header from './Header';
import ListeLignes from './ListeLignes';
import StatReseau from './StatReseau';
import Footer from './Footer';

function App() {
  const lignes = [
  { id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14, couleur: "#0a6e31" },
  { id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obé", arrets: 18, couleur: "#e74c3c" },
  { id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12, couleur: "#2980b9" },
  { id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10, couleur: "#8e44ad" },
  { id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16, couleur: "#e67e22" },
  { id: 6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11, couleur: "#16a085" },
  { id: 7, numero: "3", depart: "Fann", arrivee: "Liberté", arrets: 9, couleur: "#c0392b" },
  { id: 8, numero: "19", depart: "HLM", arrivee: "Dieuppeul", arrets: 7, couleur: "#d35400" },
  { id: 9, numero: "5", depart: "Sicap", arrivee: "Médina", arrets: 13, couleur: "#1a5276" },
  { id: 10, numero: "27", depart: "Castors", arrivee: "Colobane", arrets: 8, couleur: "#6c3483" },
  ];

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <StatReseau lignes={lignes} />
        <ListeLignes lignes={lignes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;