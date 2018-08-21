import {PageModel} from '../models/page.model';

export function generatePageNumbers(page: PageModel) : number[] {
  // debugger;
  let firstPage = Math.floor(page.number / 10) * 10;
  let lastPage = Math.min(firstPage + 10, page.totalPages);

  let pageNumbers: number[] = [];
  for (let i = firstPage; i < lastPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}
