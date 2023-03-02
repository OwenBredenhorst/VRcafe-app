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
import {arrowBackOutline, cameraOutline, pencilOutline, radio} from "ionicons/icons";
import "./EditProfile.css";
import "../../theme/GlobalStyling.css";

import UserService from "../../services/UserService";

import MainTabs from "../../components/MainTabs";

const EditProfile: React.FC = () => {
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
            <IonContent fullscreen color="vrcafe-main">
                <IonContent className="back-drop-background">
                    <div className="back-drop">
                        <div className="back-drop-left">
                            <div className="logo-top-nav">
                                <img src="assets/images/logo.png" alt="VRcafe logo"
                                     style={{alignSelf: "center"}}/>
                            </div>
                            <p>Goedenavond, Owen 👋</p>
                            <h2>Hier zijn je account gegevens</h2>
                        </div>

                        <div className="back-drop-right">
                            {/*<IonImg src={"assets/images/pf-logo.png"} alt="cur" style={{ alignSelf: 'center'}} />*/}
                            <img src="assets/images/pf-logo.png"/>
                        </div>
                    </div>

                    <div className="back-drop-bottom ">
                        <br/>
                    </div>


                    {/*    content komt hier dus zorg dat je in de template dit ergens anders heb*/}


                    <div className="parent-container">
                        <div className="register-form-submit">
                            <h1>Registeren</h1>
                            <br/> <br/> <br/>
                            <IonInput required className="edit-input" placeholder="Gebruikers naam" type="text"></IonInput>
                            <IonInput required className="edit-input" placeholder="Wachtwoord" type="text"></IonInput>
                            <IonInput required className="edit-input" placeholder="Herhaal wachtwoord" type="text"></IonInput>

                            <div style={{display: 'flex'}}>
                                <IonInput required className="edit-input" placeholder="Voornaam" type="text"></IonInput>
                                <IonInput required style={{ marginLeft: '5px'}} className="edit-input" placeholder="Achternaam" type="text"></IonInput>
                            </div>

                            <IonInput className="edit-input" placeholder="Leeftijd" type="number"></IonInput>

                            <IonButton href="/welcome" fill="clear" className="slider-next"
                                       style={{marginTop: '90px', border: '25px'}}>Save</IonButton>

                        </div>
                    </div>


                </IonContent>
            </IonContent>

            {/* TODO fix name and place of files */}
            <MainTabs/>
        </IonPage>
    );
};

export default EditProfile;
