import React, {useEffect, useState} from "react";
import {
    IonContent,
    IonPage,
    IonButton,
    IonLabel, IonInput, IonDatetime, IonFooter, IonItem
} from "@ionic/react";
import "./Login.css";
import "../../theme/GlobalStyling.css";



const LoginPre: React.FC = () => {
    const [content, setContent] = useState([]);


    return (
        <IonPage>
            <IonContent fullscreen color="vrcafe-main">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="content-logo">
                        <img src="assets/images/logo.png" alt="VRcafe logo"/>
                    </div>
                </div>

                <div className="parent-container">
                    <div className="login-form-submit" >
                            <h1 style={{textAlign: "left", color: '#D2CFCF', fontSize: '40px'}}>Login</h1>
                                <IonInput className="login-input" placeholder=" Username" type="text" ></IonInput>
                                <IonInput className="login-input" placeholder="Password" type="text" ></IonInput>
                            <p style={{textAlign: "left", color: '#D2CFCF', fontSize: '13px', padding: '10px'}}>Wachtwoord vergeten</p>
                            <IonButton href="/welcome" fill="clear" className="slider-next" style={{  marginTop: '90px', border: '25px', textAlign: "center"}}>Login</IonButton>
                        <a href="/register"><p>Geen account? maak er een!</p></a>
                    </div>
                </div>
                </IonContent>
        </IonPage>
    );
};

export default LoginPre;
