/* eslint-disable @typescript-eslint/no-explicit-any */
import { Redirect, Route } from "react-router-dom";
import React, { useMemo } from "react";
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
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
import Menu from "./components/menu";
// Tab2, Tab3, Tab4, RequerimientoHidrico
const Tab1 = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.Tab1 }))
);
const Tab2 = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.Tab2 }))
);
const Tab3 = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.Tab3 }))
);
const Tab4 = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.Tab4 }))
);
const RequerimientoHidrico = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.RequerimientoHidrico }))
);
const Home = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.Home }))
);
const RegistroPaciente = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.RegistroPaciente }))
);
const ReqProteinas = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.ReqProteinas }))
);
const App: React.FC = () => (
  <IonApp>
    <React.Suspense
      fallback={
        <IonApp>
          {" "}
          <IonContent>
            <p>...</p>
          </IonContent>
        </IonApp>
      }
    >
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {useMemo(
            () => (
              <Menu />
            ),
            []
          )}
          <IonRouterOutlet id="main">
            <Route
              exact
              path="/tab1"
              render={(props: any) => <Tab1 {...props}></Tab1>}
            ></Route>
            <Route exact path="/tab2" component={Tab2}></Route>
            <Route exact path="/tab3" component={Tab3}></Route>
            <Route exact path="/tab4" component={Tab4}></Route>
            <Route exact path="/tab5" component={RequerimientoHidrico}></Route>
            <Route exact path="/ReqProteinas" component={ReqProteinas}></Route>
            <Route
              exact
              path="/registroPaciente"
              component={RegistroPaciente}
            ></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </React.Suspense>
  </IonApp>
);

export default App;
