import { Component } from '@angular/core';

export interface CardInfo {
  title: string;
  id: string;
  cpuUsage: string;
  memoryUsage: string;
  memoryPercent: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  constructor() {}

  cards: CardInfo[] = [
    {
      title: 'postgres-test',
      id: '69e1675967c0',
      cpuUsage: '0.00%',
      memoryUsage: '45.81MiB / 7.602GiB',
      memoryPercent: '0.59%',
    },
    {
      title: 'mysql-test',
      id: 'a5f667f4b8d1',
      cpuUsage: '2.12%',
      memoryUsage: '120MiB / 4.0GiB',
      memoryPercent: '3.00%',
    },
    {
      title: 'redis-test',
      id: 'b7f123ad4c99',
      cpuUsage: '0.25%',
      memoryUsage: '50MiB / 2.5GiB',
      memoryPercent: '2.00%',
    },
    {
      title: 'mongodb-test',
      id: 'd5e234bd16a3',
      cpuUsage: '0.15%',
      memoryUsage: '100MiB / 6.0GiB',
      memoryPercent: '1.5%',
    },
    {
      title: 'ngnix-test',
      id: 'c3f456e7a8b2',
      cpuUsage: '0.31%',
      memoryUsage: '300MiB / 6.0GiB',
      memoryPercent: '1.3%',
    },
  ];
}
