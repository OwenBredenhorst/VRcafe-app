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
import "./Coupon.css";
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
                            <h2>Hier zijn je coupons!</h2>
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
                        <div className="coupon-container">

                            <IonCard style={{ width: '85%'}}>
                                <div style={{ background: 'linear-gradient(to bottom, rgba(29,25,32,1), rgba(29,25,32,0.8)), url(assets/images/logo.png) center center / contain no-repeat', padding: '16px', position: 'relative' , height: '117px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: '40px' , opacity: '10.2'  }}>10% OFF</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent style={{ textAlign: 'center', color: 'white', opacity: '1' }}>
                                        Hier is wat info over de coupon
                                    </IonCardContent>
                                </div>
                                <div style={{ backgroundColor: '#FD3E81', padding: '16px', textAlign: 'center' }}>
                                    <img src="https://static.vecteezy.com/system/resources/previews/001/199/360/original/barcode-png.png" alt="barcode" style={{ width: '90%', height: '80px'  }} />
                                </div>
                            </IonCard>

                        </div>
                        <div className="coupon-container">

                            <IonCard style={{ width: '85%'}}>
                                <div style={{ background: 'linear-gradient(to bottom, rgba(29,25,32,1), rgba(29,25,32,0.8)), url(assets/images/logo.png) center center / contain no-repeat', padding: '16px', position: 'relative' , height: '117px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: '40px' , opacity: '10.2'  }}>80% OFF</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent style={{ textAlign: 'center', color: 'white', opacity: '1' }}>
                                        Hier is wat info over de coupon
                                    </IonCardContent>
                                </div>
                                <div style={{ backgroundColor: '#FD3E81', padding: '16px', textAlign: 'center' }}>
                                    <img src="https://static.vecteezy.com/system/resources/previews/001/199/360/original/barcode-png.png" alt="barcode" style={{ width: '90%', height: '80px'  }} />
                                </div>
                            </IonCard>

                        </div>


                        <div className="coupon-container">

                            <IonCard style={{ width: '85%'}}>
                                <div style={{ background: 'linear-gradient(to bottom, rgba(29,25,32,1), rgba(29,25,32,0.8)), url(assets/images/logo.png) center center / contain no-repeat', padding: '16px', position: 'relative' , height: '117px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: '40px' , opacity: '10.2'  }}>5,- OFF</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent style={{ textAlign: 'center', color: 'white', opacity: '1' }}>
                                        Hier is wat info over de coupon
                                    </IonCardContent>
                                </div>
                                <div style={{ backgroundColor: '#FD3E81', padding: '16px', textAlign: 'center' }}>
                                    <img src="https://static.vecteezy.com/system/resources/previews/001/199/360/original/barcode-png.png" alt="barcode" style={{ width: '90%', height: '80px'  }} />
                                </div>
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
