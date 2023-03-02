import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonFabButton, IonFab } from "@ionic/react";
import { camera } from "ionicons/icons";
import "./Admin.css";


import Greeting from "../../components/Greeting";

const Admin: React.FC = () => {
  const [content, setContent] = useState([]);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="vrcafe-white">
        <div>
          <Greeting />

        </div>
        <IonButton className="ion-margin-top buttonText" color="vrcafe-secondary" href="/list">Gebruikers</IonButton>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Admin;