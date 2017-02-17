import {Component, OnInit} from "@angular/core";
import ChatService from "./chat.service";
import * as dialogs from "ui/dialogs";
import {RouterExtensions} from "nativescript-angular";
import {objectAssign} from "./utils";

@Component({
  selector: "hkm-room-list",
  templateUrl: "room.list.component.html",
  styleUrls: ['room.list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms = [];

  constructor(private chatService: ChatService, private routerExtensions: RouterExtensions) {
  }


  ngOnInit(): void {
    this.chatService
      .allRooms()
      .subscribe((value) => {
        // Transform the room object in array and keep the key
        this.rooms = Object.keys(value).map(k => objectAssign({key: k}, value[k]));
      });
  }

  onAddRoom() {
    dialogs.prompt({
      title: "Create a new room",
      okButtonText: "Save",
      cancelButtonText: "Cancel",
      defaultText: "",
      inputType: dialogs.inputType.text
    }).then(({result, text}) => {
      if (result && text) {
        this.chatService.addRoom(text);
      }
    });
  }

  onItemTap(args) {
    // Use the router to navigate to the selected room
    // You can access the room id by using :
    // this.rooms[args.index].key]
    this.routerExtensions.navigate(["/messages", this.rooms[args.index].key], {
      transition: {
        name: "slideRight",
        curve: "linear"
      }
    });
    
  }

  goToProfile() {
    this.routerExtensions.navigate(["/profile"], {
      transition: {
        name: "slideRight",
        curve: "linear"
      }
    });
  }
}
