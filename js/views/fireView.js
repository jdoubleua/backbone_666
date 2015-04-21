var app = app || {};


app.FireView = Backbone.View.extend({

    render: function(){
        this.$el.html(this.model.get("title"));

        return this;
    }

});


app.FiresView = Backbone.View.extend({
    render: function(){
        var self = this;
        this.model.each(function(){
            app.fireView = new app.FireView({
                model: app.fire });
                self.$el.append(app.fireView.render().$el);
            });
    }
});

app.fires = new app.Fires ([
   new app.Fire({title: "Fires in yo pants"}),
   new app.Fire({title: "Ants on the ground"}),
   new app.Fire({title: "Hell is like Satan for Children"})
]);


app.fireView = new app.FireView ({
    el: "#newFireView",
    model: app.fire
});

app.firesView = new app.FiresView ({
    el: "#newFireView",
    model: app.Fires
});
app.fireView.render();
