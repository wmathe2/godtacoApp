import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private answers = ["Tio Javi's",'Mestizo','Superior Grill',"Fuzzy's Taco Shop", "Zippy's",
  'Caliente Mexican Craving', "Izzo's Illegal Burrito",'La Carreta', 'Las Palmas', 'Chipotle']

    constructor(private toastCtrl: ToastController) {}

    giveAnswer() {
      this.cssClass = "animated shake";
      let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
      // this.presentToast(answer);

      var temp = this;
      setTimeout(function(){
        temp.presentToast(answer);
      }, 2000)
    }

    async presentToast(answer) {
      const toast = await this.toastCtrl.create({
        message: answer,
        duration: 5000,
        position: 'bottom'
      });

      toast.onDidDismiss().then(() => {
        console.log('toast dismissed');
        this.cssClass = "";
      });
      toast.present();
    }

  }
