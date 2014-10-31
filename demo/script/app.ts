/**
 * Created by Sony on 31/10/2014.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/svg-pan-zoom/svg-pan-zoom.d.ts" />

interface ISvgPanZoomControllerScope extends ng.IScope {
    ZoomIn(): void;
    ZoomOut(): void;
    Reset(): void;
}

angular.module("demo", ["SvgPanZoom"])
    .controller("SvgPanZoomController", ["$scope", "spz", ($scope:ISvgPanZoomControllerScope, spz:SvgPanZoom.ISvgPanZoom)=> {
        var spzTrigger:SvgPanZoom.ISvgPanZoom = spz(angular.element("#demo-tiger"));
        $scope.ZoomIn = () => {
            spzTrigger.zoomIn();
        };

        $scope.ZoomOut = () => {
            spzTrigger.zoomOut();
        };

        $scope.Reset = ()=> {
            spzTrigger.resetZoom();
        };

    }]);