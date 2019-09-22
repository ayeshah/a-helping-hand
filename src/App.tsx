
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { wallet, swap, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';
import RecipientOnboarding from './pages/RecipientOnboarding';
import RecipientRegistration from './pages/RecipientRegistration';
import RecipientDonation from './pages/RecipientDonation';
import Purchase from './pages/Purchase';
import Profile from './pages/Profile';

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
import './custom.css'

import React, { Component } from 'react'
import Transactions from './pages/Transactions';

type Props = {

}

export default class App extends Component<Props> {

  constructor(props: Props) {
    super(props)
    localStorage.setItem("isAuthenticated", "true")
  }

  render() {

    const isAuthenticated =  localStorage.getItem("isAuthenticated");
    let pageContent;
    if(isAuthenticated == 'true'){

      pageContent = 
        <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/recipient/purchase">
          <IonIcon icon={wallet} />
          <IonLabel>Purchase</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/recipient/transactions">
          <IonIcon icon={swap} />
          <IonLabel>Transactions</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/recipient/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>;
    }
    else{
      pageContent = <IonApp >
            <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/recipient/onboarding" component={RecipientOnboarding} exact={true} />
          <Route path="/recipient/registration" component={RecipientRegistration} exact={true} />
          
          {/* <Route path="/tab2/details" component={Details} />
          <Route path="/tab3" component={Tab3} /> */}
          <Route exact path="/" render={() => <Redirect to="/recipient/donate" />} />
    </IonRouterOutlet>
    </IonReactRouter>
    </IonApp>;


      return pageContent;
          
    }

    return (
      <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/recipient/donate" component={RecipientDonation} exact={true} />
            <Route path="/recipient/purchase" component={Purchase} exact={true} />
            <Route path="/recipient/profile" component={Profile} exact={true} />
            <Route path="/recipient/transactions" component={Transactions} exact={true} />
            {/* <Route path="/tab1" component={Tab1} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab2/details" component={Details} />
            <Route path="/tab3" component={Tab3} /> */}
            <Route exact path="/" render={() => <Redirect to="/recipient/profile" />} />
          </IonRouterOutlet>
          {pageContent}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
    )
  }
}




