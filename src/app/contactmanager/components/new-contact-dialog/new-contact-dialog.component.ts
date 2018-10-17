import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {
  avatars=[ 'svg-1',
            'svg-2',
            'svg-3',
            'svg-4',
            'svg-5',
            'svg-6',
            'svg-7',
            'svg-8'
          ];
  user:User;
  constructor(private dialogRef:MatDialogRef<NewContactDialogComponent>) { }
  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
  ngOnInit() {
    this.user=new User();
  }

  save(){
    this.dialogRef.close(this.user);
  }
  cancel(){
    this.dialogRef.close(null);
  }
}
