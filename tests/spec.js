describe('My Website Tests', function() {

    var numberOfProjects = 0;

    beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    /*-------------------------------------------------------------------*/
    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Benjamin Forehand Jr');
    });

});
