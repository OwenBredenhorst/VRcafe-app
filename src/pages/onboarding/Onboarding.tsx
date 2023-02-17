import { IonContent, IonPage, IonLabel, IonInput, IonButton, IonHeader, IonTitle, IonButtons, IonToolbar } from "@ionic/react";

import "./Onboarding.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import { Pagination } from "swiper";
import SlideNextButton from "../../components/slider/Slider";

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

const Onboarding: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="vrcafe-main">
          <IonTitle ></IonTitle>
          <IonButtons slot="end">
            <IonButton href="/EditProfile">Skip</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="vrcafe-main" fullscreen>
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <div className="slideContent slide1">
              <img src="assets/images/LogoAnim.gif" alt="Animation of the VRcafe logo" />
              <div className="information-form">
                <h1>Welkom in de VRcafe app!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus congue pellentesque</p>
              </div>
              <div className="navigator">
                <SlideNextButton />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideContent slide2">
              <img src="assets/images/LogoAnim.gif" alt="Animation of the VRcafe logo" />
              <div>
                <h1>Scan de QR code</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus congue pellentesque</p>
              </div>
              <div className="navigator">
                <SlideNextButton></SlideNextButton>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
