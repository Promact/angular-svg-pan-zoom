/**
 * Created by Sony on 01/11/2014.
 */
/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../typings/svg-pan-zoom/svg-pan-zoom.d.ts" />
/// <reference path="../demo/script/app.ts" />

describe("SvgPanZoom directive", function () {

    var _scope:ng.IScope, _spz:SvgPanZoom.ISvgPanZoom, element;

    var elementString = "<svg id='demotag' data-svg-pan-zoom> </svg>";
    beforeEach(angular.mock.module("demo"));

    beforeEach(inject((spz:SvgPanZoom.ISvgPanZoom, $rootScope:ng.IRootScopeService, $compile:ng.ICompileService)=> {
        _scope = $rootScope.$new(true);
        _spz = spz;
        element = $compile(elementString)(_scope);
        _scope.$digest();
    }));

    it("should apply default options", function () {
        expect(element).toBeDefined();
    });
});