import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faContactCard ,faHeartbeat,faArrowRightFromBracket,faDroplet, faArrowRight, faFireFlameCurved, faRoute} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 fafire = faFireFlameCurved
 faArrow = faArrowRight
 faDrop = faDroplet
 faRoute = faRoute
 faArrowRight = faArrowRightFromBracket
 faHeart = faHeartbeat
  constructor() { }

  ngOnInit(): void {
  }

}
