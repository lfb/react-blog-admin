/**
 * 像编辑器里面插入内容
 *
 * @param editor
 * @param value
 */
export const insertEditor = (editor, value) => {
  // IE
  if (document.selection) {
    editor.focus()
    const sel = document.selection.createRange()
    sel.text = value
    sel.select()
  } else if (editor.selectionStart || editor.selectionStart === '0') {
    const startPos = editor.selectionStart
    const endPos = editor.selectionEnd
    const beforeValue = editor.value.substring(0, startPos)
    const afterValue = editor.value.substring(endPos, editor.value.length)

    editor.value = beforeValue + value + afterValue

    editor.selectionStart = startPos + value.length
    editor.selectionEnd = startPos + value.length
    editor.focus()
  } else {
    editor.value += value
    editor.focus()
  }
}
