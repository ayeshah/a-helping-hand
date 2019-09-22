import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { IonImg, IonPage, IonContent, IonGrid, IonRow, IonHeader, IonToolbar, IonTitle, IonCol , IonButton} from '@ionic/react';
import axios from 'axios';


type MyProps = {  };
interface MyState { scanAvailable: boolean, success: boolean, amount: number, recipient_id: string, donor_id: number, recipient_alias: string };

export default class DonorDonation extends Component<any, MyState> {

    state: MyState;

    constructor(props: any){
        super(props)
        this.state = {
            scanAvailable:false,
            success:false,
            amount:100,
            recipient_id:'1',
            recipient_alias:'Ayesha',
            donor_id:2
        }
        this.handleScan = this.handleScan.bind(this)
        this.handleError = this.handleError.bind(this)
        this.donate = this.donate.bind(this)
    }

    donate(e: any){

        console.log("donating...")

        const { amount, donor_id, recipient_id } = this.state;
        axios.post("http://localhost:3001/frontend/donor/donate", { amount, donor_id, recipient_id }) .then(res => {
            
            console.log("successful");
            
            this.setState({ success:true });
          })
    }

    handleScan = (data: any) => {
        if (data) {

          console.log("data", data);
          var dataJSON = JSON.parse(data);
          console.log(dataJSON);

          axios.get("http://localhost:3001/frontend/recipient/profile/"+dataJSON.id)
          .then(res => {
            
            this.setState({ recipient_alias:res.data.alias });
          })


          
          this.setState({
            scanAvailable: true,
            recipient_alias: data.recipient_alias,
            recipient_id: dataJSON.id
          })
        }
      }
      handleError = (err: any) => {
        console.error(err)
      }

    render() {

        var { scanAvailable, recipient_alias , amount, success} = this.state;
        let pageContent;

        if(success){
            pageContent = 
            (
                <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Purchase</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent  style={{ minHeight:"100%"}}>
                    <IonGrid style={{marginTop: "115px", marginBottom:"155px", marginLeft:"41px", marginRight:"41px"}}>
                        <IonRow className="center-horizontal">
                            <IonImg  src={require("../assets/img/logo.png")}/>
                        </IonRow>

                        <IonRow style={{color:"#BD10E0", fontSize:"36px", textAlign:'center'}}>{`$ ${amount}`}</IonRow>
    
                        <IonRow style={{color:"black", fontSize:"18px"}}>Your donation is complete!</IonRow>
                        </IonGrid>
                        
                    </IonContent>
                    </IonPage>);
        }

        else if(scanAvailable){

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
                        <span className="alias"> {` ${recipient_alias} `+' '}</span>
                    {` today?`}
                    </IonRow>
                    

                    <IonRow className="container">
                    <IonRow>
                        <IonCol ><IonButton className="donate-button"  fill="outline" onClick={()=> this.setState({amount:5})} >$5</IonButton></IonCol>
                        <IonCol ><IonButton className="donate-button"  fill="outline" onClick={()=> this.setState({amount:10})}>$10</IonButton></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol ><IonButton className="donate-button"  fill="outline" onClick={()=> this.setState({amount:15})}>$15</IonButton></IonCol>
                        <IonCol ><IonButton className="donate-button"  fill="outline" onClick={()=> this.setState({amount:20})}>$20</IonButton></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol ><IonButton className="donate-button"  fill="outline">Other</IonButton></IonCol>
                        
                    </IonRow>

                    <IonRow>
                            <IonButton className="submit-button"   fill="outline" onClick={this.donate}>Donate</IonButton>
                            
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
