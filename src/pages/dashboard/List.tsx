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
    IonLabel, IonInput
} from "@ionic/react";
import {arrowBackOutline, cameraOutline, radio} from "ionicons/icons";
import "./List.css";
import "../../theme/GlobalStyling.css";

import UserService from "../../services/UserService";
import {Account} from "../user/Types";

const List: React.FC = () => {
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
            <IonContent>
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


                    <IonPage>
                        <form className="account-info-form">

                            <IonInput className="input-form" placeholder="OwenBredenhorst" type="email" name="email"
                                      required></IonInput>
                            <IonIcon name="person" color="primary" slot="end"></IonIcon>


                            <div className="login-form">
                                <IonInput placeholder="**********************" type="password" name="password"
                                          required></IonInput>
                            </div>
                            <div className="login-form">
                                <IonInput placeholder="OwenBredenhorst@gmail.com" type="password" name="password"
                                          required></IonInput>
                            </div>
                            <div className="firstNameLast">
                                <div className="register-form">
                                    <IonInput placeholder="Owen" type="text" name="firstName" autocapitalize="on"
                                              required></IonInput>
                                </div>
                                <div className="register-form">
                                    <IonInput placeholder="Bredenhorst" type="text" name="lastName" autocapitalize="on"
                                              required></IonInput>
                                </div>
                            </div>
                            <div className="login-form">
                                <IonInput placeholder="12/07/1999" type="password" name="password" required></IonInput>
                            </div>
                            <div className="ion-text-center">
                                <IonButton type="submit" fill="clear" className="form-submit">Save</IonButton>
                            </div>
                        </form>
                    </IonPage>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default List;
