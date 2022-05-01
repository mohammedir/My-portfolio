import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'pf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = false;

  constructor() {

  }

  ngOnInit(): void {

  }
  header_variable = false
  @HostListener('document:scroll')
  onWindowScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
      this.header_variable = true
    } else {
      this.header_variable = false
    }
  }
  Collapsed(){
    this.isCollapsed = !this.isCollapsed
  }



}
