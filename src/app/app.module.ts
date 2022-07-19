import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchGridComponent } from './components/search-grid/search-grid.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { ProductCommentsViewComponent } from './components/product-comments-view/product-comments-view.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    SearchGridComponent,
    NavbarComponent,
    ProductCommentsViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    DialogModule,
    InputTextareaModule,
    ToastModule,
  ],
  providers: [ApiService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
