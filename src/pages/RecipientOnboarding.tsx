import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IonSlides, IonSlide, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import './Onboarding.css'


type Props = {

}
export default class RecipientOnboarding extends Component<Props>  {

    constructor(props: Props) {
        super(props);
        this.proceedToRegistration = this.proceedToRegistration.bind(this);
      }


    proceedToRegistration(){

        // e.preventDefault();
    
        console.log("end of ")

        setTimeout(()=>{
            // this.props.history.push('/registration/donor');

        },3000);
    }


    render() {

        const slideOpts = {
            slidesPerView: 1,
            initialSlide: 0,
            speed: 0
          };
          
        return (
            <IonContent style={{ minHeight:"100%"}}>
              <IonSlides  className="container" style={{ minHeight:"100%", backgroundColor:"#712A80", color:"white"}} pager={true} options={slideOpts}>
                <IonSlide>
                  <IonGrid >
                  <IonRow className="heading-medium">
                      <IonCol>Receive donations for your daily needs</IonCol>
                    </IonRow>
                  <IonRow className="step-card">

                        <div style={{height:"30%"}}>
                            <div className="step-text">Step 1</div>
                            <div className="step-description">Make a profile and verify it at a local shelter</div>
                        </div>
                        <div className="center-horizontal">
                            <IonImg  src={require("../assets/img/logo.png")}/>
                        </div>
                        
                 
                  </IonRow>
                  </IonGrid>
                </IonSlide>
                <IonSlide>
                <IonGrid >
                  <IonRow className="heading-medium">
                      <IonCol>Receive donations for your daily needs</IonCol>
                    </IonRow>
                  <IonRow className="step-card">

                        <div style={{height:"30%"}}>
                            <div className="step-text">Step 2</div>
                            <div className="step-description">Use your unique QR code to collect donations</div>
                        </div>
                        <div className="center-horizontal">
                            <IonImg  src={require("../assets/img/hands.png")}/>
                        </div>
                 
                  </IonRow>
                  </IonGrid>
                </IonSlide>
                <IonSlide>
                <IonGrid >
                  <IonRow className="heading-medium">
                      <IonCol>Receive donations for your daily needs</IonCol>
                    </IonRow>
                  <IonRow className="step-card">

                        <div style={{height:"30%"}}>
                            <div className="step-text">Step 3</div>
                            <div className="step-description">Scan the QR code to pay for your eligible* purchases like food or clothing and take a picture of the receipt to complete the transaction  </div>
                        </div>
                        <div className="step-note">
                        * Ineligible purchases include alcohol and tobacco products. If you make an ineligible purchase you will receive a strike. If you receive more than 3 strikes the app will no longer be available to you.
                        </div>
                        <div>
                          <Link to='/recipient/registration'>Get Started</Link>
                        </div>
                 
                  </IonRow>
                  </IonGrid>
                </IonSlide>
              </IonSlides>
            </IonContent>
        )
    }
}


