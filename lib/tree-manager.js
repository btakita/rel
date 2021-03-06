// Generated by CoffeeScript 1.4.0
(function() {
  var FactoryMethods, TreeManager, exports, u,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  u = require('underscore');

  FactoryMethods = require('./factory-methods');

  TreeManager = (function(_super) {

    __extends(TreeManager, _super);

    function TreeManager() {
      this.visitor = this.visitors().visitor();
      this.ast = null;
      this.ctx = null;
    }

    TreeManager.prototype.visitors = function() {
      return require('./visitors');
    };

    TreeManager.prototype.toDot = function() {
      return new this.visitors().Dot().accept(this.ast);
    };

    TreeManager.prototype.toSql = function() {
      return this.visitor.accept(this.ast);
    };

    TreeManager.prototype.initializeCopy = function(other) {
      TreeManager.__super__.initializeCopy.call(this);
      return this.ast = u(this.ast).clone();
    };

    TreeManager.prototype.where = function(expr) {
      if (TreeManager === expr.constructor) {
        expr = expr.ast;
      }
      this.ctx.wheres.push(expr);
      return this;
    };

    return TreeManager;

  })(FactoryMethods);

  exports = module.exports = TreeManager;

}).call(this);
