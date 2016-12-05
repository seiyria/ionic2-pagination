# ionic2-pagination
A small pagination component for ionic 2.

# Why?
On mobile, this component would be mostly useless. If you're using Ionic 2 to build for desktop or web, though, infinite scrolling may not be the best choice for you.

# How to use?

## Sample Usage
```html
<ionc-pagination
  color="light"
  (clickBeginning)="changePage(1)"
  (clickPrevious)="changePage(paginationInfo.page - 1)"
  (clickNext)="changePage(paginationInfo.page + 1)"
  (clickEnd)="changePage(paginationInfo.pageCount)"
  [pagination]="paginationInfo"></ionc-pagination>
```

### Why `ionc`?
Short for "Ionic Compatible" - I don't want to collide with them in case they ever create their own pagination component.

## Pagination Object Structure
```
{
  page: number;
  pageSize: number;
  rowCount: number;
  pageCount: number;
}
```
