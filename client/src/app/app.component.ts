import {
  Component,
  AfterContentChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  isLoading = this.loadingService.isLoading;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private loadingService: LoadingService
  ) {}

  ngAfterContentChecked() {
    this.changeDetectorRef.detectChanges();
  }
}
