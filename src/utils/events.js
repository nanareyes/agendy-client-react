const on = (eventType, listener) => {
  document.addEventListener(eventType, listener)
}

const off = (eventType, listener) => {
  document.removeEventListener(eventType, listener)
}

const once = (eventType, listener) => {
  on(eventType, handleEventOnce)

  function handleEventOnce(event) {
    listener(event)
    off(eventType, handleEventOnce)
  }
}

const trigger = (eventType, data) => {
  const event = new CustomEvent(eventType, {detail: data})
  document.dispatchEvent(event)
}

export {on, once, off, trigger}
