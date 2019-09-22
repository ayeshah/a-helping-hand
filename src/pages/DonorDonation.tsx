import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { IonPage, IonContent, IonGrid, IonRow, IonHeader, IonToolbar, IonTitle, IonCol , IonButton} from '@ionic/react';


type MyProps = {  };
interface MyState { scanAvailable: boolean, amount: number, recipient_id: string, recipient_alias: string };

export default class DonorDonation extends Component<any, MyState> {

    state: MyState;

    constructor(props: any){
        super(props)
        this.state = {
            scanAvailable:true,
            amount:0,
            recipient_id:'',
            recipient_alias:''
        }
        this.handleScan = this.handleScan.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    handleScan = (data: any) => {
        if (data) {
          this.setState({
            scanAvailable: true,
            recipient_alias: data.recipient_alias,
            recipient_id: data.recipient_id
          })
        }
      }
      handleError = (err: any) => {
        console.error(err)
      }

    render() {

        var { scanAvailable, recipient_alias } = this.state;
        let pageContent;

        if(scanAvailable){

            pageContent = 
            (
            <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Purchase</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent style={{ minHeight:"100%"}}>
                    <IonRow className="donation-prompt" >How much would you like to donate to 
                        <span className="alias"> {` ${recipient_alias} `}</span>
                    today?
                    </IonRow>
                    

                    <IonRow className="container">
                    <IonRow>
                        <IonCol size="6"><IonButton>$5</IonButton></IonCol>
                        <IonCol size="6"><IonButton>$10</IonButton></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="6"><IonButton>$15</IonButton></IonCol>
                        <IonCol size="6"><IonButton>$20</IonButton></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12"><IonButton>Other</IonButton></IonCol>
                        
                    </IonRow>

                    <IonRow>
                            <IonButton>Donate</IonButton>
                            
                    </IonRow>
                    </IonRow>

                    
                </IonContent>
                </IonPage>);
        }else{
 return (

    pageContent = <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Purchase</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent style={{ minHeight:"100%"}}>
                     
                    <IonRow className="text-overlay" style={{fontSize:"25px"}}>Scan recipient’s QR code to make a donation.</IonRow>
                    <QrReader
                    facingMode='environment'
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%', height:'100%' }}
                    />
                </IonContent>
                </IonPage>
      
        )
        }

        return pageContent;
       
    }
}
