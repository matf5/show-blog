import marked from 'marked';
import xss from 'xss';
import hljs from 'highlight.js';

export const translateMarkdown = (plainText, isGuardXss=false) => {
  return marked(isGuardXss ? xss(plainText) : plainText, {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight(code) {
      return hljs.highlightAuto(code).value;
    },
  });
}