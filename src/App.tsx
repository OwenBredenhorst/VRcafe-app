import {Redirect, Route} from 'react-router-dom';
import {
    IonApp, IonContent, IonFooter, IonHeader, IonItem, IonPage, IonTitle, IonToolbar,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Onboarding from './pages/onboarding/Onboarding';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/home/Home';


import Edit from './pages/profile/Edit';

import Admin from './pages/dashboard/Admin';
import EditProfile from './pages/dashboard/EditProfile';
import {contrast} from "ionicons/icons";
import Welcome from "./pages/welcome/Welcome";
import LoginPre from "./pages/login/LoginPre";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Profile from "./pages/user/Profile";
import Coupon from "./pages/coupon/Coupon";
import Achievement from "./pages/achievement/Achievement";
import Order from "./pages/orders/Order";


setupIonicReact();


const App: React.FC = () => (

    <IonApp>
        {/*<IonHeader>*/}
        {/*    <IonToolbar>*/}

        {/*    </IonToolbar>*/}
        {/*</IonHeader>*/}
        <IonPage>
            <IonContent className="content-page">
                <IonReactRouter>
                    <Route path="/" component={Onboarding} exact={true}/>


                    <Route path="/onboarding" component={Onboarding} exact={true}/>
                    <Route path="/profile" component={Profile} exact={true}/>
                    <Route path="/edit" component={Edit} exact={true}/>
                    <Route path="/welcome" component={Welcome} exact={true}/>
                    <Route path="/login-pre" component={LoginPre} exact={true}/>
                    <Route path="/login" component={Login} exact={true}/>
                    <Route path="/register" component={Register} exact={true}/>
                    <Route path="/coupon" component={Coupon} exact={true}/>
                    <Route path="/achievement" component={Achievement} exact={true}/>
                    <Route path="/order" component={Order} exact={true}/>

                    <Route path="/admin" component={Admin} exact={true}/>
                    <Route path="/edit-profile" component={EditProfile} exact={true}/>
                </IonReactRouter>
            </IonContent>
        </IonPage>
    </IonApp>
);

export default App;
