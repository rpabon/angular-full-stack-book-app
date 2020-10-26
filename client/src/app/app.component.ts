import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private isLoading$ = this.loadingService.isLoading;
  isLoading: boolean;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
