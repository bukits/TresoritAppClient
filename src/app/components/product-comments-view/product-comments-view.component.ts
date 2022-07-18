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

  constructor(private apiSevice: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.apiSevice
        .getCommentsByProductName(params['productName'])
        .subscribe((data) => {
          this.comments = data;
        });
    });
  }

  public createComment() {}
}
