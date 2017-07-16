// lazyload config

angular.module("Contoso.University")
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name:'angularFileUpload',
                  files: [
                    '../Scripts/angular-file-upload/dist/angular-file-upload.min.js'
                  ]
              }
          ]
      });
  }])
;
