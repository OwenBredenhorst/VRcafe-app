import React, {useEffect, useRef, useState} from "react";
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
import "./Welcome.css";
import "../../theme/GlobalStyling.css";

import MainTabs from "../../components/MainTabs";

const Welcome: React.FC = () => {

    function test(){
        console.log(sessionStorage.getItem("userInfo", ))
    }

    return (
        <IonPage>
            <IonContent>
                <IonContent className="back-drop-background" id="intersection-target">
                    <div className="back-drop">
                        <div className="back-drop-left">
                            <div className="logo-top-nav">
                                <img src="assets/images/logo.png" alt="VRcafe logo"
                                     style={{alignSelf: "center"}}/>
                            </div>
                            <p>Goedenavond, {JSON.parse(sessionStorage.userInfo)?.firstName ?? ''} 👋</p>
                            <h2>Wat is er vandaag nieuw?</h2>
                        </div>

                        <div className="back-drop-right">
                            {/*<IonImg src={"assets/images/pf-logo.png"} alt="cur" style={{ alignSelf: 'center'}} />*/}
                            <img onClick={test} src="assets/images/pf-logo.png"/>
                        </div>
                    </div>

                    <div className="back-drop-bottom ">
                        <br/>
                    </div>

                    <div className="card-content">
                        <div className="card-container">
                            <IonCard >
                                <IonImg src="https://www.vrcafehaarlem.nl/wp-content/uploads/2021/06/vrcafe-1.jpeg" />
                                <IonCardHeader>
                                    <IonCardTitle className="card-title">Title of the Card</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent  className="card-p">
                                    Here is some information text about the card. It can be multiple lines long.
                                </IonCardContent>
                            </IonCard>
                        </div>

                        <div className="card-container">
                            <IonCard >
                                <IonImg src="https://1001.pics/img/369x175x2/listings/bd702b5b-c5ee-4b00-8a97-83b5777ecc35/900x600/vr-racen.fpcaee0627.webp" />
                                <IonCardHeader>
                                    <IonCardTitle className="card-title">Title of the Card</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent  className="card-p">
                                    Here is some information text about the card. It can be multiple lines long.
                                </IonCardContent>
                            </IonCard>
                        </div>


                        <div className="card-container">
                            <IonCard >
                                <IonImg src="https://image.coolblue.nl/624x351/content/875572a05d5dea6ba27785e1abc71203" />
                                <IonCardHeader>
                                    <IonCardTitle className="card-title">Title of the Card</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent  className="card-p">
                                    Here is some information text about the card. It can be multiple lines long.
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

export default Welcome;
