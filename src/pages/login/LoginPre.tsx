import React, {useEffect, useState} from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonIcon,
    IonButton,
    IonToolbar,
    IonButtons,
    IonImg,
    IonLabel, IonInput, IonDatetime, IonFooter, IonItem
} from "@ionic/react";
import {arrowBackOutline, cameraOutline, logoFacebook, logoGoogle, pencilOutline, radio} from "ionicons/icons";
import "./LoginPre.css";
import "../../theme/GlobalStyling.css";

import UserService from "../../services/UserService";

import MainTabs from "../../components/MainTabs";
import SlideNextButton from "../../components/slider/Slider";


const LoginPre: React.FC = () => {
    const [content, setContent] = useState([]);


    return (
        <IonPage>
            <IonContent fullscreen color="vrcafe-main">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="content-logo">
                        <img style={{  width: '100%'}} src="assets/images/LogoAnim.gif" alt="Animation of the VRcafe logo" />
                    </div>
                </div>

                <div className="parent-container">
                    <div className="login-form" >
                        <IonButton href="/login" className="login-button-main"   >
                            <IonImg  className="login-button-icon"  src="assets/images/logo.png" alt="Logo" style={{  marginRight: '8px', width: '37px'}} />
                           login
                        </IonButton>
                        <IonButton  href="/welcome" className="login-button" style={{borderRadius: '50px'}}>
                            <IonIcon slot="start" style={{marginRight: '8px'}} icon={logoFacebook} />
                            Login with Facebook
                        </IonButton>
                        <IonButton href="/welcome" className="login-button">
                            <IonIcon  slot="start" style={{marginRight: '8px'}}  icon={logoGoogle} />
                            Login with Google
                        </IonButton>
                        <p>Or Sign-up</p>
                    </div>
                </div>
                </IonContent>
        </IonPage>
    );
};

export default LoginPre;
