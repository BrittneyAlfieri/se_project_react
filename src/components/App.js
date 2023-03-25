import "../blocks/app/App.css";
import { Header, Main, Footer } from "./index";

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
