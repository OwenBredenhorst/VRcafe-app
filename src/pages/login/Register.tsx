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
import "./Register.css";
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
                </div>

                <div className="parent-container">
                    <div className="register-form-submit">
                        <h1>Registeren</h1>
                        <br/> <br/> <br/>
                        <IonInput className="login-input" placeholder="Gebruikers naam" type="text"></IonInput>
                        <IonInput className="login-input" placeholder="Wachtwoord" type="text"></IonInput>
                        <IonInput className="login-input" placeholder="Herhaal wachtwoord" type="text"></IonInput>
                        <IonInput className="login-input" placeholder="Voornaam" type="text"></IonInput>
                        <IonInput className="login-input" placeholder="Achternaam" type="text"></IonInput>

                        <IonButton href="/welcome" fill="clear" className="slider-next"
                                   style={{marginTop: '90px', border: '25px'}}>Maak een account</IonButton>
                      <a href="/login"><p>Of login hier!</p></a>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LoginPre;
