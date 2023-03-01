import React, {useEffect, useState} from "react";
import {
    IonCard,
    IonCardContent,
    IonCardHeader, IonCardTitle,
    IonContent, IonItem, IonLabel, IonList,
    IonPage,
} from "@ionic/react";

import "../../theme/GlobalStyling.css";
import "./Order.css";

import MainTabs from "../../components/MainTabs";

const Profile: React.FC = () => {
    const [content, setContent] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
    };

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
                            <h2>Hier zijn je bestelingen</h2>
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
                            <IonCard style={{width: '90%'}} onClick={handleClick}>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '1em'
                                        }}>
                                            <div>12/1/199</div>
                                            <div
                                                onClick={(event) => event.stopPropagation()}>{expanded ? '+' : '-'}</div>
                                        </div>
                                    </IonCardTitle>
                                </IonCardHeader>
                                {expanded && (
                                    <IonCardContent >
                                        <IonList style={{backgroundColor: '#1E1E1E'}}lines="none">
                                            <IonItem color='secondary'>
                                                    <IonLabel>Fanta</IonLabel>
                                                    <div slot="end">€2,50</div>
                                            </IonItem>


                                            <IonItem color='secondary'>
                                                <IonLabel>Lays Chips Paprika</IonLabel>
                                                <div slot="end">€1,50</div>
                                            </IonItem>


                                            <IonItem color='secondary'>
                                                <IonLabel>Fanta</IonLabel>
                                                <div slot="end">€2,50</div>
                                            </IonItem>


                                            <IonItem color='secondary'>
                                                <div slot="end">Totaal: €12,50</div>
                                            </IonItem>
                                        </IonList>

                                    </IonCardContent>
                                )}
                            </IonCard>
                        </div>

                        <div className="card-container">
                            <IonCard style={{width: '90%'}} onClick={handleClick}>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '1em'
                                        }}>
                                            <div>12/1/199</div>
                                            <div
                                                onClick={(event) => event.stopPropagation()}>{expanded ? '+' : '-'}</div>
                                        </div>
                                    </IonCardTitle>
                                </IonCardHeader>
                                {expanded && (
                                    <IonCardContent >
                                        <IonList style={{backgroundColor: '#1E1E1E'}}lines="none">
                                            <IonItem color='secondary'>
                                                <IonLabel>Fanta</IonLabel>
                                                <div slot="end">€2,50</div>
                                            </IonItem>


                                            <IonItem color='secondary'>
                                                <IonLabel>Lays Chips Paprika</IonLabel>
                                                <div slot="end">€1,50</div>
                                            </IonItem>


                                            <IonItem color='secondary'>
                                                <IonLabel>Fanta</IonLabel>
                                                <div slot="end">€2,50</div>
                                            </IonItem>

                                            <IonItem color='secondary'>
                                                <div slot="end">Totaal: €12,50</div>
                                            </IonItem>
                                        </IonList>

                                    </IonCardContent>
                                )}
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
