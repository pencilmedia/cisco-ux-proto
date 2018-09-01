 /* ===================================================
  * global.js - Global Behaviors
  * =================================================== */

 // GLOBAL VARIABLES
 var global = {};

 global = {
     init: function() {
         global.initPlugins();
         global.toggleExpand();
         global.linkBehaviors();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init FastClick Plugin
             FastClick.attach(document.body);
         }); 
     },
     openExternalLinks: function() {
         // EXTERNAL LINK - Open external links in new window
         ////////////////////////////////////////////////////
         $('a[href^=http]').on("click", function() {
             //Not this domain - open link in window
             if (!this.href.indexOf('screenchef.com') < 0) {
                 window.open(this.href);
                 return false;
             }
         });
     },
     toggleExpand: function() {
         $("[data-toggle='toggle-collapse']").on("click", function(e) {
            toggler = $(this).parents().eq(1);
            toggler.toggleClass('collapsed');
            $(this).parents().siblings('.ux-widget__content').toggleClass('bounceOutDown bounceInDown');
            // $(document).setTimeout(function () {
            //     $(this).parents().siblings('.ux-widget__content').toggleClass('collapsed');
            //   }, 1000);

         });
     },
     linkBehaviors: function() {
         // EXTERNAL LINK - Open external links in new window
         ////////////////////////////////////////////////////
         $('a[href^=http]').click( function() {
             //Not this domain - open link in window
             if (this.href.indexOf('pencilmedia.com') < 0) {
                 window.open(this.href);
                 return false;
             }
         });
         // Override above behavior and open internal link in a new window - Add the class .pop to the link
         if ( $('a.pop') ) {
             $('a.pop').click( function() {
                 window.open(this.href);
                 return false;
             });
         }
     }
 };

 $(global.init);