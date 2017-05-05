/**
 * Alfresco Content Services REST API
 * **Core API**  Provides access to the core features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Association = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Association model module.
   * @module model/Association
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Association</code>.
   * @alias module:model/Association
   * @class
   * @param targetId {String}
   * @param assocType {String}
   */
  var exports = function(targetId, assocType) {
    var _this = this;

    _this['targetId'] = targetId;
    _this['assocType'] = assocType;
  };

  /**
   * Constructs a <code>Association</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Association} obj Optional instance to populate.
   * @return {module:model/Association} The populated <code>Association</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetId')) {
        obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
      }
      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} targetId
   */
  exports.prototype['targetId'] = undefined;
  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;



  return exports;
}));


