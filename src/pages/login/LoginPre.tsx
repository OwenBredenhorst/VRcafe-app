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
import "./LoginPre.css";
import "../../theme/GlobalStyling.css";

import UserService from "../../services/UserService";

import MainTabs from "../../components/MainTabs";
import SlideNextButton from "../../components/slider/Slider";


const LoginPre: React.FC = () => {
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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="content-logo">
                        <img src="assets/images/logo.png" alt="VRcafe logo"/>
                    </div>
                </div>
                
                </IonContent>
        </IonPage>
    );
};

export default LoginPre;
