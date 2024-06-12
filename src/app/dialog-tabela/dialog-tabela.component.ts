import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './dialog-tabela.component.html',
  styleUrls: ['./dialog-tabela.component.css']
})
export class DialogTabelaComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogTabelaComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private service: SharedService,
  ) {
    this.editForm = this.formBuilder.group({
      Klient: this.formBuilder.group({
        Nazwa: ['', Validators.required],
        Nr_Klienta: ['', Validators.required]
      }),
      Auto: this.formBuilder.group({
        Nr_rejestracyjny: ['', Validators.required],
        Nr_nadwozia: ['', Validators.required],
        Marka: ['', Validators.required],
        Model: ['', Validators.required]
      }),
      Marka: ['', Validators.required],
      Model: ['', Validators.required],
      Sezon: ['', Validators.required],
      Ilosc: ['', Validators.required],
      Felgi: ['', Validators.required],
      DOT: ['', Validators.required],
      Bieznik: this.formBuilder.group({
        PL: ['', Validators.required],
        PP: ['', Validators.required],
        TL: ['', Validators.required],
        TP: ['', Validators.required]
      }),
      Uwagi: [''],
      Lokalizacja: ['', Validators.required],
      Status: ['', Validators.required],
      Data: this.formBuilder.group({
        Dzien: ['', Validators.required],
        Miesiac: ['', Validators.required],
        Rok: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
    console.log("dane: ", this.dialogData);


    if (this.dialogData.data) {
      this.editForm.patchValue(this.dialogData.data);
    }
  }

  onSubmit() {
    console.log('Form values:', this.editForm.value);
    if (this.editForm.valid) {
      const newData = this.editForm.value;
      const documentId = this.dialogData.id; // Użyj dialogData.id

      console.log('Submitting data:', newData);

      this.service.editOpony(documentId, newData)
        .then(() => {
          this.dialogRef.close({ success: true });
        })
        .catch(error => {
          console.error('Błąd podczas aktualizowania danych', error);
        });
    } else {
      console.error('Form is invalid', this.editForm.errors);
    }
  }
}
