import Model from 'ember-data/model';

export default Model.extend({
    user: DS.belongsTo("user", {async:true}),
    filepath: DS.attr(),
    title: DS.attr(),
    description: DS.attr(),
    tags: DS.attr()
});
