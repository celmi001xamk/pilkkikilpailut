import { Aloitus } from "./komponentit/Aloitus";
import { Saannot } from "./komponentit/Saannot";
import { Ilmoittaudu } from "./komponentit/Ilmoittaudu";
import { Navigaatio } from "./komponentit/Navigaatio";
import { Kiitos } from "./komponentit/Kiitos";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { OmaContainer } from "./komponentit/OmaContainer";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <CssBaseline>
      <OmaContainer>
        <Router>
          <Navigaatio />
          <Route path="/" exact component={Aloitus} />
          <Route path="/saannot" exact component={Saannot} />
          <Route path="/ilmoittaudu" exact component={Ilmoittaudu} />
          <Route path="/kiitos" exact component={Kiitos} />
        </Router>
      </OmaContainer>
    </CssBaseline>
  );
}

export default App;
