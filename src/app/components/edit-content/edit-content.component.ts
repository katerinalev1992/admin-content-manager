import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import Content from '../../entities/Content';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  loadingStateVisibility = false;
  selectedFile: File;

  constructor(public dialogRef: MatDialogRef<EditContentComponent>,
              @Inject(MAT_DIALOG_DATA) public content: Content,
              private httpService: HttpService) {
  }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const that = this;
    const fileReader = new FileReader();
    if (this.selectedFile) {
      fileReader.readAsDataURL(this.selectedFile);
      fileReader.onloadstart = function () {
        that.loadingStateVisibility = true;
      };
      fileReader.onload = function (e: any) {
        that.content.image = e.target.result;
        that.updateContent();
      };
    } else {
      this.updateContent();
    }

  }

  updateContent() {
    this.httpService.update(this.content.getId(), this.content, 'content/update').subscribe(data => {
        this.loadingStateVisibility = false;
        this.dialogRef.close(data);
      },
      error => {
        this.loadingStateVisibility = false;
      }
    );
  }

  onCloseClick() {
    this.dialogRef.close();
  }

}
