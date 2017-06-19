describe('Protractor Demo App', function() {
    var url = 'http://juliemr.github.io/protractor-demo/';

    it('should add one and two', function() {
        browser.get(url);
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        $('#gobutton').click();

        expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is wrong!
    });
});