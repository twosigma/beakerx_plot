/*
 *  Copyright 2017 TWO SIGMA OPEN SOURCE, LLC
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

import { VBoxModel as JupyterVBoxModel, VBoxView as JupyterVBoxView } from '@jupyter-widgets/controls';
import { BEAKERX_MODULE_VERSION } from '../version';

export class GridViewModel extends JupyterVBoxModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: 'GridViewModel',
      _view_name: 'GridView',
      _model_module: 'beakerx_widgets.outputs',
      _view_module: 'beakerx_widgets.outputs',
      _model_module_version: BEAKERX_MODULE_VERSION,
      _view_module_version: BEAKERX_MODULE_VERSION,
    };
  }
}

export class GridView extends JupyterVBoxView {
  render() {
    super.render.apply(this);
    this.$el.addClass('beaker-grid-view');
  }
}
