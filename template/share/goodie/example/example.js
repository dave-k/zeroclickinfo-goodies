DDH.'<: $lia_id :>' = DDH.'<: $lia_id :>' || {};

(function(DDH) {
    "use strict";

    console.log("DDH.'<: $lia_id :>'.build"); // remove this before submitting pull request

    // define private variables and functions here
    //
    // fuction helper () { ... }
    //
    // var a = '',
    //     b = '',
    //     c = '';

    DDH.'<: $lia_id :>'.build = function(ops) {

        return {

            id: '<: $lia_id :>',

            meta: {
                sourceName: "Source Domain",
                sourceUrl: "https://source.website.com"
            },

            // data: {
            //     already defined in Perl Package
            //     you can re-define it here
            //     or access/modify 'ops.data'
            // },

            // normalize: function(item){
            //     use this to map your 'data'
            //     to the properties required for your chosen template
            //
            //     return {
            //         title: item.myTitle
            //         subtitle: item.foo.subtitle
            //     };
            // },

            templates: {
                group: 'text',

                // options: {
                //
                // },

                // variants: {
                //
                // }
            },

            // Function that executes after template content is displayed
            onShow: function() {

                // define any callbacks or event handlers here
                //
                // var $dom = $(".zci--'<: $lia_id :>'");
                // $dom.find(".my-special-class").click(funtcion(){
                //
                // });

            }
        };
    };
})(DDH);
