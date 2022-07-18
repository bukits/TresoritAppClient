import { ApiService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-grid',
  templateUrl: './search-grid.component.html',
  styleUrls: ['./search-grid.component.css'],
})
export class SearchGridComponent implements OnInit {
  public products: any[];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.loadProducts().subscribe((data) => {
      this.products = data;
    });
  }

  public viewComments(product: any) {
    this.router.navigate(['/product'], {
      queryParams: { productName: `${product.partitionKey}` },
    });
  }
}
