/**
 * Created by Chintan Shah on 31/10/2014.
 */
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/svg-pan-zoom/svg-pan-zoom.d.ts" />

module AngularSvgPanZoom {
    export interface ISvgPanZoomAttributes extends ng.IAttributes {
        panEnabled?: string; // enable or disable panning (default enabled)
        controlIconsEnabled?: string; // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
        zoomEnabled?: string; // enable or disable zooming (default enabled)
        dblClickZoomEnabled?: string; // enable or disable zooming by double clicking (default enabled)
        zoomScaleSensitivity?: number; // Zoom sensitivity
        minZoom?: number; // Minimum Zoom level
        maxZoom?: number; // Maximum Zoom level
        fit?: string; // enable or disable viewport fit in SVG (default true)
        center?: string; // enable or disable viewport centering in SVG (default true)
        beforeZoom?: (scale:number) => void;
        onZoom?: (scale:number) => void;
        beforePan?: (point:SvgPanZoom.IPoint) => void;
        onPan?: (point:SvgPanZoom.IPoint) => void;
        refreshRate?: any; // in hz
    }
    export class SvgPanZoomDirective implements ng.IDirective {
        restrict:string = "A";
        private $rootScope:ng.IRootScopeService;

        constructor(private spz:SvgPanZoom.ISvgPanZoom, $rootScope:ng.IRootScopeService) {
            this.$rootScope = $rootScope;
        }

        link = ($scope:ng.IScope, $element:ng.IRootElementService, $attrs:ISvgPanZoomAttributes) => {
            var bZoom = (scale) => {
                this.$rootScope.$broadcast("beforeZoom", scale);
            };
            var oZoom = (scale) => {
                this.$rootScope.$broadcast("onZoom", scale);
            };
            var bPan = (point) => {
                this.$rootScope.$broadcast("beforePan", point);
            };
            var oPan = (point) => {
                this.$rootScope.$broadcast('onPan', point);
            };
            var panEnabled = this.CheckForBoolean($attrs.panEnabled, true),
                controlIconEnabled = this.CheckForBoolean($attrs.controlIconsEnabled, false),
                zoomEnabled = this.CheckForBoolean($attrs.zoomEnabled, true),
                dblClickZoomEnabled = this.CheckForBoolean($attrs.dblClickZoomEnabled, true),
                zoomScaleSensitivity = $attrs.zoomScaleSensitivity || 0.2,
                minZoom = $attrs.minZoom || 0.5,
                maxZoom = $attrs.maxZoom || 10,
                fit = this.CheckForBoolean($attrs.fit, true),
                center = this.CheckForBoolean($attrs.center, true),
                refreshRate = $attrs.refreshRate || 'auto',
                beforeZoom = $attrs.beforeZoom || bZoom,
                onZoom = $attrs.onZoom || oZoom,
                beforePan = $attrs.beforePan || bPan,
                onPan = $attrs.onPan || oPan;

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

        private CheckForBoolean(value, defaultValue:boolean):boolean {
            if (value === undefined) return defaultValue;
            return value === "false" ? false : true;
        }
    }
}

angular.module("SvgPanZoom", [])
    .constant("spz", svgPanZoom)
    .directive("svgPanZoom", ["spz", "$rootScope", (spz:SvgPanZoom.ISvgPanZoom, $rootScope)=> {
        return new AngularSvgPanZoom.SvgPanZoomDirective(spz, $rootScope);
    }]);
