import { Component, OnInit } from '@angular/core';
import {DataStorageService } from '../data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  message = null;

  constructor(private dataStorageService: DataStorageService , 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isLoggedIn = !!user;
    });

    this.dataStorageService.fetchData();
  }

  onSaveData() {
    this.dataStorageService.storeData();
    this.message = "Saved!";
    setTimeout(() => {
      this.message = null;
    },2000)
  }

  onFetchData() {
    this.dataStorageService.fetchData();
  }

  onLogout() {
    this.authService.logout();
  }

}
