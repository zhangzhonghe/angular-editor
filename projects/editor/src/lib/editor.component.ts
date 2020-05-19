import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

import Editor, { EditorOptions } from '@toast-ui/editor';
import '@toast-ui/editor/dist/i18n/zh-cn';
import {
  LinkAttribute,
  ToolbarButton,
  MarkdownToolbarState,
  SourceType,
  WysiwygToolbarState
} from './type';

@Component({
  selector: 'ng-editor',
  template: `
    <div #editor></div>
  `,
  styleUrls: ['editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, AfterViewInit {
  @Input() height = '600px';
  @Input() minHeight: string;
  @Input() previewStyle: 'tab' | 'vertical' = 'vertical';
  @Input() language = 'zh-CN';
  @Input() initialValue: string;
  @Input() initialEditType: string;
  @Input() placeholder: string;
  @Input() useCommandShortcut: boolean;
  @Input() useDefaultHTMLSanitizer: boolean;
  @Input() usageStatistics: boolean;          // 是否跟踪用户使用数据
  @Input() referenceDefinition: boolean;
  @Input() previewHighlight: boolean;

  @Input() linkAttribute: LinkAttribute;
  @Input() toolbarItems: (string | ToolbarButton)[];
  @Input() hideModeSwitch: boolean;
  @Input() plugins: string[];

  @Output() onload = new EventEmitter<Editor>();
  @Output() onchange = new EventEmitter<{ source: SourceType | 'viewer'; data: MouseEvent }>();
  @Output() stateChange = new EventEmitter<MarkdownToolbarState | WysiwygToolbarState>();
  @Output() onfocus = new EventEmitter<{ source: SourceType }>();
  @Output() onblur = new EventEmitter<{ source: SourceType }>();
  @Output() previewBeforeHook = new EventEmitter<string>();
  @Output() addImageBlobHook = new EventEmitter<{ blob: Blob | File, callback: (url: string, altText: string) => void }>();

  @ViewChild('editor') eBox: ElementRef<HTMLElement>;

  editor: Editor;

  constructor() { }

  ngOnInit(): void {
    if (this.language === 'zh-CN') {
      Editor.setLanguage('zh-CN', {
        WYSIWYG: '富文本'
      });
    }
  }

  ngAfterViewInit(): void {
    this.editor = new Editor(this.option);
  }

  get option(): EditorOptions {
    const result = {
      el: this.eBox.nativeElement,
      height: this.height,
      minHeight: this.minHeight,
      previewStyle: this.previewStyle,
      language: this.language,
      initialValue: this.initialValue,
      placeholder: this.placeholder,
      initialEditType: this.initialEditType,
      useCommandShortcut: this.useCommandShortcut,
      useDefaultHTMLSanitizer: this.useDefaultHTMLSanitizer,
      usageStatistics: this.usageStatistics,
      linkAttribute: this.linkAttribute,
      referenceDefinition: this.referenceDefinition,
      previewHighlight: this.previewHighlight,
      toolbarItems: this.toolbarItems || void(0),
      hideModeSwitch: this.hideModeSwitch,
      events: {
        load: param => this.onload.emit(param),
        change: param => this.onchange.emit(param),
        stateChange: param => this.stateChange.emit(param),
        focus: param => this.onfocus.emit(param),
        blur: param => this.onblur.emit(param)
      },
      hooks: {
        previewBeforeHook: html => this.previewBeforeHook.emit(html),
        addImageBlobHook: (blob, callback) => this.addImageBlobHook.emit({ blob, callback })
      }
    };

    // 过滤空属性
    Object.keys(result).filter(key => !result[key] && delete result[key]);

    return result;
  }

}
