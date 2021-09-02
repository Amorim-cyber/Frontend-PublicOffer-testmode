import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Offer } from '../shared/model/offer-model';
import { OfferService } from '../shared/service/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { MatSort } from '@angular/material/sort';
import { Stage } from '../shared/model/stage-model';
import { Alert } from './../shared/model/alert-model';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements AfterViewInit {

  offers!: Offer[];
  stage: Stage = new Stage();
  address!: string;

  displayedColumns: string[] = ['clientCode', 'clientName', 'bound', 'offerName', 'price', 'amount', 'status', 'edit'];
  dataSource! : MatTableDataSource<Offer>;

  constructor(public dialog: MatDialog,
  private offerService: OfferService, private router: Router) {
    this.fetchOffers();
    this.address = this.getStageAddress();
   }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async fetchOffers(): Promise<void>{
    this.offers = await this.offerService.getOffers();
    this.dataSource = new MatTableDataSource(this.offers);
  }

  goToRegister(): void{
    this.router.navigateByUrl("main/register");
  }

  getStageAddress(): string{
    const id = Math.floor(Math.random() * (0 - (this.stage.address.length-1)) + 0)*(-1);
    return this.stage.getStageById(id);
  }

  update(offer: Offer): void {
    const config = {
      data: {
        offer: offer,
        title: 'Atualizar pedido',
        hasForm: true,
        hasBtnClose: true,
        btnSucess: 'Atualizar',
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigateByUrl('main');
    });
  }

}
