import { Link, Route, Switch } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateBooking from "./pages/CreateBooking";
const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/create-booking" component={CreateBooking} />
    </Switch>
  </>
);

export default App;
