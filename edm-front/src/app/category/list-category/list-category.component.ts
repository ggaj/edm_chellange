import { CategoryService } from './../service-category/category.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from '../model-category/category.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit, AfterViewInit{

  categories: Category[] = [];
  closeResult!: string;
  loading!:boolean;
  @ViewChild('errorAlert')
  message!: ElementRef;
  message_error: string = "An unexpected error happened";

  constructor(
    private service: CategoryService,
    private modalService: NgbModal
  ) {
  }
  ngAfterViewInit(): void {
    this.message.nativeElement;
  }

  ngOnInit() {
    this.loading = true;
    this.handleIndex();
  }

  handleConfirmDelete(content: any, id: number) {
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
    this.service.delete(id).subscribe(
      () => this.handleIndex(),
      (error: any)=>{

        if (error instanceof HttpErrorResponse)
          this.message_error = "Category associated with a device";

        this.modalService.open(this.message);
    });
  }

  handleIndex() {
    this.service.index().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      (error: any) => {

        console.error(error)
      },
      () => this.loading = false
    )
  }

}
