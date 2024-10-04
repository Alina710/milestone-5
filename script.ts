declare var html2pdf: any; 

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleWorkExperience") as HTMLButtonElement;
  const workExperience = document.getElementById("workExperience") as HTMLDivElement;

  toggleButton.addEventListener("click", () => {
    if (workExperience.style.display === "none") {
      workExperience.style.display = "block";
      toggleButton.innerText = "Hide Work Experience";
    } else {
      workExperience.style.display = "none";
      toggleButton.innerText = "Show Work Experience";
    }
  });

 
  const editableSections = document.querySelectorAll<HTMLElement>('.objective, .contact-section, .education, .skills, .projects, .Quizzes-section, .information');

  editableSections.forEach(section => {
    section.addEventListener('click', () => {
     
      if (!section.isContentEditable) {
        section.contentEditable = 'true';
        section.classList.add('editable'); 
        section.focus();

       
        section.addEventListener('blur', () => {
          section.contentEditable = 'false';
          section.classList.remove('editable'); 
        }, { once: true }); 
      }
    });
  });

  
  const generateLinkButton = document.getElementById("generateLink") as HTMLButtonElement;
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const shareableLinkDisplay = document.getElementById("shareableLink") as HTMLParagraphElement;

  generateLinkButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
     
      const shareableLink = `${username}.vercel.app/resume`;
      shareableLinkDisplay.textContent = `Shareable Link: ${shareableLink}`;
    } else {
      alert("Please enter a username.");
    }
  });

 
const downloadButton = document.getElementById("downloadResume") as HTMLButtonElement;
downloadButton.addEventListener("click", () => {
  const element = document.getElementById('resume') as HTMLElement; 
  const opt = {
    margin: 1,
    filename: `${usernameInput.value || "resume"}.pdf`, 
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  
  html2pdf()
    .from(element)
    .set(opt)
    .save();
});

});
