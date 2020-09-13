import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, AfterViewInit {
  /** Constants used to fill up our data base. */
  COLORS: string[] = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray',
  ];
  NAMES: string[] = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
  ];
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private restService: RestService) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) =>
      this.createNewUser(k + 1)
    );

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
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

  getAdminResource() {
    this.restService.getAdminResources().subscribe((response: any) => {
      console.log('Server Response', response);
      alert(response.message);
    });
  }

  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    const name =
      this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))] +
      ' ' +
      this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))].charAt(
        0
      ) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: this.COLORS[Math.round(Math.random() * (this.COLORS.length - 1))],
    };
  }
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
