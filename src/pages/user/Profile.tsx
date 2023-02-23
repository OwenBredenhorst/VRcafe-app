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
import {arrowBackOutline, cameraOutline, pencilOutline, radio} from "ionicons/icons";

import "../../theme/GlobalStyling.css";

import UserService from "../../services/UserService";

import MainTabs from "../../components/MainTabs";

const Profile: React.FC = () => {
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

                    <div className="card-content">
                        <div className="card-container">
                            <IonCard className="card-pf">
                                <div style={{position: 'relative'}}>
                                    <IonImg src="assets/images/pf-logo.png" alt="hexagon image with camera icon"
                                            style={{
                                                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0 50%)',
                                                width: '100px',
                                                display: 'block',
                                                margin: 'auto'
                                            }}/>
                                    <img src="assets/images/logo.png" alt="camera icon" style={{
                                        height: '2rem',
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        margin: '0.5rem'
                                    }}/>
                                </div>
                                <IonCardHeader>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonCardTitle>Card Title</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus vel
                                    tellus luctus, quis placerat quam vehicula.
                                </IonCardContent>
                            </IonCard>
                        </div>
                    </div>
                    {/*    content komt hier dus zorg dat je in de template dit ergens anders heb*/}


                </IonContent>
            </IonContent>

            {/* TODO fix name and place of files */}
            <MainTabs/>
        </IonPage>
    );
};

export default Profile;
