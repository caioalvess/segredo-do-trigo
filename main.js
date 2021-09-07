

//  Função responsiva menu
    const navToggle = document.querySelector('.nav-toggler');
    navToggle.addEventListener('click', toggleNavbar);

    function toggleNavbar() {
        navToggle.classList.toggle('active');
        document.querySelector('.nav').classList.toggle('open');
    }
    
    // Fechar navBar responsivo quando clicar no item

    document.addEventListener('click', function(e){
        if(e.target.closest('.nav-item')) {
            toggleNavbar();
        }
    })

    // sticky header effect 

    window.addEventListener('scroll', function(){

        if(this.pageYOffset > 60){
            document.querySelector('.header').classList.add('sticky');
            document.querySelector('.logo').style.visibility = 'visible';
        }
        else {
            document.querySelector('.header').classList.remove('sticky');
            document.querySelector('.logo').style.visibility = 'hidden';
        }
    });

    // filter our menu

    const menuTabs = document.querySelector('.menu-tabs');
    menuTabs.addEventListener('click', (e) => {
        if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
            const target = e.target.getAttribute('data-target');
            menuTabs.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            menuSection = document.querySelector('.menu-section');
            menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
            menuSection.querySelector(target).classList.add('active');
        }
    })


    // see more menu

    const secMenu = document.querySelector('.menu-section');
    const seelessButtom = document.querySelector('.seeless-button');
    const seemoreButton = document.querySelector('.seemore-button');
    seemoreButton.addEventListener('click', () => {
        event.preventDefault;
        secMenu.classList.add('height-menuSection');
        document.querySelector('.see-more').style.display = 'none';
        document.querySelector('.see-less').style.display = 'flex';
    })

    seelessButtom.addEventListener('click', () => {
        secMenu.classList.remove('height-menuSection');
        document.querySelector('.see-less').style.display = 'none';
        document.querySelector('.see-more').style.display = 'flex'; 
    })

