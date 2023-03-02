import React, {useEffect, useState} from "react";
import {
    IonContent,
    IonPage,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonRow,
    IonCol,
    IonGrid, IonRouterLink, IonProgressBar
} from "@ionic/react";

import "../../theme/GlobalStyling.css";

import MainTabs from "../../components/MainTabs";

const Profile: React.FC = () => {
    const [content, setContent] = useState([]);



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
                                                width: '120px',
                                                display: 'block',
                                                margin: 'auto',
                                                marginTop: '20px'
                                            }}/>

                                </div>
                                <IonCardHeader>
                                    <IonCardSubtitle  style={{marginTop: '10px', fontSize: '16px',textAlign: "center", color: 'white'}}>Owen Bredenhorst</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent style={{marginTop: '10px'}}>
                                    <IonProgressBar buffer={0.45} style={{ height: '21px', backgroundColor: '#781F3E' }}></IonProgressBar>
                                    <IonCardSubtitle  style={{fontSize: '10px',textAlign: "center", color: '#BFBFBF'}}>132/500 XP</IonCardSubtitle>
                                </IonCardContent>
                            </IonCard>
                        </div>
                    </div>


                    <IonGrid >
                        <IonRow style={{width: '90%',  margin: '0 auto' }}>

                            <IonCol size="12" size-md="8" offset-md="2" >
                                <IonCard style={{backgroundColor: '#1E1E1E', borderRadius: '19px'}}>
                                    <IonCardContent className="ion-text-center">
                                        {/* QR Code */}
                                        <img src="assets/images/qrcode.png" style={{ filter: "invert(1)" }} />
                                        <IonCardSubtitle>QR CODE</IonCardSubtitle>
                                    </IonCardContent>
                                </IonCard>

                                {/* Icon Cards */}
                                <IonRow>
                                    <IonCol size="6" style={{paddingRight: '5px', paddingTop: '20px'}}>
                                        <IonCard style={{borderRadius: '19px'}}>
                                            <IonCardContent className="ion-text-center">
                                                <IonRouterLink routerLink="/edit-profile">
                                                    <IonImg src="assets/images/vlag.png" alt="hexagon image with camera icon"></IonImg>
                                                    <IonCardSubtitle>Gegevens</IonCardSubtitle>
                                                </IonRouterLink>
                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6" style={{paddingLeft: '5px', paddingTop: '20px'}}>
                                        <IonCard style={{borderRadius: '19px'}}>
                                            <IonCardContent className="ion-text-center">
                                                <IonRouterLink routerLink="/order">
                                                    <IonImg src="assets/images/lampje.png" alt="hexagon image with camera icon"></IonImg>
                                                    <IonCardSubtitle>Bestellingen</IonCardSubtitle>
                                                </IonRouterLink>
                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>

                                    <IonCol size="6" style={{paddingRight: '5px', paddingTop: '20px'}}>
                                        <IonCard style={{borderRadius: '19px'}}>
                                            <IonCardContent className="ion-text-center">
                                                <IonRouterLink routerLink="/achievement">
                                                    <IonImg src="assets/images/verrekijkerpng.png" alt="hexagon image with camera icon"></IonImg>
                                                    <IonCardSubtitle>Achievement</IonCardSubtitle>
                                                </IonRouterLink>
                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>

                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    {/*    content komt hier dus zorg dat je in de template dit ergens anders heb*/}


                </IonContent>
            </IonContent>

            {/* TODO fix name and place of files */}
            <MainTabs/>
        </IonPage>
    );
};

export default Profile;
