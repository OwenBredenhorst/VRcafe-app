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
import {getAllUser} from "../../services/UserService";
import {getAllPost} from "../../services/PostService";
import {Post} from "../../models/Post";

const Welcome: React.FC = () => {

    const [items, setPost] = useState<Post[]>([]);
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(4);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const contentRef = useRef<HTMLIonContentElement>(null);
    const lastCardRef = useRef<HTMLIonCardElement | null>(null);

    useEffect(() => {



        getAllPost()
            .then(data => {
                setPost(data);
                console.log(data); // Log the items to the console
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        function handleScroll() {
            const content = contentRef.current;
            if (content) {
                const { scrollTop, scrollHeight, clientHeight } = content;
                if (scrollTop + clientHeight >= scrollHeight - 100) {
                    setIsLoading(true);
                    setTimeout(() => {
                        setStartIndex((prevStartIndex) => prevStartIndex + 5);
                        setEndIndex((prevEndIndex) => prevEndIndex + 5);
                        setIsLoading(false);
                    }, 1000);
                }
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function test() {
        console.log(sessionStorage.getItem("userInfo",))

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
                            <img src={JSON.parse(sessionStorage.userInfo)?.img ?? "assets/images/pf-logo.png"}
                                 onClick={test}/>
                        </div>
                    </div>

                    <div className="back-drop-bottom ">
                        <br/>
                    </div>

                    <div className="card-content" style={{ width: "100%", height: "600px" }}>
                        <div className="card-container" style={{ marginLeft: "10%", marginTop: "2em", width: "100%", height: "200px" }}>
                            {items.map((item) => (
                                <IonCard style={{ marginTop: "2em" }} key={item.id}>
                                    <IonImg src={item.img} />
                                    <IonCardHeader>
                                        <IonCardTitle className="card-title">{item.title}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent className="card-p">{item.description}</IonCardContent>
                                </IonCard>
                            ))}
                        </div>
                    </div>

                </IonContent>
            </IonContent>

            {/* TODO fix name and place of files */}
            <MainTabs/>
        </IonPage>
    );
};

export default Welcome;
