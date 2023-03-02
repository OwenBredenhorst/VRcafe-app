import { useRef } from "react";
import { IonContent, IonIcon, IonModal, IonAvatar, IonImg } from "@ionic/react";
import { basket, peopleCircle } from "ionicons/icons";
import "./Modal.css";

function Modal() {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.9} breakpoints={[0.9, 0.75, 0]}>
      <IonContent className="ion-padding">
        <div className="center">
          <IonAvatar class="ion-margin-top">
            <IonImg src="https://i.pravatar.cc/1000" />
          </IonAvatar>
        </div>
        <div className="center lineHeight">
          <p className="bold">Voornaam Achternaam</p>
          <p>dd/mm/jj</p>
        </div>
        <div className="modalButtons ion-margin-top lineHeight">
          <div>
            <a href="/orders">
              <IonIcon icon={basket} />
              <p>Bestellingen</p>
            </a>
          </div>
          <div>
            <a href="/friends">
              <IonIcon icon={peopleCircle} />
              <p>Vrienden</p>
            </a>
          </div>
        </div>
        <div className="qrCodeContainer ion-margin-top">
          <div className="identifierContainer">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
            <p>1234567890</p>
          </div>
          <div className="qrCode"></div>
        </div>
      </IonContent>
    </IonModal>
  );
}

export default Modal;
