const body = document.querySelector('body')
const svgAnimSteps = document.querySelectorAll('svg g[data-name]')
const buttons = new DocumentFragment()
const navUl = document.createElement('ul')
      navUl.classList.add('step-nav')
body.appendChild(navUl)
svgAnimSteps.forEach((item, i) => {
  let stepName = item.dataset.name
  let li = document.createElement('li')
      li.classList.add(stepName)
  let a = document.createElement('a')
      a.innerText = stepName
      a.href = '#'
      a.addEventListener('click', (e) => {
        e.preventDefault()
        let animSelector = 'svg g[data-name="' + stepName + '"] animate[begin="indefinite"]'
            animSelector += ', svg g[data-name="' + stepName + '"] animateMotion[begin="indefinite"]'
        document.querySelectorAll(animSelector).forEach((anim, j) => {
          anim.beginElement()
          anim.addEventListener('beginEvent', animationBegin(e, stepName, anim))
          anim.addEventListener('endEvent', animationEnd(e, stepName, anim))
          if(body.classList.length){
            body.classList.remove(body.classList[0])
          }
          body.classList.add(stepName)
          navUl.querySelectorAll('a').forEach((item, i) => {
            item.classList.remove('active')
          });
          e.target.classList.add('active')
        })
      })
  li.appendChild(a)
  buttons.appendChild(li)
});
navUl.appendChild(buttons)

/* Callback to cutomize */
function animationBegin(e, stepName, anim){
  console.log(anim)
}
function animationEnd(e, stepName, anim){}