const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
const body = document.body

body.addEventListener('dragstart', dragStart)
body.addEventListener('dragend', dragEnd)

for(const empty of empties) {
}