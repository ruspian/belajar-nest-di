import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Disk membutuhkan 5 watt untuk menampilkan data');
    this.powerService.suplyPower(5, 'Disk');
    return 'Data yang diambil dari disk';
  }
}
