/**
 * Created by Chintan Shah on 31/10/2014.
 */
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/svg-pan-zoom/svg-pan-zoom.d.ts" />

module AngularSvgPanZoom {
    export interface ISvgPanZoomAttributes extends ng.IAttributes, SvgPanZoom.OptionConfig {

    }
    export class SvgPanZoomDirective implements ng.IDirective {
        restrict:string = "A";

        constructor(private spz:SvgPanZoom.ISvgPanZoom) {

        }

        link = ($scope:ng.IScope, $element:ng.IRootElementService, $attrs:ISvgPanZoomAttributes, $rootScope:ng.IRootScopeService) => {

            var panEnabled = $attrs.panEnabled || true,
                controlIconEnabled = $attrs.controlIconsEnabled || false,
                zoomEnabled = $attrs.zoomEnabled || true,
                dblClickZoomEnabled = $attrs.dblClickZoomEnabled || true,
                zoomScaleSensitivity = $attrs.zoomScaleSensitivity || 0.2,
                minZoom = $attrs.minZoom || 0.5,
                maxZoom = $attrs.maxZoom || 10,
                fit = $attrs.fit || true,
                center = $attrs.center || true,
                refreshRate = $attrs.refreshRate || 'auto',
                beforeZoom = $attrs.beforeZoom || function (scale) {
                        $rootScope.$broadcast("beforeZoom", scale);
                    },
                onZoom = $attrs.onZoom || function (scale) {
                        $rootScope.$broadcast("onZoom", scale);
                    },
                beforePan = $attrs.beforePan || function (point) {
                        $rootScope.$broadcast("beforePan", point);
                    },
                onPan = $attrs.onPan || function (point) {
                        $rootScope.$broadcast('onPan', point);
                    };

            this.spz($element[0], {
                panEnabled: panEnabled,
                controlIconsEnabled: controlIconEnabled,
                zoomEnabled: zoomEnabled,
                dblClickZoomEnabled: dblClickZoomEnabled,
                zoomScaleSensitivity: zoomScaleSensitivity,
                minZoom: minZoom,
                maxZoom: maxZoom,
                fit: fit,
                center: center,
                refreshRate: refreshRate,
                beforeZoom: beforeZoom,
                onZoom: onZoom,
                beforePan: beforePan,
                onPan: onPan
            });
        }
    }
}

angular.module("SvgPanZoom", [])
    .constant("spz", svgPanZoom)
    .directive("SvgPanZoom", ["spz", (spz:SvgPanZoom.ISvgPanZoom)=> {
        return new AngularSvgPanZoom.SvgPanZoomDirective(spz);
    }]);
