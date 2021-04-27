import Header from "./components/Header";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import All from "./containers/All";
import Pending from "./containers/Pending";
import Purchased from "./containers/Purchased";
import { Route, Switch } from "react-router-dom";
import Groceries from "./containers/Groceries";

function App() {

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <main>
        <Groceries />
        <Switch>
          <Route path="/" exact component={All} />
          <Route path="/pending" exact component={Pending} />
          <Route path="/purchased" exact component={Purchased} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;