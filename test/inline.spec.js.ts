/**
 * Created by Sony on 01/11/2014.
 */
/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../typings/svg-pan-zoom/svg-pan-zoom.d.ts" />
/// <reference path="../demo/script/app.ts" />

describe("SvgPanZoom directive", function () {

    var _scope:ng.IScope, _spz:SvgPanZoom.ISvgPanZoom, element, elementWithZoomDisabled;

    var elementString = "<svg id='demotag' data-svg-pan-zoom> </svg>";
    var elementStringWithZoomDisabled = "<svg id='demotag1' data-svg-pan-zoom zoom-Enabled='false'> </svg>";
    beforeEach(angular.mock.module("demo"));

    beforeEach(inject((spz:SvgPanZoom.ISvgPanZoom, $rootScope:ng.IRootScopeService, $compile:ng.ICompileService)=> {
        _scope = $rootScope.$new(true);
        _spz = spz;
        element = $compile(elementString)(_scope);
        elementWithZoomDisabled = $compile(elementStringWithZoomDisabled)(_scope);
        angular.element("body").append(elementWithZoomDisabled);
        _scope.$digest();
    }));

    afterEach(()=> {
        angular.element("body").remove("#demotag1");
    });

    it("should apply default options", () => {
        expect(element).toBeDefined();
    });

    it("should disable zoom if zoom is disabled from attribute", ()=> {
        expect(elementWithZoomDisabled).toBeDefined();
        var ele:SvgPanZoom.ISvgPanZoom = _spz("#demotag1");
        expect(ele.isZoomEnabled()).toBeFalsy();
    })
});