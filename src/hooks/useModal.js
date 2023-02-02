/* eslint-disable space-before-function-paren */
import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

export default function useModal() {
  function open(payload = {}) {
    // abre o modal
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }

  function close(payload = {}) {
    // fecha o modal
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }

  function listen(fn) {
    // recebe a função que precisa ficar escutando
    bus.on(EVENT_NAME, fn)
  }

  function off(fn) {
    // para poder parar de escutar
    bus.off(EVENT_NAME, fn)
  }
  return { open, close, listen, off }
}
