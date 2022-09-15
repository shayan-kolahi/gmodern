import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



//          $(".sidebar-dropdown > a").click(function() {
//            $(".sidebar-submenu").slideUp(200);
//            if (
//              $(this)
//                .parent()
//                .hasClass("active")
//            ) {
//              $(".sidebar-dropdown").removeClass("active");
//              $(this)
//                .parent()
//                .removeClass("active");
//            } else {
//              $(".sidebar-dropdown").removeClass("active");
//              $(this)
//                .next(".sidebar-submenu")
//                .slideDown(200);
//              $(this)
//                .parent()
//                .addClass("active");
//            }
//          });




}
