/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { ConfigEditorComponent } from './config-editor.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@alfresco/adf-core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

const routes: Routes = [
    {
      path: '',
      component: ConfigEditorComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(routes),
        MonacoEditorModule
    ],
    declarations: [ConfigEditorComponent]
})
export class AppConfigEditorModule {}
