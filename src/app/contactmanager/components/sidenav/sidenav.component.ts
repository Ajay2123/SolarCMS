import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = 
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  users:Observable<User[]>;
  constructor(
    zone:NgZone,
    private userService:UserService,
    private router:Router) {
    this.mediaMatcher.addListener(
      mql=> zone.run(() => this.mediaMatcher=mql ) 
    );
   }

   @ViewChild(MatDrawer) drawer:MatDrawer;
  ngOnInit() {
    this.users=this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data=>{
     if(data.length>0) this.router.navigate(['/contactmanager',data[0].id]);
    });

    this.router.events.subscribe(()=>{
      if(this.isScreenSmall())this.drawer.close();
      //close side nav
      
    });
  }
  isScreenSmall():boolean{
    return this.mediaMatcher.matches;
  }
}
