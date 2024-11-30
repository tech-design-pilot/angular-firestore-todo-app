import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, Timestamp, updateDoc } from '@angular/fire/firestore';
import { Todo } from '../models/todo.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private collectionName = "todos";

  constructor(private firestore: Firestore) { }

  // create new item
  async createItem(data: Todo): Promise<void> {
    const itemsCollection = collection(this.firestore, this.collectionName);
    await addDoc(itemsCollection, data);
  }

  // get todos
  getItems(): Observable<any[]> {
    const itemsCollection = collection(this.firestore, this.collectionName);
    return collectionData(itemsCollection, { idField: "id" }).pipe(
      map((items) =>
        items.map((item) => {
          // check if the dueDate is instance of timestamp
          if (item['dueDate'] instanceof Timestamp) {
            return { ...item, dueDate: item['dueDate'].toDate() }
          }
          return item;
        })
      )
    );
  }

  // read a single item by ID
  getItemById(id: string): Observable<any> {
    const itemDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(itemDoc, { idField: 'id' });
  }

  // update an item
  async updateItem(id: string, data: any): Promise<void> {
    const itemDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    await updateDoc(itemDoc, data);
  }

  // delete an item
  async deleteItem(id: string): Promise<void> {
    const itemDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    await deleteDoc(itemDoc);
  }
}
