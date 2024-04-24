import { Injectable, Query } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc,query,where,getDocs } from '@angular/fire/firestore';
import { Data } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private fs:Firestore) { }


  getOpony(){

    let oponyCollection = collection(this.fs,'Opony');
    return collectionData(oponyCollection,{idField:'id'});
  }


  addOpony(desc:Data){

    let data = desc;
    let oponyCollection = collection(this.fs, 'Opony');
    return addDoc(oponyCollection,data);
  }

  deleteOpony(id:string){

    let docRef = doc(this.fs,'Opony/'+id);
    return deleteDoc(docRef);

  }


  async login(login: string, haslo: string): Promise<void> {
    try {
      const pracownicyRef = collection(this.fs, 'Pracownicy');
      const userQuery = query(pracownicyRef, where('Login', '==', login), where('Haslo', '==', haslo));
      const userSnapshot = await getDocs(userQuery);

      userSnapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        // Tutaj możesz wykonać odpowiednie działania po znalezieniu dokumentu
        // przenieś na sort component

      });
    } catch (error) {
      console.error('Błąd podczas logowania:', error);
    }
  }

}
