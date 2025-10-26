    document.addEventListener('DOMContentLoaded', function() {
    const asideNavInputs = document.querySelectorAll('aside input[name="aside-navigation"]');
    const contentArticles = document.querySelectorAll('.content > article');

    function hideAllArticles() {
    contentArticles.forEach(article => {
    article.style.display = 'none';
});
}

    function showArticle(index) {
    hideAllArticles();
    if (contentArticles[index]) {
    contentArticles[index].style.display = 'block';
}

    asideNavInputs.forEach(input => {
    input.checked = false;
});

    if (asideNavInputs[index]) {
    asideNavInputs[index].checked = true;
}
}

    asideNavInputs.forEach((input, index) => {
    input.addEventListener('change', function() {
    if (this.checked) {
    showArticle(index);
}
});
});

    hideAllArticles();
    window.showArticle = showArticle;
    showArticle(0);
});
