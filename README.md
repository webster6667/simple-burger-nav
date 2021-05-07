<p align="center" style="text-align:center">
    <img src="https://image.flaticon.com/icons/svg/786/786948.svg" alt="drawing" width="100"/>
</div>

# Burger menu

Simple script which create burger nav
  
Select class for burger button, and burger container  

When user click on burger button, script will add class to body  
You can create you logic or animation from this class

If user click past nav-container or on burger button again  
Open class will remove.

You can change variable which create logic  

##Install

```
npm i simple-burger-nav
```

**Add to you script**
```javascript
import BurgerNav from 'simple-burger-nav';
```

## Use
```javascript
import BurgerNav from 'simple-burger-nav';

document.addEventListener('DOMContentLoaded',function () {
    let burgerNav = new BurgerNav('.main-nav__item_burger','.main-nav');
});
```

##Config
```
new BurgerNav(burgerBtnSelector = '.burger-button', navContainerSelector = '.header__nav', openBurgerClassName = 'main-nav-is-open', mainParentWrapperSelector = 'body', resolutionForClose = 768);
```


* burgerBtnSelector - button open/close trigger
* navContainerSelector - wrapper which contain all navigation items
* openBurgerClassName - class which will add to `mainParentWrapperSelector` when nav is open
* mainParentWrapperSelector - to this wrapper will add `openBurgerClassName`
* resolutionForClose - on this resolution `openBurgerClassName` will remove from `mainParentWrapperSelector`, if window resizing

##Author

webster6667