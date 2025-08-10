import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CpuIconComponent } from '../../shared/icons/cpu-icon/cpu-icon.component';
import { MemoryIconComponent } from '../../shared/icons/memory-icon/memory-icon.component';
import { DiskIconComponent } from '../../shared/icons/disk-icon/disk-icon.component';
import { UptimeIconComponent } from '../../shared/icons/uptime-icon/uptime-icon.component';
import { ContainerIconComponent } from '../../shared/icons/container-icon/container-icon.component';
import { DeleteIconComponent } from '../../shared/icons/delete-icon/delete-icon.component';
import { ViewLogsIconComponent } from '../../shared/icons/view-logs-icon/view-logs-icon.component';
import { StopIconComponent } from '../../shared/icons/stop-icon/stop-icon.component';
import { PlayIconComponent } from '../../shared/icons/play-icon/play-icon.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

export enum EStatusContainer {
  RUNNING = 'running',
  STOPPED = 'stopped',
}

export interface CardInfo {
  title: string;
  id: string;
  cpuUsage: string;
  memoryUsage: string;
  memoryPercent: string;
  status: EStatusContainer;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule,
    NzButtonModule,
    NzFlexModule,
    NzSegmentedModule,
    NzCardModule,
    NzGridModule,
    NzProgressModule,
    CpuIconComponent,
    MemoryIconComponent,
    DiskIconComponent,
    UptimeIconComponent,
    ContainerIconComponent,
    NzTabsModule,
    NzSpaceModule,
    NzBadgeModule,
    DeleteIconComponent,
    ViewLogsIconComponent,
    StopIconComponent,
    PlayIconComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor() {}
  index = 0;

  protected readonly EStatusContainer = EStatusContainer;

  cards: CardInfo[] = [
    {
      title: 'postgres-test',
      id: '69e1675967c0',
      cpuUsage: '0.00%',
      memoryUsage: '45.81MiB / 7.602GiB',
      memoryPercent: '0.59%',
      status: EStatusContainer.RUNNING,
    },
    {
      title: 'mysql-test',
      id: 'a5f667f4b8d1',
      cpuUsage: '2.12%',
      memoryUsage: '120MiB / 4.0GiB',
      memoryPercent: '3.00%',
      status: EStatusContainer.RUNNING,
    },
    {
      title: 'redis-test',
      id: 'b7f123ad4c99',
      cpuUsage: '0.25%',
      memoryUsage: '50MiB / 2.5GiB',
      memoryPercent: '2.00%',
      status: EStatusContainer.RUNNING,
    },
    {
      title: 'mongodb-test',
      id: 'd5e234bd16a3',
      cpuUsage: '0.15%',
      memoryUsage: '100MiB / 6.0GiB',
      memoryPercent: '1.5%',
      status: EStatusContainer.STOPPED,
    },
    {
      title: 'ngnix-test',
      id: 'c3f456e7a8b2',
      cpuUsage: '0.31%',
      memoryUsage: '300MiB / 6.0GiB',
      memoryPercent: '1.3%',
      status: EStatusContainer.STOPPED,
    },
  ];

  get filteredCards(): CardInfo[] {
    switch (this.index) {
      case 1:
        return this.runningCards;
      case 2:
        return this.stoppedCards;
      default:
        return this.cards;
    }
  }

  get runningCards(): CardInfo[] {
    return this.cards.filter((c) => c.status === EStatusContainer.RUNNING);
  }
  get stoppedCards(): CardInfo[] {
    return this.cards.filter((c) => c.status === EStatusContainer.STOPPED);
  }

  get totalCount(): number {
    return this.cards.length;
  }
  get runningCount(): number {
    return this.runningCards.length;
  }
  get stoppedCount(): number {
    return this.stoppedCards.length;
  }

  statusLabel(status: EStatusContainer): string {
    return status === EStatusContainer.RUNNING ? 'Rodando' : 'Parado';
  }
  statusColor(status: EStatusContainer): string {
    return status === EStatusContainer.RUNNING ? 'green' : 'red';
  }
}
