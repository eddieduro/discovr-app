import Model from 'ember-data/model';

export default Model.extend({
    user: DS.belongsTo("user", {async:true}),
    name: DS.attr(),
    type: DS.attr(),
    size: DS.attr(),
    date: DS.attr(),
    dataURL: DS.attr()
});
