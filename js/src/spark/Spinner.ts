/*
 *  Copyright 2018 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { BEAKERX_MODULE_VERSION } from '../version';
import { DOMWidgetModel, DOMWidgetView } from '@jupyter-widgets/base';

export class SpinnerModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'SpinnerView',
      _model_name: 'SpinnerModel',
      _model_module: 'beakerx_widgets.spark',
      _view_module: 'beakerx_widgets.spark',
      _model_module_version: BEAKERX_MODULE_VERSION,
      _view_module_version: BEAKERX_MODULE_VERSION,
    };
  }
}

export class SpinnerView extends DOMWidgetView {
  public render() {
    const title = this.model.get('title');

    this.el.innerHTML = `
<div title="${title}" class="lds-css ng-scope">
  <div class="lds-spinner" style="100%; height:100%">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
</div>`;
  }
}
