export default {
  bind(el, {value}) {
    M.Tooltip.init(el, {html: value})
  },
  unbind(el) {
    let tooltip = M.Tooltip.getInstance(el)

    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  }
}
