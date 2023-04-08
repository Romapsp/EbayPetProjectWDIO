

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

    get electronicsImage() {
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

    get collectiblesImage() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(5) > div.hl-cat-nav__flyout > div.hl-cat-nav__rtm > div > map > area')
    }

    get ebayLiveBtn() {
        return $('#mainContent > div.hl-cat-nav > ul > li.hl-cat-nav__js-tab.hl-cat-nav__no-sub > a')
    }

    get headerMoreMenu() {
        return $('#mainContent > div.hl-cat-nav > ul > li.hl-cat-nav__more.hl-cat-nav__js-tab.hl-cat-nav__js-more-show > span')
    }

    get sliderMenu1() {
        return $('//*[@id="s0-0-33-4-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[1]')
    }
    
    get sliderMenu2() {
        return $('//*[@id="s0-0-33-4-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[2]')
    }
    
    get sliderMenu3() {
        return $('//*[@id="s0-0-33-4-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[3]')
    }
    
    get sliderMenu4() {
        return $('//*[@id="s0-0-33-4-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[4]')
    }      

    get playbackBtn() {
        return $('//*[@id="s0-0-33-4-0-0[0]-2-match-media-0-ebay-carousel-container"]/button[3]')
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
        await this.electronicsImage.waitForExist()
        await this.electronicsImage.click()
    }

    async hoverOnCollectiblesMenuBtn() {
        await this.collectiblesMenuBtn.moveTo()
        await browser.pause(500)
    }

    async openCollectiblesLink() {
        await this.collectiblesMenuTopCategoriesLinks[7].click()
    }

    async clickOnCollectiblesImage() {
        await this.collectiblesImage.waitForExist()
        await this.collectiblesImage.click()
    }

    async checkIfEbayLiveIsDisplayed() {

        if (await this.ebayLiveBtn.isDisplayed()){
            await browser.pause(1000)
        } else {
            await this.headerMoreMenu.moveTo()
            await browser.pause(1000)
        }
    }

    async clickOnEbayLiveBtn() {
        await this.ebayLiveBtn.click()
    }

    async checkIfCarouselIsDisplayed() {
        for (let i = 1; i <= 4; i++) {
            const sliderMenu = $(`/html/body/div[5]/div[3]/div/div/div/div/ul/li[${i}]`)
            if (await sliderMenu.isDisplayed()) {
                return true
            }
        }
        return false
    }

    async turnOnPlaybackBtn() {
        // Play Banner Carousel - property when carousel is paused 
        // Pause Banner Carousel - property when carousel is played
        const playbackValue = await this.playbackBtn.getAttribute('aria-label')
        if (playbackValue === 'Play Banner Carousel') {
            await this.playbackBtn.click()
            await expect(playbackValue).toBeEqual('Pause Banner Carousel')
            console.log(`Value is ${playbackValue} `)
        } else if (playbackValue === 'Pause Banner Carousel'){
            console.log(`Value is ${playbackValue} `)
            return true
        }
    }

    async allSlidesAreDisplayed() {
        const slides = [this.sliderMenu1, this.sliderMenu2, this.sliderMenu3, this.sliderMenu4]
        for (let i = 0; i < slides.length; i++) {
          const slide = slides[i]
          await slide.waitForDisplayed({timeout: 5000})
          const isDisplayedInViewport = await slide.isDisplayedInViewport()
          if (!isDisplayedInViewport) {
            console.log(`Slide ${i + 1} is not displayed in viewport`)
            return false
          }
          console.log(`Slide ${i + 1} is displayed in viewport`)
          if (i < slides.length - 1) {
            await browser.pause(3000)
          }
        }
        console.log('All slides are displayed in viewport')
        return true
      }
      
    
      
}

export default new HomePage()

