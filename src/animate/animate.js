import gsap from "gsap";

export const animationFrom = (element,props,children) => {
  if(children) {
    gsap.from(element.value.children, {
      ...props
    })
    return;
  }
  
  gsap.from(element.value, {
    ...props
  })
}

export const animationTo = (element, props) => {
  gsap.to(element.value, {
    ...props
  })
}