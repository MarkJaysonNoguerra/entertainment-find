import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Result } from '../../types/result';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'search',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule

  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  private searchText = new Subject<string>();
  results: Result[] = [];
  isSearching = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.searchText.pipe(
      filter((val: string) => val.length > 3),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((value: string) => {
      this.isSearching = true;
      this.results = [];
      console.log(value);
      this.api.getMovies(value).subscribe({
        next: (res: any) => {
          this.results = res.results.slice(0, 10);
          console.log(res);
          console.log(this.results);
          this.isSearching = false;
        },
        error: (e) => console.log(e),
        complete: () => this.isSearching = false
      });
    });
  }

  onSearchInputChange(value: string) {
    this.searchText.next(value);
  }

}