// OBTENER ELEMENTOS ATRAVEZ DE SU ID
const toggleTheme = document.getElementById("toggle-theme")
const togleLanguage = document.getElementById("toggle-language")
const togleLanguageText = document.getElementById("english")

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

togleLanguage.addEventListener("click", (e) => { 
  togleLanguage.classList.toggle("active")
  togleLanguageText.textContent = (togleLanguageText.textContent == "English" ? "Español" : "English")
})

togleLanguage.addEventListener("click", (e) => {
  e.target.parentElement.dataset.language = (e.target.dataset.language == "en" ? "es" : "en")
  e.target.dataset.language = e.target.parentElement.dataset.language 
  // e.target.dataset.language
  console.log(e.target.parentElement.dataset.language);
})