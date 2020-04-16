const Post = require('./models/post');
const Background = require('./models/background');
const DedicatedTo = require('./models/dedicatedTo');
const Reason = require('./models/reason');
const Report = require('./models/report');
const Share = require('./models/share');
const Tag = require('./models/tag');

Post.belongsToMany(Tag, {through: 'post_tag'});
Post.hasMany(Report, {as: 'reports', foreignKey: 'id'});
Post.hasMany(DedicatedTo, {as: 'dedicatedsTo', foreignKey: 'id'});
Post.hasOne(Background, {as: 'background', foreignKey: 'id'});
Background.belongsTo(Post, {as: 'post', foreignKey: 'id'});
DedicatedTo.belongsTo(Post, {as: 'post', foreignKey: 'id'});
Reason.belongsTo(Report, {as: 'report', foreignKey: 'id'});
Report.belongsTo(Post, {as: 'post', foreignKey: 'id'});
Report.hasOne(Reason, {as: Reason, foreignKey: 'id'});
Tag.belongsToMany(Post, {through: 'post_tag'});