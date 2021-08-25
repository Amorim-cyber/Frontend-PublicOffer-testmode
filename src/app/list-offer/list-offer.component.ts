import { Alert } from './../shared/model/alert-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Offer } from '../shared/model/offer-model';
import { OfferService } from '../shared/service/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../shared/components/alert/alert.component';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {

  offers: Offer[] = [];

  displayedColumns: string[] = ['clientCode', 'clientName', 'bound', 'offerName', 'price', 'amount', 'status', 'edit'];
  dataSource = new MatTableDataSource(this.offers);

  constructor(public dialog: MatDialog,
  private offerService: OfferService, private router: Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.fetchOffers();
    this.dataSource.paginator = this.paginator;
  }

  async fetchOffers(): Promise<void>{
    this.offers = await this.offerService.getOffers();
    this.dataSource = new MatTableDataSource(this.offers);
  }

  goToRegister(): void{
    this.router.navigateByUrl("main/register");
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
