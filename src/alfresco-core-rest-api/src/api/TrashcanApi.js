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
    define(['../ApiClient', '../model/DeletedNodeEntry', '../model/DeletedNodesPaging', '../model/Error', '../model/NodeEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeletedNodeEntry'), require('../model/DeletedNodesPaging'), require('../model/Error'), require('../model/NodeEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TrashcanApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNodeEntry, root.AlfrescoCoreRestApi.DeletedNodesPaging, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.NodeEntry);
  }
}(this, function(ApiClient, DeletedNodeEntry, DeletedNodesPaging, Error, NodeEntry) {
  'use strict';

  /**
   * Trashcan service.
   * @module api/TrashcanApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TrashcanApi.
   * @alias module:api/TrashcanApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Permanently delete a deleted node
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Permanently deletes the deleted node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDeletedNode = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw new Error("Missing the required parameter 'nodeId' when calling deleteDeletedNode");
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a deleted node
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the specific deleted node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeletedNodeEntry}
     */
    this.getDeletedNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw new Error("Missing the required parameter 'nodeId' when calling getDeletedNode");
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List deleted nodes
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of deleted nodes for the current user.  If the current user is an administrator deleted nodes for all users will be returned.  The list of deleted nodes will be ordered with the most recently deleted node at the top of the list.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * association * isLink * isLocked * path * properties * permissions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeletedNodesPaging}
     */
    this.listDeletedNodes = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodesPaging;

      return this.apiClient.callApi(
        '/deleted-nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Restore a deleted node
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Attempts to restore the deleted node **nodeId** to its original location.  If the node is successfully restored to its former primary parent, then only the  primary child association will be restored, including recursively for any primary  children. It should be noted that no other secondary child associations or peer  associations will be restored, for any of the nodes within the primary parent-child  hierarchy of restored nodes, irrespective of whether these associations were to  nodes within or outside of the restored hierarchy.   Also, any previously shared link will not be restored since it is deleted at the time  of delete of each node.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeEntry}
     */
    this.restoreDeletedNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw new Error("Missing the required parameter 'nodeId' when calling restoreDeletedNode");
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}/restore', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
