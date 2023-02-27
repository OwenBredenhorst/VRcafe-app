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
    IonLabel,
    IonInput,
    IonDatetime,
    IonFooter,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle
} from "@ionic/react";
import { IonProgressBar } from '@ionic/react';
import {arrowBackOutline, cameraOutline, pencilOutline, radio} from "ionicons/icons";

import "../../theme/GlobalStyling.css";
import "./Achievement.css";
import UserService from "../../services/UserService";

import MainTabs from "../../components/MainTabs";

const Achievement: React.FC = () => {
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
                            <h2>Hier zijn je Achievements!</h2>
                        </div>

                        <div className="back-drop-right">
                            {/*<IonImg src={"assets/images/pf-logo.png"} alt="cur" style={{ alignSelf: 'center'}} />*/}
                            <img src="assets/images/pf-logo.png"/>
                        </div>
                    </div>

                    <div className="back-drop-bottom ">
                        <br/>
                    </div>

                    <div className="coupon-content" >

                    <IonCard >
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <img src="https://img.freepik.com/free-photo/man-wearing-vr-glasses-with-gradient-background_23-2148864957.jpg" alt="My Image" style={{ height: '100%', width: '30%' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <IonCardHeader style={{ flex: 1 }}>
                                    <IonCardTitle>Achievement name</IonCardTitle>
                                    <div style={{ fontSize: 'smaller' }}>Achievement description
                                        and more room for it</div>
                                </IonCardHeader>
                                <IonCardContent style={{ flex: 1 }}>
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#261B1B' }}>
                                            19/20
                                        </div>
                                        <IonProgressBar buffer={0.25} style={{ height: '21px', backgroundColor: '#781F3E' }}></IonProgressBar>
                                    </div>
                                </IonCardContent>
                            </div>
                        </div>
                    </IonCard>

                    </div>
                    {/*    content komt hier dus zorg dat je in de template dit ergens anders heb*/}


                </IonContent>
            </IonContent>

            {/* TODO fix name and place of files */}
            <MainTabs/>
        </IonPage>
);
};

export default Achievement;
