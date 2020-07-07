import React, { Component, useEffect, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { translateMarkdown } from '@/utils/marked';
import './index.scss';

function MdEditor(props) {
  return (
    <SimpleMDE
      value={props.value}
      onChange={props.onChange}
      options={{ autofocus: true, autosave: {
        timeFormat: 0
      }, previewRender: translateMarkdown }}>
    </SimpleMDE>
  )
}
export default MdEditor;
