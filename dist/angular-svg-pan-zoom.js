var AngularSvgPanZoom;
(function (AngularSvgPanZoom) {
    var SvgPanZoomDirective = (function () {
        function SvgPanZoomDirective(spz) {
            var _this = this;
            this.spz = spz;
            this.restrict = "A";
            this.link = function ($scope, $element, $attrs, $rootScope) {
                var panEnabled = $attrs.panEnabled || true, controlIconEnabled = $attrs.controlIconsEnabled || false, zoomEnabled = $attrs.zoomEnabled || true, dblClickZoomEnabled = $attrs.dblClickZoomEnabled || true, zoomScaleSensitivity = $attrs.zoomScaleSensitivity || 0.2, minZoom = $attrs.minZoom || 0.5, maxZoom = $attrs.maxZoom || 10, fit = $attrs.fit || true, center = $attrs.center || true, refreshRate = $attrs.refreshRate || 'auto', beforeZoom = $attrs.beforeZoom || function (scale) {
                        $rootScope.$broadcast("beforeZoom", scale);
                    }, onZoom = $attrs.onZoom || function (scale) {
                        $rootScope.$broadcast("onZoom", scale);
                    }, beforePan = $attrs.beforePan || function (point) {
                        $rootScope.$broadcast("beforePan", point);
                    }, onPan = $attrs.onPan || function (point) {
                        $rootScope.$broadcast('onPan', point);
                    };

                _this.spz($element[0], {
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
            };
        }

        return SvgPanZoomDirective;
    })();
    AngularSvgPanZoom.SvgPanZoomDirective = SvgPanZoomDirective;
})(AngularSvgPanZoom || (AngularSvgPanZoom = {}));

angular.module("SvgPanZoom", []).constant("spz", svgPanZoom).directive("SvgPanZoom", [
    "spz", function (spz) {
        return new AngularSvgPanZoom.SvgPanZoomDirective(spz);
    }]);
