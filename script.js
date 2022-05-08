// OBTENER ELEMENTOS ATRAVEZ DE SU ID
const toggle = document.getElementById("toggle")
const toggleLanguage = document.getElementById("toggle__language")
const toggleLanguageText = document.getElementById("toggle__language-text")

const toggleText = document.getElementById("toggle__text")
const toggleColors = document.getElementById("toggle-colors")
const rootStyles = document.documentElement.style



toggleColors.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'colors__item') {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
  }
})

// CUANDO ESCUCHA EL CLICK CAMBIAR LA CLASE AL BODY Y AL TOGGLE
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  toggle.classList.toggle("active")
  toggleText.textContent = (toggleText.textContent == "Dark" ? "Light" : "Dark")
})

toggleLanguage.addEventListener("click", () => {
  toggleLanguage.classList.toggle("active")
  toggleLanguageText.textContent = (toggleLanguageText.textContent == "English" ? "Español" : "English")
  toggleLanguage.dataset.language = (toggleLanguage.dataset.language == "en" ? "es" : "en")

  changeLanguage(toggleLanguage.dataset.language)
})


const textsToChange = document.querySelectorAll('[data-section]');


const changeLanguage = async language => {
  const requestJson = await fetch(`./languajes/${language}.json`)
  const texts = await requestJson.json()

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value
    textToChange.textContent = texts[section][value]
  }
}
