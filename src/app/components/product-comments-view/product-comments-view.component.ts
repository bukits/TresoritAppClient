import { ApiService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-comments-view',
  templateUrl: './product-comments-view.component.html',
  styleUrls: ['./product-comments-view.component.css'],
})
export class ProductCommentsViewComponent implements OnInit {
  comments: any[];
  displayDialog: boolean;
  productName: string;
  newComment: string;

  constructor(private apiSevice: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.productName = params['productName'];
      this.getComments();
    });
  }

  private getComments() {
    this.apiSevice
      .getCommentsByProductName(this.productName)
      .subscribe((data) => {
        this.comments = data;
      });
  }

  public createComment() {
    this.displayDialog = false;
    const commentEntity = {
      productName: this.productName,
      comment: this.newComment,
    };
    this.apiSevice.createComment(commentEntity).then(() => this.getComments());
  }

  public showDialog() {
    this.displayDialog = true;
  }
}
