class BurgerNav {
  constructor(
    burgerBtnSelector = '.burger-button',
    navContainerSelector = '.header__nav',
    openBurgerClassName = 'main-nav-is-open',
    mainParentWrapperSelector = 'body',
    resolutionForClose = 768
  ) {
    this.burgerButtonSelector = burgerBtnSelector
    this.burgerButton = document.querySelector(burgerBtnSelector)
    this.mainParentWrapper = document.querySelector(mainParentWrapperSelector)
    this.openBurgerClassName = openBurgerClassName
    this.navContainerSelector = navContainerSelector
    this.resolutionForClose = resolutionForClose

    //Если удалось найти кнопку бургера и главный родительский контейнер
    if (this.burgerButton && this.mainParentWrapper) {
      this.mainParentWrapper.addEventListener('click', (e) => {
        let target = e.target,
          navContainer = target.closest(this.navContainerSelector),
          burgerBtn = target.closest(this.burgerButtonSelector)

        //Если навигация закрыта и кликнули по бургеру
        if (!this.mainParentWrapper.classList.contains(this.openBurgerClassName) && burgerBtn) {
          this.openNav()
          //Если навигация открыта и кликнули мимо блока навигации
        } else if (this.mainParentWrapper.classList.contains(this.openBurgerClassName) && !navContainer) {
          this.closeNav()
          //Если навигация открыта и кликнули по бургеру
        } else if (this.mainParentWrapper.classList.contains(this.openBurgerClassName) && burgerBtn) {
          this.closeNav()
        }
      })

      //При каком разрешении закрывать открытое меню
      window.addEventListener('resize', (e) => {
        let wWidth = window.innerWidth

        //Закрыть бургег меню если оно было открыто на мобильной версии, а разрешение изменилось до десктопного
        if (this.mainParentWrapper.classList.contains(this.openBurgerClassName) && wWidth > resolutionForClose) {
          this.closeNav()
        }
      })
    }
  }

  openNav() {
    this.mainParentWrapper.classList.add(this.openBurgerClassName)
  }

  closeNav() {
    this.mainParentWrapper.classList.remove(this.openBurgerClassName)
  }
}

export default BurgerNav
