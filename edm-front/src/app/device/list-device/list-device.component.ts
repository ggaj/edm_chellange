import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Device } from '../model-device/device.model';
import { DeviceService } from '../service-device/device.service';

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss']
})
export class ListDeviceComponent implements OnInit {

  devices: Device[] = []
  closeResult!: string;
  loading!: boolean

  constructor(
    private service: DeviceService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.handleIndex();
  }


  handleConfirmDelete(content: any, id: number = 0) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'yes') {
        this.handleDelete(id);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  handleDelete(id: number) {
    this.service.delete(id).subscribe(() => this.handleIndex());
  }

  handleIndex() {
    this.service.index().subscribe(
      (devices: Device[]) => {
      this.devices = devices;
      },
      (error: any) => {console.log(error)},
      () => this.loading = false
    )
  }

}
