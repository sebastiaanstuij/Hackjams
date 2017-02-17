import {Component, OnInit} from "@angular/core";
import ChatService from "./chat.service";
import * as dialogs from "ui/dialogs";
import {RouterExtensions, PageRoute} from "nativescript-angular";
import {objectAssign} from "./utils";

@Component({
  selector: "hkm-room-list",
  templateUrl: "messages.component.html",
  styleUrls: ['messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [];
  id;

  constructor(private chatService: ChatService, private routerExtensions: RouterExtensions, private pageRoute: PageRoute) {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => { this.id = +params['id']; });
    
  }

  ngOnInit(): void {
    this.chatService
      .getRoomMessages(this.id)
      .subscribe((value) => {
        // Transform the room object in array and keep the key
        this.messages = Object.keys(value).map(k => objectAssign({key: k}, value[k]));
      });
  }

  onAddMessage() {
  
  }

  onItemTap(args) {
    // Use the router to navigate to the selected room
    // You can access the room id by using :
    // this.rooms[args.index].key]
  }


}
