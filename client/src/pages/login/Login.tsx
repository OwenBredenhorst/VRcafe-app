import React, {useEffect, useState} from "react";
import {
    IonContent,
    IonPage,
    IonButton,
    IonLabel, IonInput, IonDatetime, IonFooter, IonItem
} from "@ionic/react";
import "./Login.css";
import "../../theme/GlobalStyling.css";

import {getAllUser, getLoginInfo} from "../../services/UserService";


import { useHistory } from 'react-router-dom';
import {warning} from "ionicons/icons";
const LoginPre: React.FC = () => {
    const history = useHistory();

    const [content, setContent] = useState<string | null>(null);

    const handleLogin = () => {
        const emailInput = document.getElementById("email-input") as HTMLInputElement;
        const passwordInput = document.getElementById("password-input") as HTMLInputElement;
        const email = emailInput.value;
        const password = passwordInput.value;

        getLoginInfo(email, password)
            .then(data => {
                sessionStorage.clear()
                setContent(data);
                console.log(data); // Log the items to the console
                sessionStorage.setItem('userInfo', JSON.stringify(data));

                console.log(sessionStorage)
                // Check if the user is logged in
                if (data != null ) {
                    // Redirect to the welcome page
                    history.push('/welcome');
                } else {
                    // Show an error message
                    setContent("Login error: Invalid email or password.");
                }
            })
            .catch(error => {
                console.error(error);
                // Show an error message
                setContent("An error occurred while logging in.");
            });




    };
    return (
        <IonPage>
            <IonContent fullscreen color="vrcafe-main">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="content-logo">
                        <img src="assets/images/logo.png" alt="VRcafe logo"/>
                    </div>
                </div>

                <div className="parent-container">
                    <div className="login-form-submit">
                        <h1 style={{textAlign: "left", color: '#D2CFCF', fontSize: '40px'}}>Login</h1>
                        <IonInput id="email-input" className="login-input" placeholder=" Username" type="text"/>
                        <IonInput id="password-input" className="login-input" placeholder="Password" type="password"/>
                        <p style={{textAlign: "left", color: '#D2CFCF', fontSize: '13px', padding: '10px'}}>Wachtwoord
                            vergeten</p>
                        {content && <p style={{color: 'red'}}>{content}</p>}
                        <IonButton onClick={handleLogin} fill="clear" className="slider-next"
                                   style={{marginTop: '90px', border: '25px', textAlign: "center"}}>Login</IonButton>
                        <a href="/register"><p>Geen account? maak er een!</p></a>


                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
};


export default LoginPre;
