# angular-editor-component v1.0.1

该库是用 [Angular CLI](https://github.com/angular/angular-cli) 9.1.7 生成的。依赖于[tui.editor](https://github.com/nhn/tui.editor)。

## 安装

运行 `npm i --save angular-editor-component` 安装.

## 使用方法

``` TypeScript
...
import { EditorModule } from 'angular-editor-component';

@NgModule({
    ...
    imports: [
        EditorModule    // 引入模块
    ]
})
export class AppModule { }
```

在html文件中使用

``` html
<ng-editor></ng-editor>
```

## 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| height | string | 设置编辑器整体的高度 |
| minHeight | string | 设置编辑器的最小高度 |
| previewStyle | 'tab' \| 'vertical' | 预览的样式 |
| language | string | i18n, 设置编辑器的语言，默认中文 |
| initialValue | string | 编辑器的初始内容 |
| initialEditType | stirng | 初始编辑的类型 |
| placeholder | string | 编辑器占位符 |
| toolbarItems | string[] | 一个数组，设置需要显示的工具条中按钮的数量 |

## 事件

| 事件名 | 何时触发 |
| --- | ---- |
| onload | 当编辑器实例创建完成时触发，并返回编辑器实例 |
| onchange | 当内容发生变化时触发 |
| stateChange | 状态改变时触发 |
| onfocus | 编辑器聚焦时触发 |
| onblur | 编辑器失焦时触发 |
| addImageBlobHook | 添加图片时触发 |
| previewBeforeHook | 预览时触发 |

> 全面的API请访问[这里](https://nhn.github.io/tui.editor/latest/DefaultUI#createPopup)。如有更复杂的需求，推荐直接使用[tui-editor](https://github.com/nhn/tui.editor)。