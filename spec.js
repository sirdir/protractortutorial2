describe('Protractor Demo App', function() {
    var url = 'http://juliemr.github.io/protractor-demo/';
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = $('#gobutton');
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(arg1, arg2) {
        firstNumber.sendKeys(arg1);
        secondNumber.sendKeys(arg2);
        goButton.click();
    }

    beforeEach(function() {
        browser.get(url);
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        add(1, 2);
        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', function() {
        add(4, 6);
        expect(latestResult.getText()).toEqual('10');
    });
    it('should have a history', function() {
        add(1, 2);
        add(3, 4);

        expect(history.count()).toEqual(2);

        add(5, 6);

        expect(history.count()).toEqual(3);

        add(1, 2);
        add(3, 4);

        expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('3 + 4');
    });
});