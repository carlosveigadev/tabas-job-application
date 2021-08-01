const createNavbar = () => {
    const body = document.querySelector('body');
    const navbar = document.createElement('nav');
    navbar.id = 'header';
    navbar.className = 'navbar fixed-top';

    const imgLogoAnchor = document.createElement('a');
    imgLogoAnchor.href = 'https://tabas.com/';
    imgLogoAnchor.className = 'tabas-navbar-logo py-1 py-xl-0';

    const imgLogo = document.createElement('img');
    imgLogo.src = './assets/images/tabas-logo.svg';
    imgLogo.alt = 'Tabas Logo Image';

    imgLogoAnchor.append(imgLogo);
    navbar.append(imgLogoAnchor);

    const unorderedList = document.createElement('ul');
    unorderedList.className = 'navigation-menu d-none d-xl-block';

    const list = document.createElement('li');
    const nameLinks = [
        { linkName: 'APARTAMENTOS', link: 'https://tabas.com/apartments/sao-paulo' },
        { linkName: 'PROPRIETÁRIO', link: 'https://tabas.com/propertyowner' },
        { linkName: 'EMPRESA', link: 'https://tabas.com.br/empresa' },
        { linkName: 'BLOG', link: 'https://www.blog.tabas.com.br/' },
        { linkName: 'LANGUAGE' },
        { linkName: 'SUPORTE' },
        { linkName: 'ENTRAR', link: 'https://tabas.com.br/member/login' },
        { linkName: 'REGISTRAR', link: 'https://tabas.com.br/member/sign_up'}
    ]

    nameLinks.forEach(element => {
        const anchor = document.createElement('a');

        if (element.linkName === 'LANGUAGE') {
            const languageImg = document.createElement('img');
            languageImg.src = './assets/images/language-icon.svg';
            languageImg.alt = 'Language Icon';
            anchor.className = 'language-icon';
            anchor.href = '#';
            anchor.append(languageImg);
            list.append(anchor);
        } else {
            anchor.innerHTML = `${element.linkName}`;
            anchor.href = `${element.link}`;
            anchor.className = 'text-white';
            element.linkName === 'SUPORTE' && anchor.classList.add('support-border');
            list.append(anchor);
        }

        unorderedList.append(list);
        navbar.append(unorderedList);
    });

    body.append(navbar);
}

export default createNavbar;
