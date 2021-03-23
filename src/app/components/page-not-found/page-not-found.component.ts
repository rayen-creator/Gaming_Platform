import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-404',
  template: `
<div id="brand_carouse" class="ptb_60 text-center">
    <div class="type-01">
        <div class="row">
            <div class="col-sm-12">
                <div class='center'>
                <br/>
                <img src="assets/images/404.png" height="500px" width="50%"   />
                <br/>
                <a routerLink='' class="waves-effect waves-teal btn-flat"><button type="button" class="btn btn-dark">Back To Home</button></a>
              </div>
            </div>
        </div>
    </div>
</div>
    
  `
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
