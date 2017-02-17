import {Injectable, NgZone} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {objectAssign} from "./utils";
import "rxjs/add/operator/map";
import {RoomMap, FirebaseChildEvent, Room, UserMap, MessageMap, User, Message} from "./typing";
import Firebase = require("nativescript-plugin-firebase");
import * as AppSettings from "application-settings";


@Injectable()
export default  class ChatService {

  currentUserId: string;

  rooms$: BehaviorSubject<RoomMap> = new BehaviorSubject<RoomMap>({});
  user$: BehaviorSubject<UserMap> = new BehaviorSubject<UserMap>({});
  messages$: BehaviorSubject<MessageMap> = new BehaviorSubject<MessageMap>({});

  constructor(private ngZone: NgZone) {
    this.currentUserId = AppSettings.getString("currentUserId", null);

    // This is the setup for the backend, no need to change anything
    Firebase
      .init({persist: false})
      .then(() => {

        if (!this.currentUserId) {
          this.createUser()
            .then((result:FirebaseChildEvent) => {
              this.currentUserId = result.key;
              AppSettings.setString("currentUserId", this.currentUserId);
              console.info('User created ', this.currentUserId)
            })
        }

        Firebase.addChildEventListener((result: FirebaseChildEvent) => {
          this.ngZone.run(() => {
            this.addChildEvenListener(result, this.rooms$);
          });
        }, '/rooms');

        Firebase.addChildEventListener((result: FirebaseChildEvent) => {
          this.ngZone.run(() => {
            this.addChildEvenListener(result, this.user$);
          });
        }, '/users');

        Firebase.addChildEventListener((result: FirebaseChildEvent) => {
          this.ngZone.run(() => {
            this.addChildEvenListener(result, this.messages$);
          });
        }, '/messages');
      })
      .catch(() => {
      });
  }


  private addChildEvenListener(firebaseEvent: FirebaseChildEvent, localSubject$): void {
    const currentValue = localSubject$.getValue();

    switch (firebaseEvent.type) {
      case "ChildAdded":
      case "ChildChanged":
        localSubject$.next(objectAssign({}, currentValue, {[firebaseEvent.key]: firebaseEvent.value}));
        break;
      case "ChildRemoved":
        const copy = objectAssign({}, currentValue);
        delete copy[firebaseEvent.key];
        localSubject$.next(copy);
        break;

    }
  }

  /**
   * Use this method to get access all the rooms
   * @returns {Observable<RoomMap>}
   */
  allRooms():Observable<RoomMap> {
    return this.rooms$.asObservable();
  }

  /**
   * Use this method to get access to a specific by id
   * @param roomId
   * @returns {Observable<Room>}
   */
  getRoom(roomId:string): Observable<Room>{
    return this.rooms$.map(rooms => rooms[roomId]);
  }

  /**
   * Use this method to create a new room on the backend
   * @param roomName
   */
  addRoom(roomName:string):void{
    const name = roomName.trim();
    if (name) {
      Firebase.push(
        '/rooms',
        {
          name: name
        }
      );
    }
  }

  private createUser() {
    return Firebase.push(
      '/users',
      {
        name: `Guest ${Math.floor(Math.random() * 100000)}`,
        image: 'https://api.adorable.io/avatars/253/ts'
      }
    );
  }

  /**
   * Use this method to get access to the currently connected user
   * @returns {Observable<User>}
   */
  getConnectedUser():Observable<User> {
    return this.getUserById(this.currentUserId)
  }

  /**
   * Use this method to get access all users
   * @returns {Observable<UserMap>}
   */
  getUsers():Observable<UserMap> {
    return this.user$.asObservable();
  }


  private getUserById(id) {
    return this.user$.map(users => users[id]);
  }

  /**
   * Use this method to update the user profile
   * @param name
   * @param image
   * @returns {Promise<any>}
   */
  updateProfile({name, image}):Promise<any> {
    return Firebase.update(`/users/${this.currentUserId}`, {
      name,
      image
    });
  }

  /**
   * Use this method to get all messages for a specific room
   * @param roomId
   * @returns {Observable<Message[]>}
   */
  getRoomMessages(roomId:string): Observable<Message[]> {
    return this.messages$
      .map((values) => {
        const messages = Object.keys(values)
          .map(k => values[k])
          .filter(m => m.roomId === roomId)
        return messages;
      });
  }

  /**
   * Use this method to add a new message to a specific room
   * @param roomId
   * @param body
   * @returns Promise<any>
   */
  addMessage(roomId:string, body:string): Promise<any>{
    if (body) {
      return Firebase.push(
        `/messages`,
        {
          authorId: this.currentUserId,
          body: body,
          roomId: roomId
        }
      );
    }
    return Promise.resolve(null);
  }


}