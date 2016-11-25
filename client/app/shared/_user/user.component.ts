import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.view.html',
  styleUrls: ['./user.view.css'],
})

export class userComponent implements OnInit {

  private userURL = 'api/search?t=';
  private latestURL = 'api/latest';
  searchQuery: string = '';
  searchOffset: number;
  queryString: string = '';
  apiCallString: string = 'http://' + document.domain + '/' + this.userURL;
  responseJSON: [{}];
  latestJSON: [{}];
  responseLoading: boolean = false;
  latestLoading: boolean = false;


  searchButtonClicked(searchTerm: string): void {
    this.responseLoading = true;
  };

  jsonToString(json: {}): string {
    return JSON.stringify(json);
  }

  clearResponseJSON(): void {
    this.responseJSON = [{}];
  }

  changeOffset(): void {
    this.searchOffset = (this.searchOffset > 0) ? this.searchOffset : null;
  }

  incrementOffset(): void {
    this.searchOffset = (this.searchOffset) ? this.searchOffset + 1 : 1;
    this.changeOffset();
  }

  decrementOffset(): void {
    this.searchOffset = this.searchOffset - 1;
    this.changeOffset();
  }

  ngOnInit(): void {
    // this.getuserResults();
    this.latestLoading = true;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred - user.component', error); // Needs to be improved
    return Promise.reject(error.message || error);
  }
 }