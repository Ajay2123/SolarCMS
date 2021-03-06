import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleNavigation=new EventEmitter<void>();
  constructor(
    private dialog:MatDialog,
    private snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit() {
  }
  openAddContactDialog():void{
    let dialogRef=this.dialog.open(NewContactDialogComponent,{width:'450px'});

    dialogRef.afterClosed()
    .subscribe(result=>{
      console.log('the dialog was closed',result);
      error=>{console.log("Failed to add contact!");}

      if(result){
        this.openSnackBar("Contact Added","Navigate")
        .onAction().subscribe(()=>{
          //navigation
          this.router.navigate(['/contactmanager',result.id]);
        });
      }
    });
  
  }
  
  openSnackBar(message: string, action: string):MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
