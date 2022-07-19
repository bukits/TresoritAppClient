import { ApiService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

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

  constructor(
    private apiSevice: ApiService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.productName = params['productName'];
      this.getComments();
    });
  }

  async getComments() {
    return await this.apiSevice
      .getCommentsByProductName(this.productName)
      .subscribe((data) => {
        this.comments = data;
      });
  }

  public createComment() {
    this.displayDialog = false;
    const commentEntity = {
      partitionKey: this.productName,
      comment: this.newComment,
    };
    this.apiSevice.createComment(commentEntity).subscribe({
      next: (v) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Comment created succesfully',
        });
        this.getComments();
        this.newComment = '';
      },
      error: (e) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error creation',
          detail: e.error.errors.Comment[0],
        });
      },
    });
  }

  public showDialog() {
    this.displayDialog = true;
  }
}
