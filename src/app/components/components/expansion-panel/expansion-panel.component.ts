import { Component } from '@angular/core';

import { MdInput } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';

import { TdExpansionPanelComponent } from '../../../../platform/core';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    TdExpansionPanelComponent,
    MdInput,
    MD_LIST_DIRECTIVES,
    MdIcon,
    MdButton,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-expansion-panel-demo',
  styleUrls: ['expansion-panel.component.css'],
  templateUrl: 'expansion-panel.component.html',
})
export class ExpansionPanelDemoComponent {

  expansionAttrs: Object[] = [{
    description: 'Sets label of [TdExpansionPanelComponent] header. Defaults to "Click to expand"',
    name: 'label?',
    type: 'string',
  }, {
    description: 'Sets sublabel of [TdExpansionPanelComponent] header.',
    name: 'sublabel?',
    type: 'string',
  }, {
    description: 'Toggles [TdExpansionPanelComponent] between expand/collapse.',
    name: 'expand?',
    type: 'boolean',
  }, {
    description: `Hides icon and disables header, blocks click event and sets [TdExpansionPanelComponent] 
                  to collapse if "true".`,
    name: 'disabled?',
    type: 'boolean',
  }, {
    description: 'Event emitted when [TdExpansionPanelComponent] is expanded.',
    name: 'expanded?',
    type: 'function()',
  }, {
    description: 'Event emitted when [TdExpansionPanelComponent] is collapsed.',
    name: 'collapsed?',
    type: 'function()',
  }];

  expandCollapseExpansion1Msg: string = 'No expanded/collapsed detected yet';
  expansion1: boolean = false;
  disabled: boolean = false;

  toggleExpansion1(): void {
    if (!this.disabled) {
      this.expansion1 = !this.expansion1;
    }
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  expandExpansion1Event(): void {
    this.expandCollapseExpansion1Msg = 'Expand event emitted.';
  }

  collapseExpansion1Event(): void {
    this.expandCollapseExpansion1Msg = 'Collapse event emitted.';
  }
}
