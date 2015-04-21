var app = app || {};

app.FireplaceView = Backbone.View.extend({

    render: function(){
        this.$el.html("I'm hot like the devil in longsleeves");

        return this;
    }

});

app.fireplaceViewI = new app.FireplaceView ({
    el: "#firePlaceView"
});

app.fireplaceViewI.render();