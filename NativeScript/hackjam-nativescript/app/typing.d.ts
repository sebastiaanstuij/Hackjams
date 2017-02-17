export interface Room {
  name: string
}

export interface User {
  name: string;
  image: string;
}

export interface Message {
  body: string;
  authorId: string;
  roomId: string;
}

export interface RoomMap {
  [key: string]: Room
}

export interface UserMap {
  [key: string]: User
}
export interface MessageMap {
  [key: string]: Message
}
export interface FirebaseChildEvent{
  key:string;
  type:string;
  value: Room | User | Message;
}