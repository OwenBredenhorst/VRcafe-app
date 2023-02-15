import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
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
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import Profile from './pages/profile/Profile';
import Edit from './pages/profile/Edit';
import Rewards from './pages/rewards/Rewards';
import Admin from './pages/dashboard/Admin';
import List from './pages/dashboard/List';
import {contrast} from "ionicons/icons";

setupIonicReact();


const Header: React.FC = () => (
    <IonApp>

        <Route path="/list" component={List} exact={true} />

    </IonApp>
  );

export default Header;
