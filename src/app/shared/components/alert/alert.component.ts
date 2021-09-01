
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Alert } from '../../model/alert-model';
import { Offer } from '../../model/offer-model';
import { OfferService } from '../../service/offer.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  selectedStatus!: string;
  status: string[] = ['Enviado','Feito'];

  offer!: Offer;

  alert = {
    offer: this.offer,
    title: 'Sucesso!',
    description: 'Seu registro foi cadastrado com sucesso!',
    btnSucess: 'OK',
    btnCancel: 'Cancelar',
    colorBtnSucess: 'accent',
    colorBtnCancel: 'warn',
    hasBtnClose: false,
    hasForm: false,
  } as Alert;

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert, private offerService: OfferService) { }

  ngOnInit(): void {

    if (this.data) {
      this.alert.offer = this.data.offer || this.alert.offer;
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description;
      this.alert.btnSucess = this.data.btnSucess || this.alert.btnSucess;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.colorBtnSucess = this.data.colorBtnSucess || this.alert.colorBtnSucess;
      this.alert.colorBtnCancel = this.data.colorBtnCancel || this.alert.colorBtnCancel;
      this.alert.hasBtnClose = this.data.hasBtnClose || this.alert.hasBtnClose;
      this.alert.hasForm = this.data.hasForm || this.alert.hasForm;
    }

  }

  update(value?:string){

    if(value===undefined) return;

    this.alert.offer!.status = value;

    this.offerService.update(this.alert.offer!).subscribe(
      {
        next: offer => console.log('Updated with sucess',offer),
        error: err => console.log("Error", err)
      }
    );
  }

  delete(): void{
    const config = {
      data: {
        title: 'Você tem certeza que deseja excluir?',
        description: 'Caso você tenha certeza que deseja excluir, clique no botão OK',
        hasBtnClose: true
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);

    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.offerService.delete(this.alert.offer!.id)
        .subscribe(() => {
          window.location.reload();
        });
      }
    });
  }

}
