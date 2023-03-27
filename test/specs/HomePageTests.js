import HomePage from '../pageobjects/HomePage.js'



describe('Ebay HomePage', () => {
    beforeEach(async () => {
        await browser.url('https://www.ebay.com/')
      })
    it.skip ('displays title "Electronics, Cars, Fashion, Collectibles & More | eBay"', async() => {
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay') 
    })
    it.skip ('displays and opens "Sign in" link', async() => {
        await expect(HomePage.signInLink).toBeDisplayed()
        await HomePage.clickOnSignInLink()
        await expect(browser).toHaveTitle('Security Measure')
        await browser.url('https://www.ebay.com/')
    })
    it.skip ('displays and opens "register" link', async() => {
        await expect(HomePage.registerLink).toBeDisplayed()
        await HomePage.clickOnRegisterLink()
        await expect(browser).toHaveTitle('Security Measure')
    })
    it.skip ('displays and opens "Daily Deals" link', async() => {
        await expect(HomePage.dailyDealsLink).toBeDisplayed()
        await HomePage.clickOnDailyDealsLink()
        await expect(browser).toHaveTitle('Daily Deals on eBay | Best deals and Free Shipping')
    })
    it.skip ('displays and opens "Brand Outlet" link', async() => {
        await expect(HomePage.brandOutletLink).toBeDisplayed()
        await HomePage.clickOnBrandOutletLink()
        await expect(browser).toHaveTitle('Brand Outlet products for sale | eBay')
    })
    it.skip ('displays and opens "Help & Contact" link', async() => {
        await expect(HomePage.helpAndContactLink).toBeDisplayed()
        await HomePage.clickOnHelpAndContactLink()
        await expect(browser).toHaveTitle('Security Measure')
    })
    it.skip ('displays and opens "Sell" Link', async() => {
        await expect(HomePage.sellLink).toBeDisplayed()
        await HomePage.clickOnSellLink()
        await expect(browser).toHaveTitle('Selling on eBay | Electronics, Fashion, Home & Garden | eBay')
    })
    it.skip ('displays and opens "Watchlist" Link', async() => {
        await expect(HomePage.watchlistLink).toBeDisplayed()
        await HomePage.clickOnWatchlistLink()
        await expect(await HomePage.expandedWatchlistValue()).toBe('true')
    })
    it.skip ('displays and opens "My Ebay" menu on hover action', async() => {
        await expect(HomePage.myEbayBtn).toBeDisplayed()
        await HomePage.hoverOnMyEbayBtn()
        await expect(HomePage.myEbayMenuList).toBeElementsArrayOfSize(13);
        await expect(HomePage.allMyEbayMenuLinkAreDisplayed()).toBeTruthy();
    })
    it.skip ('displays and opens "Notification" menu on hover action', async() => {
        await expect(HomePage.notificationBtn).toBeDisplayed()
        await HomePage.hoverOnNotificationBtn()
        console.log(`the text is ${await HomePage.notificationMenuContent.getText()}`)
        await expect(HomePage.notificationMenuContent).toHaveText(/Please sign-in to view notifications./)
    })
    it.skip ('displays and opens "Cart" menu on hover action', async() => {
        await expect(HomePage.cartBtn).toBeDisplayed()
        await HomePage.hoverOnCartBtn()
        console.log(`the text is ${await HomePage.cartMenuContent.getText()}`)
        await expect(HomePage.cartMenuContent).toHaveText(/Your cart is empty\nTime to start shopping!/)
    })
    it.skip ('displays and refreshed the page by clicking on "Ebay" logo button', async() => {
        await expect(HomePage.ebayLogoBtn).toBeDisplayed()
        await HomePage.ebayLogoBtn.click()
        await expect(browser).toHaveUrl('https://www.ebay.com/')
    })
    it.skip ('displays and searches for the item', async() => {
        await expect(HomePage.searchInput).toBeDisplayed()
        // You can type any value instead of "macbook", but don't forget to change the value in last expect as well
        await HomePage.searchValue('macbook')
        await expect(browser).toHaveUrlContaining('https://www.ebay.com/sch/')
        await expect(browser).toHaveUrlContaining('macbook')
    })
    it.skip ('displays and opens "All categories" dropdown', async() => {
        await expect(HomePage.allCategoriesDropdown).toBeDisplayed()
        await HomePage.openAllCategoriesList()
        await expect(HomePage.allCategoriesList).toBeElementsArrayOfSize({gte: 35})
    }) 
    it.skip ('displays and opens "Advanced" search page', async() => {
        await expect(HomePage.advancedLink).toBeDisplayed()
        await HomePage.openAdvancedLink()
        await expect(browser).toHaveUrl('https://www.ebay.com/sch/ebayadvsearch')
    })
    it.skip ('displays and opens "Saved" page', async() => {
        await expect(HomePage.savedLink).toBeDisplayed()
        await HomePage.openSavedLink()
        await expect(browser).toHaveTitle('Security Measure')
    })
    it.skip ('displays 7 links in "Parts & Accessories" in Motors Menu', async() => {
        await expect(HomePage.motorsMenuBtn).toBeDisplayed()
        await HomePage.hoverOnMotorsMenuBtn()
        const expectedMotorsLinks = ['All Parts & Accessories', 'Car & Truck Parts', 'Motorcycle Parts', 'Automotive Tools & Supplies', 'Apparel & Merchandise', 'Motors Deals', 'My Garage']
        const actualMotorsLinks = await HomePage.motorsMenuPartAndAccessoriesLinks.map((motorsMenuBtn) => motorsMenuBtn.getText())
        console.log("Expected links: ", expectedMotorsLinks)
        console.log("Actual links: ", actualMotorsLinks)
        await expect(expectedMotorsLinks).toEqual(actualMotorsLinks)
    })
    it.skip ('displays 7 links in "Vehicles" in Motors Menu', async() => {
        await expect(HomePage.motorsMenuBtn).toBeDisplayed()
        await HomePage.hoverOnMotorsMenuBtn()
        const expectedMotorsLinks = ['Cars & Trucks', 'Classics', 'Motorcycles', 'Powersports', 'RVs & Campers', 'Trailers & Other Vehicles', 'Boats']
        const actualMotorsLinks = await HomePage.motorsMenuVehiclesLinks.map((motorsMenuBtn) => motorsMenuBtn.getText())
        console.log("Expected links: ", expectedMotorsLinks)
        console.log("Actual links: ", actualMotorsLinks)
        await expect(expectedMotorsLinks).toEqual(actualMotorsLinks)
    })
    it.skip ('opens a link from Motors Menu', async() => {
        await HomePage.hoverOnMotorsMenuBtn()   
        await HomePage.openMotorLink()
        await expect(browser).toHaveUrlContaining('Boats')
    })
    it.skip ('displays and opens image in Motors Menu', async() => {
        await HomePage.hoverOnMotorsMenuBtn()   
        await HomePage.clickOnMotorsImage()
        await expect(browser).toHaveUrlContaining('Auto-Parts-and-Vehicles')
    })
    it.skip ('displays 8 links in "Top Categories" in Electronics Menu', async() => {
        await expect(HomePage.electronicsMenuBtn).toBeDisplayed()
        await HomePage.hoverOnElectronicsMenuBtn()
        const expectedElectronicsLinks = ['Computers, Tablets & Network Hardware', 'Cameras & Photo', 'Cell Phones & Smartphones', 'Cell Phone Cases, Covers & Skins', 'TV, Video & Home Audio Electronics', 'Vehicle Electronics & GPS', 'Headphones', 'Surveillance & Smart Home Electronics']
        const actualElectronicsLinks = await HomePage.electronicsMenuTopCategoriesLinks.map((electronicsMenuBtn) => electronicsMenuBtn.getText())
        console.log("Expected links: ", expectedElectronicsLinks)
        console.log("Actual links: ", actualElectronicsLinks)
        await expect(expectedElectronicsLinks).toEqual(actualElectronicsLinks)
    })
    it.skip ('displays 8 links in "Popular Categories" in Electronics Menu', async() => {
        await expect(HomePage.electronicsMenuBtn).toBeDisplayed()
        await HomePage.hoverOnElectronicsMenuBtn()
        const expectedElectronicsLinks = ['eBay Refurbished', 'Video Games', 'Nintendo Toys to Life', 'Apple iPhone', 'PC Desktops & All-In-One Computers', 'Computer Graphics Cards', 'Tablets & eReaders', 'Laptops & Netbooks']
        const actualElectronicsLinks = await HomePage.electronicsMenuPopularCategoriesLinks.map((electronicsMenuBtn) => electronicsMenuBtn.getText())
        console.log("Expected links: ", expectedElectronicsLinks)
        console.log("Actual links: ", actualElectronicsLinks)
        await expect(expectedElectronicsLinks).toEqual(actualElectronicsLinks)
    })
    it.skip ('opens a link from Electronics Menu', async() => {
        await HomePage.hoverOnElectronicsMenuBtn()   
        await HomePage.openElectronicsLink()
        await expect(browser).toHaveUrlContaining('Surveillance-Smart-Home-Devices')
    })
    it.skip ('displays and opens image in Electronics Menu', async() => {
        await HomePage.hoverOnElectronicsMenuBtn()   
        await HomePage.clickOnElectronicsImage()
        await expect(browser).toHaveUrlContaining('Electronics')
    })
    it ('displays 8 links in "Top Categories" in Collectibles Menu', async() => {
        await expect(HomePage.collectiblesMenuBtn).toBeDisplayed()
        await HomePage.hoverOnCollectiblesMenuBtn()
        const expectedCollectiblesLinks = ['Sports Memorabilia, Fan Shop & Sports Cards', 'Sports Trading Cards', 'Coins & Paper Money', 'Antiques', 'Bullion', 'Art', 'Collectible Card Games', 'Comics']
        const actualCollectiblesLinks = await HomePage.collectiblesMenuTopCategoriesLinks.map((collectiblesMenuBtn) => collectiblesMenuBtn.getText())
        console.log("Expected links: ", expectedCollectiblesLinks)
        console.log("Actual links: ", actualCollectiblesLinks)
        await expect(expectedCollectiblesLinks).toEqual(actualCollectiblesLinks)
    })
}) 


