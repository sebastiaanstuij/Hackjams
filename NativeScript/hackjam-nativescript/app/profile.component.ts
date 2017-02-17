import {Component, OnInit} from "@angular/core";
import ChatService from "./chat.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: "hkm-profile",
  templateUrl: "profile.component.html",
  styles: [
    `
      .imageProfile{
          border-radius: 50;
          border-color:gray;
          border-width: 0.5;
           width:100;
           height:100; 
           margin:10;
           
      }
      
      .miniature{
           width:50;
           height:50; 
           border-radius: 25;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {

  user: any;
  randomUrls = [];

  constructor(private chatService: ChatService, private routerExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
    this.randomUrls = this.createRandomImageUrls();

    this.chatService
      .getConnectedUser()
      .subscribe((value) => {
        this.user = value;
      });

  }

  onSave() {
    this.chatService
      .updateProfile(this.user)
      .then(() => {
        this.goBack();
      });
  }

  goBack() {
    this.routerExtensions.back();
  }

  createRandomImageUrls() {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(`https://robohash.org/${Math.floor(Math.random() * 5000)}?set=set${Math.floor(Math.random() * 3) + 1}`);
    }
    return result;
  }

  setUserImage(url) {
    this.user.image = url;
  }
}

