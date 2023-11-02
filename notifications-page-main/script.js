function read() {
    const notRead = document.querySelectorAll('.notRead');
    notRead.forEach(e => {
        e.classList.remove('notRead');
    });
    
}