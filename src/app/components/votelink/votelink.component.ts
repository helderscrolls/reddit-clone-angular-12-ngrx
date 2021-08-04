import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votelink',
  templateUrl: './votelink.component.html',
  styleUrls: ['./votelink.component.scss']
})
export class VotelinkComponent implements OnInit {

  @Input() points: number
  @Output() upvote = new EventEmitter()
  @Output() downvote = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  upVoteArticle = () => {
    this.upvote.emit()
  }

  downVoteArticle = () => {
    this.downvote.emit()
  }

}
