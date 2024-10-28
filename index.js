import { animate } from "popmotion"
const navSelections = document.querySelectorAll('.header-item')

for (i=0; i < navSelections.length; i++) {
}


animate({
  from: 0,
  to: 100,
  onUpdate: latest => console.log(latest)
})