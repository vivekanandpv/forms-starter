import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private restService: RestService) {}

  ngOnInit(): void {}

  getAdminResource() {
    this.restService.getAdminResources().subscribe((response: any) => {
      console.log('Server Response', response);
      alert(response.message);
    });
  }
}
