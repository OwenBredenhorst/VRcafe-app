import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons } from "@ionic/react";
import { personCircleOutline, qrCodeOutline } from "ionicons/icons";
import "./Home.css";
import MainTabs from "../../components/MainTabs";
import Modal from "../../components/modal/Modal";

import UserService from "../../services/UserService";
import Greeting from "../../components/Greeting";
import { Account } from "../user/Types";

const Home: React.FC = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getUser()
      .then((response) => {
        // axios creates a data object on its own. back-end also contains a data object so it becomes data.data
        setContent(response.data.data);
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
          <IonButtons slot="start">
            <IonButton href="/profile">
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton id="open-modal" expand="block">
              <IonIcon icon={qrCodeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="vrcafe-white">
        <Modal />
        <div>
          <Greeting />
          {content.map((entry: Account) => (
            <p>{entry.email}</p>
          ))}
        </div>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Home;
