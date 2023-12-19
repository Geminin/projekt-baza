import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getAuta(){

    let autaCollection = collection(this.fs,'Opony');
    return collectionData(autaCollection,{idField:'id'});
  }

  addAuto(desc:string){

    let data = {model:desc};
    let autaCollection = collection(this.fs, 'Opony');
    return addDoc(autaCollection,data);
  }

  deleteAuta(id:string){

    let docRef = doc(this.fs,'Auta/'+id);
    return deleteDoc(docRef);

  }
}
