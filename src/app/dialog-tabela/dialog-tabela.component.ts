import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-dialog-tabela',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,






  ],
  templateUrl: './dialog-tabela.component.html',
  styleUrl: './dialog-tabela.component.css'
})
export class DialogTabelaComponent {

  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogTabelaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    private service: SharedService,
  ){
    this.editForm = this.formBuilder.group({
        //controls validators
    });
  }


  onSubmit() {
    if (this.editForm.valid) {
        const newData = this.editForm.value;
        const documentId = this.data.documentId;

        this.service.editOpony(documentId, newData)
            .then(() => { // Dodano otwierającą klamrę tutaj
                this.dialogRef.close({ success: true });
            })
            .catch(error => {
                console.error('Błąd podczas aktualizowania danych', error);
            });
    }
}
}
