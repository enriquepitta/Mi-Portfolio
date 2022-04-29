// OBTENER ELEMENTOS ATRAVEZ DE SU ID
const toggleTheme = document.getElementById("toggle-theme")
const toggleLanguage = document.getElementById("toggle-language")
const toggleLanguageText = document.getElementById("english")

const toggleText = document.getElementById("toggle-text")
const toggleColors = document.getElementById("toggle-colors")
const rootStyles = document.documentElement.style

toggleColors.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'colors__item') {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
  }
})

// CUANDO ESCUCHA EL CLICK CAMBIAR LA CLASE AL BODY Y AL TOGGLE
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  toggleTheme.classList.toggle("active")
  toggleText.textContent = (toggleText.textContent == "Dark" ? "Light" : "Dark")
})

toggleLanguage.addEventListener("click", () => {
  toggleLanguage.classList.toggle("active")
  toggleLanguageText.textContent = (toggleLanguageText.textContent == "English" ? "Español" : "English")
  toggleLanguage.dataset.language = (toggleLanguage.dataset.language == "en" ? "es" : "en")

  console.log(toggleLanguage.dataset.language)
})

