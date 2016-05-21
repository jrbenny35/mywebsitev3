describe('My Website', function() {

    var numberOfProjects = 0;

    beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    /*------------------------- Load Nav links -------------------------------*/
    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Benjamin Forehand Jr');
    });
    
    it('should load nav links', function(){
        element(by.id('mainView'))
        .element(by.tagName('md-toolbar'))
        .all(by.css('.md-button'))
        .get(1)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/');
    })

    it('should load nav links', function(){
        element(by.id('mainView'))
        .element(by.tagName('md-toolbar'))
        .all(by.css('.md-button'))
        .get(2)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/about');
    })

    it('should load nav links', function(){
        element(by.id('mainView'))
        .element(by.tagName('md-toolbar'))
        .all(by.css('.md-button'))
        .get(3)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/projects');
    })

    it('should load nav links', function(){
        element(by.id('mainView'))
        .element(by.tagName('md-toolbar'))
        .all(by.css('.md-button'))
        .get(4)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/resume');
    })

    it('should load nav links', function(){
        element(by.id('mainView'))
        .element(by.tagName('md-toolbar'))
        .all(by.css('.md-button'))
        .get(5)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');
    })

    it('should load nav links', function(){
        element(by.id('mainView'))
        .element(by.tagName('md-toolbar'))
        .all(by.css('.md-button'))
        .get(6)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/blog');
    })

    it('should load home page links', function(){
        element(by.id('main'))
        .all(by.css('.md-card'))
        .get(0)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/resume');
    })

    it('should load home page links', function(){
        element(by.id('main'))
        .all(by.css('.md-card'))
        .get(1)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');
    })

    it('should load home page links', function(){
        element(by.id('main'))
        .all(by.css('.md-card'))
        .get(2)
        .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/projects');
    })

    it('should have this paragaraph', function(){
        element(by.id('mainView'))
        .element(by.tagName('md-toolbar'))
        .all(by.css('.md-button'))
        .get(2)
        .click();
        expect(element(by.id('about')).element(by.tagName('p'))
            .getText())
            .toEqual('I would consider myself a junkie.' +
            ' Not the kind to get in trouble with the law, but one that loves seeing things broken down and raw. ' +
            'Nothing is better to me than seeing the guts of a V12 Formula 1 engine, the raw steel that forms a skyscraper, or the simple words in a document of my next million dollar Java class!' +
            ' Yes, I am a fiend for design and engineering!');
    })



    it('should send me a contact request form', function(){
        browser.get('http://localhost:3000/contact')
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

    })

    it('should update blog correctly', function () {
        browser.get('http://localhost:3000/blog_post');

        var EC = protractor.ExpectedConditions;
        var input = element(by.id('blog')).element(by.tagName('input'));
        var isVisible = EC.visibilityOf(input);

        browser.wait(isVisible, 10000);
        input.click()
            .sendKeys('Blog Test From Protractor');
        element(by.id('blog')).all(by.tagName('input'))
            .get(2)
            .click()
            .sendKeys('Black_background-2.jpg');
        element(by.id('blog')).all(by.tagName('input'))
            .get(3)
            .click()
            .sendKeys('Angular');
        element(by.id('blog')).element(by.id('addTag'))
            .click();
        element(by.id('blog')).element(by.tagName('textarea'))
            .click()
            .sendKeys('Blog Test From Protractor');
        element(by.tagName('form'))
            .element(by.id('submitBtn'))
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/blog');

    });

});
