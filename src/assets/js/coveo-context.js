/*COVEO: Context should be generated by server-side (DNN-cs / Salesforce-Apex*/
  Coveo.context = {
    //organization: coveo cloud org id to query 
    /*** CHANGE organization upon golive deployment - use 'paloaltonetworks' for production ***/
    organization: 'paloaltonetworkssandbox',

    //searchHub: used to initialized CoveoAnalytics component. This is important to identify the origin of search queries
    /*** CHANGE searchHub upon integration 
     *** For DNN, I suggest using 'CSP' or something else more meaningful to PAN business users
     ***/
    searchHub: 'LiveSearch',

    //searchPageUrl: used by site-wide searchbox to redirect user to the search page.
    /*** CHANGE searchPageUrl upon integration ***/
    searchPageUrl: (location.hostname === 'localhost') ? 'search.html' : 'http://contracts.paloaltonetworks.local/search.html',

    //token: searchtoken used to authenticate search user to Coveo Index. 
    /*** CHANGE token  upon integration 
     *** Here sample uses the "Live Search Integration" development AppKey.
     *** Change this by a Search Token generated by server-side (DNN/SF)
     *** See https://developers.coveo.com/display/public/CloudPlatform/Search+Token+Authentication 
     ***/
    token: '2115efeb-7b1c-4fde-a12d-07caa11f522c',
    
    //tokenFilter: 
    /***REMOVE tokenFilter upon integration: shall be removed from here and added to searchToken by server-side code (DNN/Salesforce)*/
    tokenFilter: '@syssource==("Web - PATechDocs","Web - PAWebResources","Lithium - https://live.paloaltonetworks.com/t5/Discussions/ct-p/members","Lithium - https://live.paloaltonetworks.com/t5/Topics/ct-p/Topics","YouTube - PAN Tutorials")',

    //usageAnalyticsContext: customize  this object with names/values and sub-objects. Below is a sample.
    usageAnalyticsContext: {
      user: {
        role: 'bigboss',
        products: {
          'Next-Generation Firewalls': true,
          Panorama: false
        }
      }
    }
  }