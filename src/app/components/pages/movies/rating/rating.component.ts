import { AfterViewInit, Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"],
})
export class RatingComponent implements OnInit {
  @Input() rating!: number;
  constructor() {}

  ngOnInit() {}

  numSequence(): Array<number> {
    let length = Math.floor(this.rating);
    return new Array(length);
  }
}
