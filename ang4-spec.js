describe('angular 4', function () {
    it('basic navigation and validation', function () {
        browser.get('https://angular.io');
        expect(browser.getTitle()).toEqual('Angular');
        $('a.hero-cta').click();
        expect($('button.form-select-button').getText()).toEqual('4.2.3');

    });
});