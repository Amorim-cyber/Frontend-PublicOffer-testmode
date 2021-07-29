
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RequestService } from './../core/service/request.service';
import { Request } from './../core/model/Request';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-front-view',
  templateUrl: './front-view.component.html',
  styleUrls: ['./front-view.component.css']
})
export class FrontViewComponent implements OnInit, AfterViewInit {

  filteredRequests: Request[] = [];

  _requests: Request[] = [];

  constructor(private router: Router, private requestService: RequestService) { }

  agentCode!: string;
  index!: number;
  lenght!: number;

  ngOnInit(): void {
    this.lenght = this.router.url.length;
    this.index = this.router.url.lastIndexOf("/")+1;
    this.agentCode = this.router.url.substring(this.index,this.lenght);
    this.getAllByAgentId(+this.agentCode);
  }

  getAllByAgentId(agentId:number): void{
    this.requestService.getAllByAgentId(agentId).subscribe({
      next: requests => {
        this._requests = requests;
        this.filteredRequests = this._requests;
      },
      error: err => console.log('Error',err)
    });
  }

  displayedColumns: string[] = ['clientId', 'assetName', 'assetPrice', 'amount', 'status'];
  dataSource = new MatTableDataSource(this.filteredRequests);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
