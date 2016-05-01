describe('My Website Tests', function() {

    var numberOfProjects = 0;

    beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    /*-------------------------------------------------------------------*/
    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Benjamin Forehand Jr');
    });


    /*-------------------------------------------------------------------*/
    //Test Nav Links load correct url

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(0)
            .click();
       expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/');
    });

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(1)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/about');
    });

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(2)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/projects');
    });

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(3)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/resume');
    });

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(4)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');
    });


    /*-------------------------------------------------------------------*/
    //Load first link on main partial
    it('should load links on main page to correct url', function () {
        element(by.id('bigCallout')).all(by.css('.md-raised'))
            .get(0)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/about');
    });

    it('should load links on main page to correct url', function () {
        element(by.id('main')).all(by.css('.md-raised'))
            .get(1)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/resume');
    });

    it('should load links on main page to correct url', function () {
        element(by.id('main')).all(by.css('.md-raised'))
            .get(2)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');
    });

    it('should load links on main page to correct url', function () {
        element(by.id('main')).all(by.css('.md-raised'))
            .get(3)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/projects');
    });

    /*-------------------------------------------------------------------*/
    //Check if projects load
    it('should load projects', function () {
         element(by.id('main')).all(by.css('.md-raised'))
         .get(3)
         .click();
        var currentProjects = element.all(by.css('.md-card .md-card-content h4'));
        expect(currentProjects.count()).toBe(numberOfProjects);
    });


    /*-------------------------------------------------------------------*/
    //Check form sends and changes Url
    it('should allow form input', function () {
         element(by.id('main')).all(by.css('.md-raised'))
         .get(2)
         .click();
        //Select form and send text
        element(by.id('contact')).all(by.tagName('input'))
            .get(0)
            .sendKeys('Protractor Form Test');
        element(by.tagName('form')).all(by.tagName('input'))
            .get(1)
            .sendKeys('protractor@test.com');
        element(by.tagName('form')).all(by.tagName('input'))
            .get(2)
            .sendKeys('This is a test from protractor');
        element(by.css('.md-raised')).click();
        //Expect browser to load page on success
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');


    });
    /******************************************************************/
    it('should load pages at nav urls', function () {
        browser.get('http://localhost:3000/about');
        expect(element(by.id('about')).element(by.tagName('p'))
            .getText())
            .toEqual('I would consider myself a junkie.' +
            ' Not the kind to get in trouble with the law, but one that loves seeing things broken down and raw. ' +
            'Nothing is better to me than seeing the guts of a V12 Formula 1 engine, the raw steel that forms a skyscraper, or the simple words in a document of my next million dollar Java class!' +
            ' Yes, I am a fiend for design and engineering!');
    });

    it('should load pages at nav urls directly', function () {
        browser.get('http://localhost:3000/projects');
    var currentProjects = element.all(by.css('.md-card .md-card-content h4'));
    expect(currentProjects.count()).toBe(numberOfProjects);
    });

    it('should load pages at nav urls directly', function () {
        browser.get('http://localhost:3000/resume');
        expect(element.all(by.tagName('p'))
            .get(0)
            .getText())
            .toEqual('I have provided view and download links to my resume');
    });

    it('should load pages at nav urls directly', function () {
        browser.get('http://localhost:3000/contact');
        element(by.id('contact')).all(by.tagName('input'))
            .get(0)
            .sendKeys('Protractor Form Test');
        element(by.tagName('form')).all(by.tagName('input'))
            .get(1)
            .sendKeys('protractor@test.com');
        element(by.tagName('form')).all(by.tagName('input'))
            .get(2)
            .sendKeys('This is a test from protractor');
        element(by.css('.md-raised')).click();
        //Expect browser to load page on success
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');

    });

});