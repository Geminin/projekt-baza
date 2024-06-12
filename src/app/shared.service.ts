import { Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection, collectionData, deleteDoc, doc} from '@angular/fire/firestore';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs';



export interface Opony {
  Klient: {
    Nazwa: string;
    Nr_Klienta: string;
  };
  Auto: {
    Nr_rejestracyjny: string;
    Nr_nadwozia: string;
    Marka: string;
    Model: string;
  };
  Marka: string;
  Model: string;
  Sezon: string;
  Ilosc: string;
  Felgi: string;
  DOT: string;
  Bieznik: {
    PL: string;
    PP: string;
    TL: string;
    TP: string;
  };
  Uwagi: string;
  Lokalizacja: string;
  Status: string;
  Data: {
    Dzien: string;
    Miesiac: string;
    Rok: string;
  };
}

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private fs:AngularFirestore) { }


  getOpony(){

    let oponyCollection = collection(this.fs.firestore,'Opony');
    return collectionData(oponyCollection,{idField:'id'});
  }




  addOpony(desc:Data){

    let data = desc;
    let oponyCollection = collection(this.fs.firestore, 'Opony');
    return addDoc(oponyCollection,data);
  }

  deleteOpony(id:string){

    let docRef = doc(this.fs.firestore,'Opony/'+id);
    return deleteDoc(docRef);

  }

  Search(nrRejestracyjny: string): Observable<any[]> {
    console.log("Querying Firestore for nr_rejestracyjny:", nrRejestracyjny); // Debugging line
    return this.fs.collection('Opony', ref => ref.where('Auto.Nr_rejestracyjny', '==', nrRejestracyjny))
      .snapshotChanges()
      .pipe(
        map(actions => {
          console.log("Firestore response (raw):", actions); // Debugging line
          const results = actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            console.log("Processed document:", { id, ...data }); // Debugging line
            return { id, ...data };
          });
          console.log("Processed results:", results); // Debugging line
          return results;
        })
      );
  }

  getOponyId(id: string): Observable<any> {
    const opona = this.fs.collection('Opony').doc(id).valueChanges();
    console.log(opona);
    return opona;
  }

  editOpony(documentId: string, newData: Opony) {
    console.log("nowe dane:", newData);
    return this.fs.collection('Opony').doc(documentId).update(newData);
  }
}
