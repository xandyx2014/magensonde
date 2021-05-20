import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import * as Icon from "ionicons/icons";
import { Tab1, Tab2, Tab3, Tab4, RequerimientoHidrico } from "./pages";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1" component={Tab1}></Route>
          <Route exact path="/tab2" component={Tab2}></Route>
          <Route exact path="/tab3" component={Tab3}></Route>
          <Route exact path="/tab4" component={Tab4}></Route>
          <Route exact path="/tab5" component={RequerimientoHidrico}></Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className="fade-in" slot="bottom" color="light" mode="ios">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={Icon.calculatorOutline} />
            <IonLabel>NRS2002</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={Icon.cubeOutline} />
            <IonLabel>Nutric</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={Icon.gitNetworkOutline} />
            <IonLabel>APACHE II</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={Icon.heartOutline} />
            <IonLabel>Peso y talla</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={Icon.leafOutline} />
            <IonLabel>Req. Energetico</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
