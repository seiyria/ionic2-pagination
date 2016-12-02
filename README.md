# ionic2-pagination
A small pagination component for ionic 2.

# Why?
On mobile, this component would be mostly useless. If you're using Ionic 2 to build for desktop or web, though, infinite scrolling may not be the best choice for you.

# How to use?

## Sample Usage
```html
<pagination
  color="light"
  (clickBeginning)="changePage(1)"
  (clickPrevious)="changePage(paginationInfo.page - 1)"
  (clickNext)="changePage(paginationInfo.page + 1)"
  (clickEnd)="changePage(paginationInfo.pageCount)"
  [pagination]="paginationInfo"></pagination>
```

## Pagination Object Structure
```
{
  page: number;
  pageSize: number;
  rowCount: number;
  pageCount: number;
}
```
