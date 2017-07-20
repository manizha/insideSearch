/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*onDoneBuildingQuery_AddTokenFilter
    TEMPORARY FUNCTION: until server-sdie coee (DNN/Salesforce) inject searchToekn, this reusable function used to inject proper filter
*/
var onDoneBuildingQuery_AddTokenFilter = function onDoneBuildingQuery_AddTokenFilter(root) {
    //tokenFilter: shall be added to searchToken by server-side code (DNN/Salesforce)
    Coveo.$$(root).on('doneBuildingQuery', function (e, args) {
        args.queryBuilder.constantExpression.add(Coveo.context.tokenFilter);
    });
};

/*COVEO: initialization of site-wide searchbox*/
document.addEventListener('DOMContentLoaded', function () {
    Coveo.SearchEndpoint.configureCloudEndpoint(Coveo.context.organization, Coveo.context.token);

    if (!Coveo.$$(document).find('#search.CoveoSearchInterface')) {
        var root = Coveo.$$(document).find("#searchbox");
        if (root) {
            Coveo.initSearchbox(root, Coveo.context.searchPageUrl, {
                Searchbox: {
                    placeholder: "What are you looking for?"
                },
                Analytics: {
                    searchHub: Coveo.context.searchHub
                }
            });
        }
    }
});
/*COVEO: END initialization of site-wide searchbox*/

/*COVEO: initialization of csp-search-results */
// BEGIN : Configuring By Date filter which is in lithum
var dateRange = [];
var sDate = new Date(1990, 2, 1);
var eDate = new Date();
eDate.setMonth(eDate.getMonth() + 1);
var obj = {
    start: sDate,
    end: eDate,
    label: "All",
    endInclusive: false
};
dateRange.push(obj);
var eDate = new Date();
eDate.setMonth(eDate.getMonth() + 1);
eDate.setDate(eDate.getDate() - 2);
var obj = {
    start: sDate,
    end: eDate,
    label: "A day ago",
    endInclusive: false
};
dateRange.push(obj);
var eDate = new Date();
eDate.setMonth(eDate.getMonth() + 1);
eDate.setDate(eDate.getDate() - 8);
var obj = {
    start: sDate,
    end: eDate,
    label: "A week ago",
    endInclusive: false
};
dateRange.push(obj);
var eDate = new Date();
eDate.setMonth(eDate.getMonth() + 1);
eDate.setDate(eDate.getDate() - 31);
var obj = {
    start: sDate,
    end: eDate,
    label: "A month ago",
    endInclusive: false
};
dateRange.push(obj);
var eDate = new Date();
eDate.setMonth(eDate.getMonth() + 1);
eDate.setDate(eDate.getDate() - 365);
var obj = {
    start: sDate,
    end: eDate,
    label: "A year ago",
    endInclusive: false
};
dateRange.push(obj);
// END : Configuring By Date filter which is in lithum
//BEGIN : Renaming Source names
var valueCaption = {
    "Lithium - https://live.paloaltonetworks.com/t5/Topics/ct-p/Topics": "Knowledge Base",
    "Lithium - https://live.paloaltonetworks.com/t5/Discussions/ct-p/members": "Discussions",
    "Web - PATechDocs": "Technical Documentation",
    "Web - PAWebResources": "Palo Alto Networks Website",
    "YouTube - PAN Tutorials": "Video Tutorials"
};
//END : Renaming Source names

document.addEventListener('DOMContentLoaded', function () {
    var root = Coveo.$$(document).find("#search");
    if (root) {
        var mySearchBox = Coveo.$$(document).find(".CoveoSearchbox");

        /*onDoneBuildingQuery_AddTokenFilter
            TEMPORARY FUNCTION: until server-sdie coee (DNN/Salesforce) inject searchToekn, this reusable function used to inject proper filter
        */
        onDoneBuildingQuery_AddTokenFilter(root);

        coveoAngularAdapter();

        Coveo.init(root, {
            //externalComponents: [mySearchBox, anaytics],
            externalComponents: [mySearchBox],
            Searchbox: {
                placeholder: "What are you looking for?"
            },
            Analytics: {
                searchHub: Coveo.context.searchHub
            },
            Facet: {
                valueCaption: valueCaption
            },
            FacetRange: {
                field: "@sysdate",
                ranges: dateRange
            }
        });
    }
});
/*COVEO: END initialization of csp-search-results */

/*
 * CoveoQueryPropertyOutput: Sets the innerText of the element 
 * Specify property to output with data-property; allowed values: totalCountFiltered, query
 *  - totalCountFiltered: outputs how many items in the index are matching the query for the current user (security trimming applied) after filtering has been applied. (https://developers.coveo.com/display/public/SearchREST/Query+Results)
 *  - query: outputs the query expression entered by the user (https://developers.coveo.com/display/public/SearchREST/Query+Parameters#QueryParameters-q)
 */
document.addEventListener('DOMContentLoaded', function () {
    //List of allowed "data_property": totalCountFiltered,query
    var propertyHandlers = {
        totalCountFiltered: function totalCountFiltered(root, element) {
            Coveo.$$(root).on('querySuccess', function (e, args) {
                //toLocaleString provide separator
                element.innerText = args.results.totalCountFiltered.toLocaleString();
            });
        },
        query: function query(root, element) {
            Coveo.$$(root).on('querySuccess', function (e, args) {
                var query = Coveo.state(root, 'q');
                element.innerText = query;
            });
        }
        //initialization of all instances
    };var el = Coveo.$$(document).findAll(".CoveoQueryPropertyOutput");
    if (el.length > 0) {
        el.forEach(function (element) {
            //retrieve desired property and validate support
            var dataproperty = element.getAttribute('data-property');
            var propertyHandler = propertyHandlers[dataproperty];
            if (propertyHandler) {
                //call the desired handler
                var root = Coveo.$$(element).closest('.CoveoSearchInterface');
                propertyHandler(root, element);
            }
        }, this);
    }
});

/*COVEO: initialization of SelfHelp-Selectors*/
document.addEventListener('DOMContentLoaded', function () {
    var masterSelector = Coveo.$$(document).find("#selfhelp-selector-master");
    var detailSelector = Coveo.$$(document).find("#selfhelp-selector-detail");

    if (masterSelector && detailSelector) {
        var onChangeHandler = function onChangeHandler(actionCause) {
            //
            var updateSearchNowArgs = {
                "masterSelectorValue": masterSelector.options[masterSelector.selectedIndex].text,
                "detailSelectorValue": detailSelector.options[detailSelector.selectedIndex].text
            };
            Coveo.$$(detailSelector).trigger(actionCause, updateSearchNowArgs);
        };

        Coveo.$$(masterSelector).on('change', function (e) {
            onChangeHandler('masterSelectorChange');
        });
        Coveo.$$(detailSelector).on('change', function (e) {
            onChangeHandler('detailSelectorChange');
        });
    }
});

/*COVEO: END initialization of SelfHelp-Selectors*/

/*COVEO: initialization of SelfHelp-HaveYouTried search*/
document.addEventListener('DOMContentLoaded', function () {
    initSelfHelpResultList("#searchHaveYouTried", Coveo.config.SelfHelp.HaveYouTried);
    initSelfHelpResultList("#searchRelatedThreads", Coveo.config.SelfHelp.RelatedThreads);
});

function initSelfHelpResultList(elementSelector, cfg) {
    var root = Coveo.$$(document).find(elementSelector);

    if (root) {
        hookToSelectors(root, cfg.partialMatch);

        Coveo.$$(root).on('changeAnalyticsCustomData', function (e, args) {
            args.originLevel1 = cfg.originLevel1, args.originLevel2 = cfg.originLevel2;
        });

        Coveo.init(root, cfg.coveoInitOptions);
    }
}

function hookToSelectors(root, partialMatch) {
    var selectedValues = {
        'masterSelectorValue': '',
        'detailSelectorValue': ''
    };

    Coveo.$$(document).on(['masterSelectorChange', 'detailSelectorChange'], function (e, args) {
        selectedValues = args;
        sendMyCustomSearchEvent(root, e);
        Coveo.executeQuery(root);
    });

    Coveo.$$(root).on('buildingQuery', function (e, args) {
        var expr = [];
        if (selectedValues.masterSelectorValue) expr.push(selectedValues.masterSelectorValue);
        if (selectedValues.detailSelectorValue) expr.push(selectedValues.detailSelectorValue);
        if (expr.length > 0) {
            args.queryBuilder.advancedExpression.add(expr.join(' '));
        }
    });

    Coveo.$$(root).on('doneBuildingQuery', function (e, args) {
        if (partialMatch && partialMatch.enablePartialMatch) {
            args.queryBuilder.partialMatchKeywords = partialMatch.partialMatchKeywords;
            args.queryBuilder.partialMatchThreshold = partialMatch.partialMatchThreshold;
        }
    });
}

function sendMyCustomSearchEvent(root, e) {
    //e param: the original event. 
    // e.type is the name fo teh event eitehr 'masterSelectorChange' or 'detailSelectorChange'
    // using e.type as actionCause parameter.

    var myCustomSearchEventCause = { name: e.type, type: '' };
    var myCustomSearchEventMetadata = {};
    Coveo.logSearchEvent(root, myCustomSearchEventCause, myCustomSearchEventMetadata);
}
/*COVEO: END initialization of SelfHelp-HaveYouTried search*/

/*COVEO START: CaseCreation */
document.addEventListener('DOMContentLoaded', function () {
    var $$document = Coveo.$$(document);
    var rootStep1 = $$document.find('#trendingInfoSearch');
    var rootStep2 = $$document.find('#solutionsSearch');
    var step1Dropdown = $$document.find('.coveo-problem-dropdown');
    var step1Textarea = $$document.find('.coveo-problem-textarea');
    var nextButtons = $$document.findAll('.coveo-casecreate-next');
    var submitButtons = $$document.findAll('.coveo-casecreate-submit');
    var cancelButtons = $$document.findAll('.coveo-casecreate-cancel');

    //triggerSearchOnStep2: is called by clicking on Next button of step 1
    Coveo.triggerSearchOnStep2 = function () {
        if (rootStep2) {
            var myCustomSearchAsYouTypeEventCause = { name: 'Landing', type: '' }; // Specifying a type is useless when logging a SearchAsYouType event.
            var myCustomSearchAsYouTypeEventMetadata = {};
            //https://developers.coveo.com/display/public/JsSearchV1/Sending+Custom+Analytics+Events
            Coveo.logSearchEvent(rootStep2, myCustomSearchAsYouTypeEventCause, myCustomSearchAsYouTypeEventMetadata);
            Coveo.executeQuery(rootStep2);
        }
    };

    /*COVEO: initialization of case-creation step 1 Trending results*/
    if (rootStep1) {
        var $$rootStep1 = Coveo.$$(rootStep1);
        var cfg = Coveo.config.CaseCreation.Step1;

        /*onDoneBuildingQuery_AddTokenFilter
            TEMPORARY FUNCTION: until server-sdie coee (DNN/Salesforce) inject searchToekn, this reusable function used to inject proper filter
        */
        onDoneBuildingQuery_AddTokenFilter(rootStep1);

        $$rootStep1.on('buildingQuery', function (e, args) {
            if (Coveo.context && Coveo.context.usageAnalyticsContext) {
                //push "context" to Coveo Pipeline, Coveo ML and Coveo Usage Analytics
                //copy-flat properties of Coveo.context.usageAnalyticsContext into args.queryBuilder.context object
                args.queryBuilder.context = args.queryBuilder.context || {};
                args.queryBuilder.context = CoveoUtils.flattenAttrExclObjects(args.queryBuilder.context, Coveo.context.usageAnalyticsContext);
            }
        });

        $$rootStep1.on('changeAnalyticsCustomData', function (e, args) {
            args.originLevel1 = cfg.originLevel1, args.originLevel2 = cfg.originLevel2;
        });

        Coveo.init(rootStep1, cfg.coveoInitOptions);
    }
    /*COVEO: END initialization of case-creation step 1 Trending results*/

    /*COVEO: initialization of case-creation step 2 Suggested Solutions*/
    if (rootStep2) {
        var $$rootStep2 = Coveo.$$(rootStep2);
        var cfg = Coveo.config.CaseCreation.Step2;

        /*onDoneBuildingQuery_AddTokenFilter
            TEMPORARY FUNCTION: until server-sdie coee (DNN/Salesforce) inject searchToekn, this reusable function used to inject proper filter
        */
        onDoneBuildingQuery_AddTokenFilter(rootStep2);

        $$rootStep2.on('buildingQuery', function (e, args) {
            //WHen the query is being built, read from step1 input and use for step2 search
            if (step1Dropdown && step1Textarea) {
                //if the textarea has some valid content (at least one alphanum char), use it.
                if (step1Textarea.value.match(/[\w]/)) {
                    args.queryBuilder.longQueryExpression.add(step1Textarea.value);
                } else {
                    //if textarea is empty, then use dropdown text
                    args.queryBuilder.longQueryExpression.add(step1Dropdown.options[step1Dropdown.selectedIndex].text);
                }
            }
        });

        $$rootStep2.on('doneBuildingQuery', function (e, args) {
            if (Coveo.context && Coveo.context.usageAnalyticsContext) {
                //push "context" to Coveo Pipeline, Coveo ML and Coveo Usage Analytics
                //copy-flat properties of Coveo.context.usageAnalyticsContext into args.queryBuilder.context object
                args.queryBuilder.context = args.queryBuilder.context || {};
                args.queryBuilder.context = CoveoUtils.flattenAttrExclObjects(args.queryBuilder.context, Coveo.context.usageAnalyticsContext);
            }
        });

        $$rootStep2.on('changeAnalyticsCustomData', function (e, args) {
            args.originLevel1 = cfg.originLevel1, args.originLevel2 = cfg.originLevel2;
        });

        nextButtons.forEach(function (button) {
            Coveo.$$(button).on('click', function (e) {
                Coveo.logCustomEvent(rootStep2, { name: "nextButton", type: "caseCreation" }, CoveoUtils.flattenAttrExclObjects({}, Coveo.context.usageAnalyticsContext));
            });
        });

        cancelButtons.forEach(function (button) {
            Coveo.$$(button).on('click', function (e) {
                Coveo.logCustomEvent(rootStep2, { name: "cancelButton", type: "caseCreation" }, CoveoUtils.flattenAttrExclObjects({}, Coveo.context.usageAnalyticsContext));
            });
        });

        submitButtons.forEach(function (button) {
            Coveo.$$(button).on('click', function (e) {
                Coveo.logCustomEvent(rootStep2, { name: "submitButton", type: "caseCreation" }, CoveoUtils.flattenAttrExclObjects({}, Coveo.context.usageAnalyticsContext));
            });
        });

        $$document.on('beforeunload', function (e) {
            Coveo.logCustomEvent(rootStep2, { name: "submitButton", type: "caseCreation" }, CoveoUtils.flattenAttrExclObjects({}, Coveo.context.usageAnalyticsContext));
        });

        Coveo.init(rootStep2, cfg.coveoInitOptions);
    }
    /*COVEO: END OF initialization of case-creation step 2 Suggested Solutions*/
});
/*COVEO END: CaseCreation */

/*START: CoveoUtils*/
var CoveoUtils = CoveoUtils || {};
CoveoUtils.flattenAttrExclObjects = function (targetobject, sourceobject, nameprefix) {
    var prefix = nameprefix ? nameprefix + '_' : '';
    for (var prop in sourceobject) {
        var item = sourceobject[prop];
        var itemname = prefix + prop;
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) != 'object') {
            targetobject[itemname] = item;
        } else {
            //"attributes" from SF serialization we don't want pushed to Coveo UA/ML
            if (prop == 'attributes') {
                continue;
            }

            //recurse
            targetobject = CoveoUtils.flattenAttrExclObjects(targetobject, item, itemname);
        }
    }
    return targetobject;
};
/*END: CoveoUtils*/

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ })

/******/ });