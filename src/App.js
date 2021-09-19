import './app.css'
import Header from './components/header';
function App() {
  const c="Achyuth"
  return (
    <div>
     <Header c={c} />
    <p>This is {c}</p>
    
    
    </div>
    );
}


export default App;
