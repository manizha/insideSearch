/* GOAL: Resolve Coveo vs Angular conflict (Coveo keeps state in Url hash)
 * 
 * Usage:
 *   - you must set variable selector_SearchInterface
 *   - you must call coveoAngularAdapter() before coveo.init() function
 * 
 * OPEN PROBLEMS from sample: 
 *  - TODO: how to replace URI.parseQuery in parseState (https://medialize.github.io/URI.js/docs.html#static-parseQuery)
 * RESOLVED PROBLEMS:
 *  - RESOLVED: how to replace Coveo.HashUtils in parseState; Coveo.HashUtils exists and is accessible in JSUI "1.2537.19""
 */

var selector_SearchInterface = '#search';

function coveoAngularAdapter() {

    //coveoIgnoreNextHashChange: prevent interferences with Angular
    this.coveoIgnoreNextHashChange = false;

    var searchInterface = Coveo.$$(document).find(selector_SearchInterface);

    //afterInitialization: on landing on the page, take what was passed as hash and store it in Coveo right now
    Coveo.$$(searchInterface).on("afterInitialization", function (e, args) {
        //$log.debug('afterInitialization call');

        //call parseState utils (in this unit)
        //var parsedState = parseState(location.hash) // Comments By LK On 07/20
        //Coveo.state(searchInterface, parsedState); // Comments By LK On 07/20

        //Auto-executeQuery: in the layout we set " data-enable-history="false"  on CoveoSearchInterface element to prevent conflict but this prevents from executing the query automatically; doing it manually.
        //TODO: log Usage Analytics (must do when calling executeQuery manually)
        //Coveo.executeQuery(searchInterface);  // Comments By LK On 07/20
        //$log.debug('afterInitialization parsed the state and executed the query');

        //on state change: call handleStateChange
        Coveo.$$(searchInterface).on('state:change', function (e, data) {
            //$log.debug('state:change call. calling handleStateChange function');
            handleStateChange();
        });

        var oldUrl = window.location.href;

        $(window).on('hashchange', function(e) {
            var newUrl = window.location.href;

            //TODO: replace URI
            var parseNew = URI.parse(newUrl);
            //TODO: replace URI
            var parseOld = URI.parse(oldUrl);

            if (location.pathname !== "/search.html") {
                handleHashChange(parseNew.fragment);
            }
        }).trigger('hashchange');
    });

    /* parseState
    *    Coveo utility to transform hash into state
    */
    function parseState(state) {
        //TODO replace URI
        var decoded = URI.parseQuery(decodeURIComponent(state));

        var parsedState = {};
        Coveo._.each(decoded, function (value, key) {
            //TODO: replace Coveo.HashUtils
            parsedState[key] = Coveo.HashUtils.getValue(key, '#' + state);
        })

        return parsedState;
    }

    /* handleStateChange
    *    Coveo utility;
    */
    function handleStateChange() {
        if (this.coveoIgnoreNextHashChange) {
            this.coveoIgnoreNextHashChange = false;
            return;
        }
        //$log.debug('Handle state change');
        var searchState = Coveo.state(searchInterface).getAttributes();
        var queryString = Coveo.HashUtils.encodeValues(searchState);

        this.ignoreNextHashChange = true;

        if (queryString) {
            window.location.hash = queryString;
        }
    }    

    function handleHashChange(fragment) {
        if (this.ignoreNextHashChange) {
            this.ignoreNextHashChange = false;
            return;
        }

        this.coveoIgnoreNextHashChange = true;

        // Comments By LK On 07/20
        /*var parsedState = parseState(fragment);
        var defaultAttributes = Coveo.state(searchInterface).defaultAttributes;
        Coveo.state(searchInterface, Coveo._.defaults(parsedState, defaultAttributes));
        Coveo.executeQuery(searchInterface);*/
        var newState = parseState(fragment);

        var search = $('#search');
        var currentState = search.coveo('state');
        search.coveo('state', _.defaults(newState, currentState.defaultAttributes));
        search.coveo('executeQuery');
    }
}


