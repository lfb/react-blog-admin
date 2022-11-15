import { useEffect, useRef } from 'react'

export const useDocumentTitle = (title, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(
    () => () => {
      if (!keepOnUnmount) {
        document.title = oldTitle
      }
    },
    [keepOnUnmount, oldTitle]
  )
}
