import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private content: string;
  public searchTerm: string;
  public searchTerm2: string;

  constructor() {
    this.content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  }

  ngOnInit() {
  }

  highlight() {
    if(!this.searchTerm) {
      return this.content;
    }
    return this.content.replace(new RegExp(this.searchTerm, "gi"), match => {
      return '<span class="highlightText">' + match + '</span>';
    });
  }

  highlightSensitive() {
    if(!this.searchTerm2) {
      return this.content;
    }
    return this.content.replace(new RegExp(this.searchTerm2, "g"), match => {
      return '<span class="highlightText">' + match + '</span>';
    });
  }
}