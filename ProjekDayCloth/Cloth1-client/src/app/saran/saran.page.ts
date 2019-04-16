import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saran',
  templateUrl: './saran.page.html',
  styleUrls: ['./saran.page.scss'],
})
export class SaranPage implements OnInit {
  data: any = { nama: "", pendapat: "" };
  constructor() { }

  ngOnInit() {
  }

}
