export interface ButtonOptions {
    el?: HTMLElement;
    className?: string;
    command?: string;
    event?: string;
    text?: string;
    tooltip?: string;
    style?: string;
    state?: string;
  }

export interface ToolbarButton {
    type: string;
    options: ButtonOptions;
}

export type LinkAttribute = {
    rel: string;
    target: string;
    contenteditable: boolean | 'true' | 'false';
    hreflang: string;
    type: string;
};

export type SourceType = 'wysiwyg' | 'markdown';

export interface ToolbarState {
    strong: boolean;
    emph: boolean;
    strike: boolean;
    code: boolean;
    codeBlock: boolean;
    blockQuote: boolean;
    table: boolean;
    heading: boolean;
    list: boolean;
    orderedList: boolean;
    taskList: boolean;
}

export type MarkdownToolbarState = ToolbarState & {
    thematicBreak: boolean;
    source: 'markdown';
};

export type WysiwygToolbarState = ToolbarState & {
    source: 'wysiwyg';
};
