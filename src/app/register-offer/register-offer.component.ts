import { AssetService } from './../shared/service/asset.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { ValidateFieldsService } from '../shared/formControl/validate-fields.service';
import { Alert } from '../shared/model/alert-model';
import { Client } from '../shared/model/client-model';
import { Offer } from '../shared/model/offer-model';
import { ClientService } from '../shared/service/client.service';
import { OfferService } from '../shared/service/offer.service';
import { Asset } from '../shared/model/asset-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Stage } from '../shared/model/stage-model';

@Component({
  selector: 'app-register-offer',
  templateUrl: './register-offer.component.html',
  styleUrls: ['./register-offer.component.css']
})
export class RegisterOfferComponent implements OnInit {

  register!: FormGroup;
  selectedClient: Client[] = [];
  listOfClient: Client[] = [];
  assets: String[] = [];
  asset: Asset[] = [];
  txt:String = "";
  stage: Stage = new Stage();
  address!: string;

  constructor(public validate: ValidateFieldsService,public dialog: MatDialog,
    private fb: FormBuilder,private offerService:OfferService,private clientService:ClientService,
    private router: Router,private assetService:AssetService, private snackBar: MatSnackBar) {
      this.address = this.getStageAddress();
    }

  get f() {
    return this.register.controls;
  }

  ngOnInit(): void {
    this.register = this.fb.group({
      clientCode: ['', [Validators.required]],
      offerName: ['', [Validators.required]],
      offerFullName: ['', [Validators.required]],
      bound: ['', [Validators.required]],
      market: ['', [Validators.required]],
      price:[0,[Validators.required,Validators.min(0)]],
      amount:['',[Validators.required,Validators.min(0)]],
    });
    this.getAssetList();
    this.getAllClient();
  }

  save(): void {

    this.register.markAllAsTouched();
    if(this.register.invalid){
      console.log(this.register)
      console.log("falha")
      return;
    }

    const offer = {
      clientCode: this.register.value.clientCode,
      clientName: this.selectedClient[0].name,
      offerName: this.register.value.offerFullName,
      price: this.register.value.price,
      amount: this.register.value.amount,
      bound: this.register.value.bound,
      clientEmail: this.selectedClient[0].email,
      agentEmail: this.selectedClient[0].agentEmail,
      status: "",
    } as Offer;
    console.log(offer);
    this.create(offer);
  }

  getStageAddress(): string{
    const id = Math.floor(Math.random() * (0 - (this.stage.address.length-1)) + 0)*(-1);
    return this.stage.getStageById(id);
  }

  async getAssetList(): Promise<void> {
    this.assets = await this.assetService.getAssetList();
  }

  async getAssetByShortName(shortName:string): Promise<void> {
    this.asset = await this.assetService.getAssetByShortName(shortName);
  }

  async getClientById(num:number):Promise<void>{

      this.selectedClient = await this.clientService.getClientById(num);

  }

  async getAllClient():Promise<void>{

    this.listOfClient = await this.clientService.getAllClient();

}

  openSnackBar() {
    this.listOfClient.sort((a,b) => (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0))
    .forEach((client) => {
      this.txt += client.code + "\t\t" + client.name + "\n";
    });
    this.snackBar.open('INFORMAÇÕES\n\n'+
      'Código\tCliente\n'+this.txt, 'Entendido', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['info-snackbar']
    });
    this.txt = "";
  }

  create(offer: Offer): void {

    this.offerService.save(offer).subscribe(() => {
      const config = {
        data: {
          btnSucess: 'Ir para a listagem principal',
        } as Alert
      };
      const dialogRef = this.dialog.open(AlertComponent, config);
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigateByUrl("main/list");
      });
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar o registro!',
          descricao: 'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
          corBtnSucesso: 'warn',
          btnSucesso: 'Fechar'
        } as Alert
      };
      this.dialog.open(AlertComponent, config);
    });
  }
}
