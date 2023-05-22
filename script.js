const skills = document.getElementById('skills')
const experiences = document.getElementById('experiences')
const educations = document.getElementById('educations')

const skillsContent = document.getElementById('skills-content')
const experiencesContent = document.getElementById('experiences-content')
const educationsContent = document.getElementById('educations-content')

skills.addEventListener('click', () => {
  skillsContent.style.display = 'block'
  experiencesContent.style.display = 'none'
  educationsContent.style.display = 'none'
})

experiences.addEventListener('click', () => {
  skillsContent.style.display = 'none'
  experiencesContent.style.display = 'block'
  educationsContent.style.display = 'none'
})

educations.addEventListener('click', () => {
  skillsContent.style.display = 'none'
  experiencesContent.style.display = 'none'
  educationsContent.style.display = 'block'
})