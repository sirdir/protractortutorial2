describe('Protractor Demo App', function() {
    var url = 'http://juliemr.github.io/protractor-demo/';
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = $('#gobutton');
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get(url);
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', function() {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(latestResult.getText()).toEqual('10');
    });
});