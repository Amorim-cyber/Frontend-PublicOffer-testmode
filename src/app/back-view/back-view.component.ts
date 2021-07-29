
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RequestService } from './../core/service/request.service';
import { Request } from './../core/model/Request';

@Component({
  selector: 'app-back-view',
  templateUrl: './back-view.component.html',
  styleUrls: ['./back-view.component.css']
})
export class BackViewComponent implements OnInit, AfterViewInit {

  filteredRequests: Request[] = [];

  _requests: Request[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.requestService.getAll().subscribe({
      next: requests => {
        this._requests = requests;
        this.filteredRequests = this._requests;
      },
      error: err => console.log('Error',err)
    });
  }

  displayedColumns: string[] = ['agentId', 'clientId', 'assetName', 'assetPrice', 'amount', 'status'];
  dataSource = new MatTableDataSource(this.filteredRequests);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
