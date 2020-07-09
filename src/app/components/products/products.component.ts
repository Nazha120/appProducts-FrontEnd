import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {HttpResponse} from '@angular/common/http';
import {IProduct, Product} from '../../model/product.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['libelle', 'reference', 'prix', ];
  dataSource: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.allProducts().subscribe( (res: HttpResponse<Array<Product>>) => {

      if ('body' in res){
        this.dataSource = new MatTableDataSource(res.body);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // showDetail = (row: IProduct): void => {
  //   console.log(row);
  //   this.dialog.open(DetailDemandeDialogComponent , {
  //     data: row,
  //     height: '500px',
  //     width: '400px',
  //     panelClass: 'demande-box'
  //   });
  // }
}


