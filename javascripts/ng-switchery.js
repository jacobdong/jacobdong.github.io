'use strict';

/**
 * Module to use Switchery as a directive for angular.
 * @TODO implement Switchery as a service, https://github.com/abpetkov/switchery/pull/11
 */
angular.module('NgSwitchery', [])
    .directive('uiSwitch', ['$window', '$log', '$parse', function($window, $log, $parse) {

        /**
         * Initializes the HTML element as a Switchery switch.
         *
         * @TODO add a way to provide options for Switchery
         * $timeout is in place as a workaround to work within angular-ui tabs.
         *
         * @param scope
         * @param elem
         * @param attrs
         * @param ngModel
         */

        function linkSwitchery(scope, elem, attrs, ngModel) {
            var switchery, element, options;
            initializeOptions();
            initializeSwitchery();

            attrs.$observe('disabled', function(disabled) {
                options.disabled = disabled;
                initializeSwitchery();
            });

            function initializeOptions() {
                var passedOptions;
                var defaultOptions = {
                     color          : '#64bd63',
                     secondaryColor : '#dfdfdf',
                     className      : 'switchery',
                     disabled       : false,
                     disabledOpacity: 0.5,
                     speed          : '0.1s'
                };
                try {
                    passedOptions = angular.fromJson(attrs.uiSwitchOptions);
                } catch (e) {
                    passedOptions = {};
                }

                options = angular.extend({}, defaultOptions, passedOptions);
            }

            function initializeSwitchery() {
                ngModel.$formatters.push(function(modelValue) {
                    return angular.equals(modelValue, true);
                });

                ngModel.$render = function() {
                    if (!attrs.disabled) {
                        element.checked = ngModel.$modelValue;
                        switchery.setPosition(false);
                    }               
                };

                if (switchery) {
                    angular.element(switchery.switcher).remove();
                }

                switchery = new $window.Switchery(elem[0], options);
                element = switchery.element;
                element.checked = scope.initValue;
                switchery.setPosition(false);
                ngModel.$setViewValue(element.checked);
                elem.on('change',function() {
                    scope.$apply(function() {
                        ngModel.$setViewValue(element.checked);
                    })
                });
            }
        }

        return {
            require: 'ngModel',
            restrict: 'A',
            priority: 1,
            scope : {initValue : '=ngModel'},
            link: linkSwitchery
        }
    }]);