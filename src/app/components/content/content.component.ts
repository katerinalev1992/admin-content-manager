import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';
import Content from '../../entities/Content';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {AddContentComponent} from '../add-content/add-content.component';
import {EditContentComponent} from '../edit-content/edit-content.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpService]
})
export class ContentComponent implements OnInit {

  content: Array<Content>;
  hoverPositions = ['Bottom right', 'Top left', 'Top right', 'Bottom left'];
  selectedTooltipPosition: string = this.hoverPositions[0];
  hoverState: { hover: boolean, hoveredItem: null | Content };

  constructor(private userService: UserService,
              private httpService: HttpService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar
  ) {
    this.content = [];
    this.hoverState = {hover: false, hoveredItem: null};
  }

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.httpService.getAll('content').subscribe(data => {
        data.contents.map((item) => {
          this.content.push(new Content(item.image, item.tooltip, item.id));
        });
      },
      error => {
        console.log('Error ', error);
      });
  }

  onAddImageClick() {
    this.dialog.open(AddContentComponent, <MatDialogConfig>{
      width: '800px',
      data: {},
      disableClose: true
    }).afterClosed().subscribe(result => {
      const res = result.contentCreated;
      const newContent = new Content(res.image, res.tooltip, res.id);
      this.content.push(newContent);
      if (result) {
        this.snackBar.open('Uploaded', null, {duration: 500});
      }
    });
  }

  onMouseOver(event, item: Content) {
    if (event.target.alt === item.getId()) {
      this.hoverState.hoveredItem = item;
      this.hoverState.hover = true;
    }
  }

  onMouseLeave() {
    this.hoverState.hover = false;
    this.hoverState.hoveredItem = null;
  }

  isHoverState(item: Content) {
    return this.hoverState.hover && item === this.hoverState.hoveredItem;
  }

  selectTooltipPosition(event) {
    this.selectedTooltipPosition = event.value;
  }

  removeContent(item: Content) {
    this.httpService.delete(item.getId(), 'content/delete').subscribe(data => {
        if (data.responseCode === 200) {
          this.content = this.content.filter((contentItem) => {
            return contentItem !== item;
          });
        }
      },
      error => {
        console.log('Error ', error);
      });
  }

  editContent(item: Content) {
    this.dialog.open(EditContentComponent, <MatDialogConfig>{
      width: '800px',
      data: item,
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Uploaded', null, {duration: 500});
      }
    });
  }
}

