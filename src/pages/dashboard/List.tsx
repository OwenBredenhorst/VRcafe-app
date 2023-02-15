import React, {useEffect, useState} from "react";
import {IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons, IonImg} from "@ionic/react";
import {arrowBackOutline, cameraOutline, radio} from "ionicons/icons";
import "./List.css";

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
                <div className="back-drop-background" >
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


                    {/*    content komt hier  dus zorg dat je in de template dit ergens anders heb*/}


                </div>
            </IonContent>
        </IonPage>
    );
};

export default List;
