import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { UserUpdateService } from '../user-update.service';
import { ModalController } from '@ionic/angular';
import { UserUpdatePage } from '../user-update/user-update.page';
import { UserAddPage } from '../user-add/user-add.page';

@Component({
  selector: 'app-datauser',
  templateUrl: './datauser.page.html',
  styleUrls: ['./datauser.page.scss'],
})
export class DatauserPage {

  userList: any;
  constructor(
    public userService: UserUpdateService,
    public modalController: ModalController){
      this.loadUser();
    }
    loadUser(){
      this.userService.loadUser().subscribe((response: Response) => {
        this.userList = response.json();
        console.log(this.userList);
      });
    }
    async goDetailUser(user){
      const modal = await this.modalController.create({
        component: UserUpdatePage,
        componentProps: { value: user } 
      });
      modal.onDidDismiss().then(() => { this.loadUser() });
      return await modal.present();
    }
    async goAddUser(){
      const modal = await this.modalController.create({
        component: UserAddPage
      });
      modal.onDidDismiss().then(() => { this.loadUser() });
      return await modal.present();
    }
    deleteUser(userId) {
      this.userService.deleteUser(userId).subscribe((response: Response) => {
      if (response.ok){
        this.userService.message('data berhasil dihapus');
      }
      this.loadUser();
    }); 
     }
}


