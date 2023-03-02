import { IonContent, IonHeader, IonPage, IonButtons, IonButton, IonToolbar, IonIcon, IonLabel, IonInput, IonItem } from "@ionic/react";
import { personCircleOutline, qrCodeOutline, pencilOutline } from "ionicons/icons";
import "./Edit.css";
import MainTabs from "../../components/MainTabs";
import Modal from "../../components/modal/Modal";

const Edit: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
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
      <IonContent fullscreen className="editForm">
      <Modal/>
        <form>
          <IonItem lines="none" color="vrcafe-main">
            <IonLabel position="stacked">Naam</IonLabel>
            <IonInput placeholder="" type="text" disabled></IonInput>
          </IonItem>
          <IonItem lines="none" color="vrcafe-main">
            <IonLabel position="stacked">Geboortedatum</IonLabel>
            <IonInput placeholder="" type="date" disabled></IonInput>
          </IonItem>
          <IonItem lines="none" color="vrcafe-main">
            <IonLabel position="stacked">Gebruikersnaam</IonLabel>
            <IonInput placeholder="" type="text" disabled></IonInput>
            <IonIcon icon={pencilOutline} slot="end"></IonIcon>
          </IonItem>
          <IonItem lines="none" color="vrcafe-main">
            <IonLabel position="stacked">Wachtwoord</IonLabel>
            <IonInput placeholder="" type="password" disabled></IonInput>
            <IonIcon icon={pencilOutline} slot="end"></IonIcon>
          </IonItem>
          <IonItem lines="none" color="vrcafe-main">
            <IonLabel position="stacked">Emailadres</IonLabel>
            <IonInput placeholder="" type="email" disabled></IonInput>
            <IonIcon icon={pencilOutline} slot="end"></IonIcon>
          </IonItem>
          <IonButton type="submit" fill="clear" className="register-form-submit">
            Opslaan
          </IonButton>
        </form>
      </IonContent>
      <MainTabs/>
    </IonPage>
  );
};

export default Edit;
