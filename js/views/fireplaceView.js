var app = app || {};

app.FireplaceView = Backbone.View.extend({
    tagName: "span",
    className: "fire",

    id: "caveman",

    attributes: {
        "data-genre": "Funk"
    },
    render: function(){
        this.$el.html("I'm hot like the devil in longsleeves");

        return this;
    }

});

app.fireplaceViewI = new app.FireplaceView ({

});

//app.fireplaceViewI.render();

$("#firePlaceView").html(app.fireplaceViewI.render().$el)