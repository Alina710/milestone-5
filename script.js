document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleWorkExperience");
    var workExperience = document.getElementById("workExperience");
    toggleButton.addEventListener("click", function () {
        if (workExperience.style.display === "none") {
            workExperience.style.display = "block";
            toggleButton.innerText = "Hide Work Experience";
        }
        else {
            workExperience.style.display = "none";
            toggleButton.innerText = "Show Work Experience";
        }
    });
    var editableSections = document.querySelectorAll('.objective, .contact-section, .education, .skills, .projects, .Quizzes-section, .information');
    editableSections.forEach(function (section) {
        section.addEventListener('click', function () {
            if (!section.isContentEditable) {
                section.contentEditable = 'true';
                section.classList.add('editable');
                section.focus();
                section.addEventListener('blur', function () {
                    section.contentEditable = 'false';
                    section.classList.remove('editable');
                }, { once: true });
            }
        });
    });
    var generateLinkButton = document.getElementById("generateLink");
    var usernameInput = document.getElementById("username");
    var shareableLinkDisplay = document.getElementById("shareableLink");
    generateLinkButton.addEventListener("click", function () {
        var username = usernameInput.value.trim();
        if (username) {
            var shareableLink = "".concat(username, ".vercel.app/resume");
            shareableLinkDisplay.textContent = "Shareable Link: ".concat(shareableLink);
        }
        else {
            alert("Please enter a username.");
        }
    });
    var downloadButton = document.getElementById("downloadResume");
    downloadButton.addEventListener("click", function () {
        var element = document.getElementById('resume');
        var opt = {
            margin: 1,
            filename: "".concat(usernameInput.value || "resume", ".pdf"),
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
