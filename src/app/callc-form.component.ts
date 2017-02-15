import { Component } from '@angular/core';
import { CallcForm }    from './callcForm';

@Component({
    moduleId: module.id,
    selector: 'callc-form',
    templateUrl: 'callc-form.component.html'
})
    
export class CallcFormComponent {
        
    searchCriteria =  ['ATN', 'WTN', 'USOC'];
    model = new CallcForm(1, 'ATN', 'ATN', 'ATN');
    submitted = false;
    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
   // get diagnostic() { return JSON.stringify(this.model); }
    
  //  newCallc() { this.model = new Hero(1, '', '','');}
}