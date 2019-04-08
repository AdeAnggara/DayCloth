import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  categorySelected: any;
  clothList: any;
  constructor(public clothService: ClothService) {
    this.loadCloth();
  }
  loadCloth() {
    this.clothService.loadCloth(this.categorySelected).subscribe((response: Response) => {
      let data = response.json();
      for (let elem of data) {
        elem.gambar = elem.gambar.split(',');
      }
      this.clothList = data;
    });
  }
}