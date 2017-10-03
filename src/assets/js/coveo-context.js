var CoveoOrganizationID;
function isCurrentPageSearchPage() {
  return (document.querySelector("#search") !== null);
};
document.addEventListener('DOMContentLoaded', function(){

  CoveoOrganizationID = 'paloaltonetworksintranetsandbox1';

  Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
    restUri: 'https://platform.cloud.coveo.com/rest/search',
    authentication : 'okta',
    queryStringArguments: {
      authentication : 'okta',
      organizationId: CoveoOrganizationID,
      debug: 1,
      pipleline: "Tek-Talk Search"
    },
  });

  var CoveoRelatedResults = function(element, root, options) {
    this.element = element;
    this.root = root;
    this.options = options;
    this.resultTemplate = _.template(this.options.resultTemplate);
    this.content = $('<div></div>').appendTo($(this.element));
    this.bindEvents();
  };

  var coveoSearch = Coveo.$$(document).find("#search");
  var relatedDiv = Coveo.$$(document).find("#MyRelatedResults");

  if(!Coveo.$$(document).find('#search.CoveoSearchInterface')){
    var root = Coveo.$$(document).find("#searchbox");

    Coveo.initSearchbox(root, "tek-talkSearch.html");
  };

  if (coveoSearch) {
    coveoAngularAdapter();

    Coveo.$$(document.querySelector("#search")).on("preprocessResults", function(e, args) {
      var connectedUser = args.results.userIdentities[0].name;
      var instance =
        Coveo.get(document.querySelector('.CoveoAnalytics'));
      instance.client.userId = connectedUser;
    });

    Coveo.$$(document.body).on("doneBuildingQuery", function(e, args) {
      if (relatedDiv != null) {
        var query = {
          q:"@uri",
          aq:"@sysfiletype=csmessage",
          numberOfResults:5,
          pipeline: "PopularArticlesWidget"
        };

        Coveo.SearchEndpoint.endpoints["default"].search(query).done(function(data) {
          $(MyRelatedResults).empty();
          _.each(data.results, function(result, index) {
            $("<div><a href='"+ result.clickUri + "'>" + result.title + "</a></div>").appendTo($(MyRelatedResults));
          });
        });
      }
    });
  }

  Coveo.init(document.body, {
    Facet: {
      valueCaption: myValueCaption
    }
  });
});

var myValueCaption = {
  "csmessage" : "Discussion Topics",
  "csdiscussion" : "Discussion Thread",
  "exchangemessage":"Tek-Talk Email",
  "csdocument" : "Document",
  "html": "Web Page",
  "pdf" : "PDF",
  "doc" : "Attachment",
  "ppt" : "PPT",
  "csblogpost" : "Blog",
  "csuser" : "User",
  "cscomment" : "Comment",
  "Tek-Talk Archive SHARED" : "Tek-Talk Archive",
  "Jive" : "Intranet",
  "AEM Site" : "Field Portal",
  "PAN box" : "Box"
};
