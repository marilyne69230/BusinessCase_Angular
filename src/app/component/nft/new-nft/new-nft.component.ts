import { Component } from '@angular/core';
import { FileService } from '../../../service/file.service';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-new-nft',
  templateUrl: './new-nft.component.html',
  styleUrls: ['./new-nft.component.css']
})
export class NewNftComponent {

  constructor(private FileService: FileService) {}

  //function upload files
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name);
    this.FileService.upload(formData).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
      );
    }
  }

  private resportProgress(event:HttpEvent<string[]>) { 
    throw new Error('Method not implemented');
  }

}