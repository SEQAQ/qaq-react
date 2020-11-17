/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './draft.css';
import './rich-editor.css';

import { Switch } from '@material-ui/core';
import { ContentState, convertFromRaw, convertToRaw, Editor, EditorState, getDefaultKeyBinding, RichUtils } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import React from 'react';

const { useState, useRef, useCallback } = React;

function MdEditor({ sourceChangeHandler, ...props }) {
  const initState = EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initState);
  const [mode, setMode] = useState(0);
  const editor = useRef(null);
  const modeString = ['Preview', 'Source'];
  const focus = () => {
    if (editor.current) {
      editor.current.focus();
    }
  };

  const setEditorStateWrapper = (state) => {
    const md = getMarkdown(state.getCurrentContent());
    if (sourceChangeHandler) {
      sourceChangeHandler(md);
    }
    setEditorState(state);
  };

  const handleKeyCommand = useCallback(
    (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorStateWrapper(newState);
        return 'handled';
      }
      return 'not-handled';
    },
    [setEditorStateWrapper]
  );

  const mapKeyToEditorCommand = useCallback(
    (e) => {
      switch (e.keyCode) {
        case 9: {
          // TAB
          const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
          if (newEditorState !== editorState) {
            setEditorStateWrapper(newEditorState);
          }
          return null;
        }
        default:
          break;
      }
      return getDefaultKeyBinding(e);
    },
    [editorState, setEditorStateWrapper]
  );

  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className = 'RichEditor-editor';
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }
  const getMarkdown = (content) => draftToMarkdown(convertToRaw(content));

  const mdToDraft = (mdContent) => convertFromRaw(markdownToDraft(mdContent));

  const changeView = () => {
    const mdBuffer = getMarkdown(contentState);
    if (mode === 1) {
      // Showing Markdown, turn to Rich Text
      const mdBuffer = editorState.getCurrentContent().getPlainText();
      setEditorStateWrapper(EditorState.createWithContent(mdToDraft(mdBuffer)));
    } else if (mode === 0) {
      // Showing Richtext, turn to markdown
      setEditorStateWrapper(EditorState.createWithContent(ContentState.createFromText(mdBuffer)));
    }
    setMode(1 - mode);
  };

  return (
    <div className="RichEditor-root" {...props}>
      <span>{modeString[mode]}</span>
      <Switch checked={mode === 0} onChange={changeView} color={'primary'}></Switch>
      {mode === 0 && (
        <div>
          <BlockStyleControls
            editorState={editorState}
            onToggle={(blockType) => {
              const newState = RichUtils.toggleBlockType(editorState, blockType);
              setEditorStateWrapper(newState);
            }}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={(inlineStyle) => {
              const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
              setEditorStateWrapper(newState);
            }}
          />
        </div>
      )}
      <div className={className} onClick={focus}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={setEditorStateWrapper}
          placeholder="蟹邀~"
          ref={editor}
          spellCheck={true}
        />
      </div>
    </div>
  );
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

/* eslint-disable-next-line */
function StyleButton({ onToggle, active, label, style }) {
  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span
      className={className}
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle(style);
      }}
    >
      {label}
    </span>
  );
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

// TODO: enforce props validation
// eslint-disable-next-line
function BlockStyleControls({ editorState, onToggle }) {
  // eslint-disable-next-line
  const selection = editorState.getSelection();
  // eslint-disable-next-line
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton key={type.label} active={type.style === blockType} label={type.label} onToggle={onToggle} style={type.style} />
      ))}
    </div>
  );
}

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

// eslint-disable-next-line react/prop-types
function InlineStyleControls({ editorState, onToggle }) {
  // eslint-disable-next-line react/prop-types
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton key={type.label} active={currentStyle.has(type.style)} label={type.label} onToggle={onToggle} style={type.style} />
      ))}
    </div>
  );
}

export default MdEditor;
