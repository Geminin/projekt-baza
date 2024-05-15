import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-dialog-tabela',
  standalone: true,
  imports: [
    FormsModule,


  ],
  templateUrl: './dialog-tabela.component.html',
  styleUrl: './dialog-tabela.component.css'
})
export class DialogTabelaComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogTabelaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancelClick(): void {
    this.dialogRef.close(); // Zamknięcie dialogu bez zapisywania zmian
  }

  onSaveClick(): void {
    // Tutaj można wykonać logikę zapisywania zmian i przekazać dane z powrotem do komponentu głównego
    this.dialogRef.close(this.data);
  }



}
