import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar, IonFooter } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {home, gift, person, trophy} from "ionicons/icons";


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
import "../theme/variables.css";
import "../theme/GlobalStyling.css";
import React from "react";

{/* TODO fix name and place of files */}
{/* TODO add hexa / just like figma */}
{/* TODO fix narbar nav locations*/}
const MainTabs: React.FC = () => (
  <IonFooter>
    <IonToolbar>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/"></Route>
          <Route exact path="/rewards"></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/welcome">
            {/*<div className="hex2">*/}
            {/*  */}
            {/*</div>*/}
            <IonIcon className="active-icon" icon={home} />
            <IonLabel>home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="login" href="/">
            <IonIcon icon={trophy} />
            <IonLabel>Coupon</IonLabel>
          </IonTabButton>
          <IonTabButton tab="rewards" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonToolbar>
  </IonFooter>
);

export default MainTabs;
