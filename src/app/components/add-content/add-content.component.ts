import {Component, OnInit} from '@angular/core';
import Content from '../../entities/Content';
import {HttpService} from '../../services/http.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css'],
  providers: [HttpService]
})
export class AddContentComponent implements OnInit {

  loadingStateVisibility = false;
  selectedFile: File;
  tooltip: string;

  constructor(private httpService: HttpService,
              public dialogRef: MatDialogRef<AddContentComponent>) { }

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
      fileReader.onloadstart = function() {
        that.loadingStateVisibility = true;
      };

      fileReader.onload = function(e: any) {
        that.httpService.create(new Content(e.target.result, that.tooltip), 'content/add').subscribe(data => {
            that.loadingStateVisibility = false;
            that.dialogRef.close(data);
          },
          error => {
            console.log('Error ', error);
            that.loadingStateVisibility = false;
          }
        );
      };
    }

  }

  onCloseClick() {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'app-snack-bar',
  template: '<span>\n Uploaded \n </span>',
  styles: [],
})
export class SnackComponent {}
