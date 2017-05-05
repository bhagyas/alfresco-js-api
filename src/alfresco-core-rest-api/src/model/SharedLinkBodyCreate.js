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
    root.AlfrescoCoreRestApi.SharedLinkBodyCreate = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SharedLinkBodyCreate model module.
   * @module model/SharedLinkBodyCreate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SharedLinkBodyCreate</code>.
   * @alias module:model/SharedLinkBodyCreate
   * @class
   * @param nodeId {String}
   */
  var exports = function(nodeId) {
    var _this = this;

    _this['nodeId'] = nodeId;

  };

  /**
   * Constructs a <code>SharedLinkBodyCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SharedLinkBodyCreate} obj Optional instance to populate.
   * @return {module:model/SharedLinkBodyCreate} The populated <code>SharedLinkBodyCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nodeId')) {
        obj['nodeId'] = ApiClient.convertToType(data['nodeId'], 'String');
      }
      if (data.hasOwnProperty('expiresAt')) {
        obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} nodeId
   */
  exports.prototype['nodeId'] = undefined;
  /**
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined;



  return exports;
}));


