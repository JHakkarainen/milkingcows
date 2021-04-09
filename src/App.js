import CowTable from './components/CowTable'
import  { ReactComponent as SvgCow } from './cow.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SvgCow />
      </header>
      <section>
        <CowTable />
      </section>
    </div>
  );
}

export default App;
