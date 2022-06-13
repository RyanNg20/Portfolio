export const onWheel = (e:any) => {e.currentTarget.scrollLeft += e.deltaY}
export const onMouseOver = (fn: (arg0: boolean) => void) => fn(true)
export const onMouseLeave = (fn: (arg0: boolean) => void) => fn(false)