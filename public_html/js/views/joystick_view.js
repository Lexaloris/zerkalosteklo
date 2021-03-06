define([
    // Libs
    'jquery',
    'backbone',
    // Tmpl
    'joystick_tmpl',
    // Models
    'user_model',
], function($, Backbone, joystick_tmpl, UserModel) {

    var joyStickView = Backbone.View.extend({
        template: joystick_tmpl,
        el: $('.joystick'),
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        },
        show_joystick: function() {
            //console.log("game start");
        },
        show: function() {
            this.show_joystick();
            /*if( this.model.isLogin() ) {
                this.trigger("showView",[ this ]);
                this.$el.delay(200).fadeIn(200);

            }
            else{
                window.location.hash = "";
            }*/
        },
        hide: function() {
            this.$el.fadeOut(200);
        },
        initialize: function() {
            this.render();
        }
    });
    return joyStickView;
})