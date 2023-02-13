import { IonContent, IonHeader, IonPage, IonToolbar, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton, IonButtons, IonIcon } from "@ionic/react";
import { personCircleOutline, qrCodeOutline } from "ionicons/icons";
import MainTabs from "../../components/MainTabs";
import Modal from "../../components/modal/Modal";

const Rewards: React.FC = () => {
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
      <IonContent fullscreen color="vrcafe-white">
        <Modal/>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Rewards;
