

class HomePage {
    get signInLink() {
        return $('#gh-ug > a')
    }

    get registerLink() {
        return $('#gh-ug-flex > a')
    }

    get dailyDealsLink() {
        return $('#gh-p-1 > a')
    }

    get brandOutletLink() {
        return $('#gh-p-4 > a')
    }

    get helpAndContactLink() {
        return $('#gh-p-3 > a')
    }

    get sellLink() {
        return $('#gh-p-2 > a')
    }

    get watchlistLink() {
        return $('#gh-wl-click > div > a.gh-eb-li-a.gh-rvi-menu.watchlist-menu')
    }

    get expandedWatchlist() {
        return $('#gh-wl-click > div > a.gh-acc-exp-a.gh-acc-a2.gh-control')
    }

    get expandedWatchlistModule() {
        return $('#gh-wl-click-flyout')
    }

    get myEbayBtn() {
        return $('#gh-eb-My > div > a.gh-eb-li-a.gh-rvi-menu')
    }

    get myEbayMenuList() {
        return $('#gh-ul-nav').$$('li a')
    }

    get notificationBtn() {
        return $('#gh-eb-Alerts > div > button')
    }

    get notificationMenuContent() {
        return $('#ghn-err > span > a')
    }

    get cartBtn() {
        return $('#gh-minicart-hover > div > a.gh-eb-li-a.gh-rvi-menu')
    }

    get cartMenuContent() {
        return $('#gh-minicart-hover-body > div:nth-child(3) > div > div')
    }

    get ebayLogoBtn() {
        return $('#gh-la')
    }

    get searchInput() {
        return $('#gh-ac')
    }

    get searchBtn() {
        return $('#gh-btn')
    }

    get allCategoriesDropdown() {
        return $('#gh-cat-box')
    }

    get allCategoriesList() {
        return $('#gh-cat').$$('option')
    }

    get advancedLink() {
        return $('#gh-as-a')
    }

    get savedLink() {
        return $('#mainContent > div.hl-cat-nav > ul > li.saved > a')
    }

    get motorsMenuBtn() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(3) > a')
    }

    get motorsMenuPartAndAccessoriesLinks() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(3) > div.hl-cat-nav__flyout > div.hl-cat-nav__sub-cats > nav:nth-child(1)').$$('li a')
    }

    get motorsMenuVehiclesLinks() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(3) > div.hl-cat-nav__flyout > div.hl-cat-nav__sub-cats > nav:nth-child(2) > ul').$$('li a')
    }

    get motorsImage() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(3) > div.hl-cat-nav__flyout > div.hl-cat-nav__rtm > div > map > area')
    }

    get electronicsMenuBtn() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(4) > a')
    }

    get electronicsMenuTopCategoriesLinks() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(4) > div.hl-cat-nav__flyout > div.hl-cat-nav__sub-cats > nav:nth-child(1) > ul').$$('li a')
    }

    get ElectronicsImage() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(4) > div.hl-cat-nav__flyout > div.hl-cat-nav__rtm > div > map > area')
    }

    get electronicsMenuPopularCategoriesLinks() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(4) > div.hl-cat-nav__flyout > div.hl-cat-nav__sub-cats > nav:nth-child(2) > ul').$$('li a')
    }

    get collectiblesMenuBtn() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(5) > a')
    }

    get collectiblesMenuTopCategoriesLinks() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(5) > div.hl-cat-nav__flyout > div.hl-cat-nav__sub-cats > nav:nth-child(1) > ul').$$('li a')
    }

    get collectiblesMenuPopularCategoriesLinks() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(5) > div.hl-cat-nav__flyout > div.hl-cat-nav__sub-cats > nav:nth-child(2) > ul').$$('li a')
    }

    async clickOnSignInLink() {
        this.signInLink.click()
    }

    async clickOnRegisterLink() {
        this.registerLink.click()
    }

    async clickOnDailyDealsLink() {
        this.dailyDealsLink.click()
    }

    async clickOnBrandOutletLink() {
        this.brandOutletLink.click()
    }

    async clickOnHelpAndContactLink() {
        this.helpAndContactLink.click()
    }

    async clickOnSellLink() {
        this.sellLink.click()
    }

    async clickOnWatchlistLink() {
        this.watchlistLink.click()
    }

    async expandedWatchlistValue() {
        await this.expandedWatchlistModule.waitForDisplayed()
        return this.expandedWatchlist.getAttribute('aria-expanded')
    }

    async hoverOnMyEbayBtn() {
        await this.myEbayBtn.moveTo();
      }

    async allMyEbayMenuLinksAreDisplayed() {
        const links = await this.myEbayMenuList;
        for (let i = 0; i < links.length; i++) {
          if (!(await links[i].isDisplayed())) {
            return false
          }
        }
        return true
      }
      
    async myEbayMenuListLength() {
        return (await this.myEbayMenuList).length
      }

    async hoverOnNotificationBtn() {
        await this.notificationBtn.moveTo()
    }

    async hoverOnCartBtn() {
        await this.cartBtn.moveTo()
    }

    async searchValue(value) {
        await this.searchInput.setValue(value)
        await this.searchBtn.click()
    }

    async openAllCategoriesList() {
        await this.allCategoriesDropdown.click()
    }

    async openAdvancedLink() {
        await this.advancedLink.click()
    }

    async openSavedLink() {
        await this.savedLink.click()
    }

    async hoverOnMotorsMenuBtn() {
        await this.motorsMenuBtn.moveTo();
        await browser.pause(500)
    }
    
    async openMotorLink() {
        await this.motorsMenuVehiclesLinks[6].click()
    }

    async clickOnMotorsImage() {
        await this.motorsImage.waitForExist()
        await this.motorsImage.click()
    }

    async hoverOnElectronicsMenuBtn() {
        await this.electronicsMenuBtn.moveTo()
        await browser.pause(500)
    }

    async openElectronicsLink() {
        await this.electronicsMenuTopCategoriesLinks[7].click()
    }

    async clickOnElectronicsImage() {
        await this.ElectronicsImage.waitForExist()
        await this.ElectronicsImage.click()
    }

    async hoverOnCollectiblesMenuBtn() {
        await this.collectiblesMenuBtn.moveTo()
        await browser.pause(500)
    }
}

export default new HomePage()

