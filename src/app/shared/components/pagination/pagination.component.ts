import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];
  showEllipsis: boolean = false;

  ngOnChanges() {
    this.updatePages();
  }

  updatePages() {
    this.pages = [];
    this.showEllipsis = false;
    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i);
      }

    } else if (this.currentPage <= 3) {
      this.pages = [1, 2, 3, 4];
      this.showEllipsis = true;
    } else if (this.currentPage >= this.totalPages - 2) {
      this.pages = [this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages];
      this.showEllipsis = false;
    } else {
      this.pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
      this.showEllipsis = true;
    }
  }

  //
  // updatePages() {
  //   this.pages = [];
  //   this.showEllipsis = false;
  //
  //   if (this.totalPages <= 5) {
  //     // If total pages are less than or equal to 5, show all pages.
  //     for (let i = 1; i <= this.totalPages; i++) {
  //       this.pages.push(i);
  //     }
  //   } else {
  //     if (this.currentPage <= 3) {
  //       // If the current page is within the first three pages.
  //       this.pages = [1, 2, 3, 4, 5];
  //       this.showEllipsis = true;
  //     } else if (this.currentPage >= this.totalPages - 2) {
  //       // If the current page is within the last three pages.
  //       this.pages = [
  //         this.totalPages - 4,
  //         this.totalPages - 3,
  //         this.totalPages - 2,
  //         this.totalPages - 1,
  //         this.totalPages,
  //       ];
  //     } else {
  //       // For all other cases.
  //       this.pages = [
  //         this.currentPage - 2,
  //         this.currentPage - 1,
  //         this.currentPage,
  //         this.currentPage + 1,
  //         this.currentPage + 2,
  //       ];
  //       this.showEllipsis = true;
  //     }
  //   }
  // }


  goToPage(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.updatePages();
      this.pageChange.emit(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePages();
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePages();
      this.pageChange.emit(this.currentPage);
    }
  }
}
