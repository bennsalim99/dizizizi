function toggleSection(sectionId) {
    // Tüm bölümleri gizle
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Seçilen bölümü göster
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
