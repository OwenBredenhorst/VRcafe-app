import React, {useEffect, useState} from "react";
import {
    IonContent,
    IonPage,
    IonButton,
    IonInput, IonLabel, IonItem, IonDatetime,
} from "@ionic/react";
import "./Register.css";
import "../../theme/GlobalStyling.css";
import {getLoginInfo, sendLoginInfo} from "../../services/UserService";
import {useHistory} from "react-router-dom";



const Register: React.FC = () => {
    const [content, setContent] = useState([]);

    const history = useHistory();
    const handleLogin = () => {
        const usernameInput = document.getElementById("username") as HTMLInputElement;
        const passwordInput = document.getElementById("password") as HTMLInputElement;
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const firstnameInput = document.getElementById("firstname") as HTMLInputElement;
        const lastnameInput = document.getElementById("lastname") as HTMLInputElement;

        const username = usernameInput.value;
        const password = passwordInput.value;
        const email = emailInput.value;
        const lastname = lastnameInput.value;
        const firstname = firstnameInput.value;


        sendLoginInfo(username, password, email, lastname, firstname)
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
                    alert("Error");
                }
            })
            .catch(error => {
                console.error(error);
                // Show an error message
                alert("Error");
            });

    };

    // @ts-ignore
    return (
        <IonPage>
            <IonContent fullscreen color="vrcafe-main">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                </div>

                <div className="parent-container">
                    <div className="register-form-submit">
                        <h1>Registeren</h1>
                        <br/> <br/> <br/>
                        <IonInput id="username" className="login-input" placeholder="Gebruikers naam" type="text"></IonInput>
                        <IonInput id="password" className="login-input" placeholder="Wachtwoord" type="text"></IonInput>
                        <IonInput id="email" className="login-input" placeholder="email" type="text"></IonInput>

                        <div style={{display: 'flex'}}>
                            <IonInput id="firstname" className="login-input" placeholder="Voornaam" type="text"></IonInput>
                            <IonInput id="lastname" className="login-input" placeholder="Achternaam" type="text"></IonInput>
                        </div>

                        <IonInput id="age" className="login-input" placeholder="Leeftijd" type="number"></IonInput>

                        <IonButton onClick={handleLogin}  href="/welcome" fill="clear" className="slider-next"
                                   style={{marginTop: '90px', border: '25px'}}>Maak een account</IonButton>
                        <a href="/login"><p>Of login hier!</p></a>
                    </div>
                </div>
            </IonContent>
        </IonPage>




    );
};

export default Register;
