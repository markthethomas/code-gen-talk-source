/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.floqars = (function() {

    /**
     * Namespace floqars.
     * @exports floqars
     * @namespace
     */
    var floqars = {};

    floqars.services = (function() {

        /**
         * Namespace services.
         * @memberof floqars
         * @namespace
         */
        var services = {};

        services.nearby = (function() {

            /**
             * Namespace nearby.
             * @memberof floqars.services
             * @namespace
             */
            var nearby = {};

            nearby.NearbyRequest = (function() {

                /**
                 * Properties of a NearbyRequest.
                 * @memberof floqars.services.nearby
                 * @interface INearbyRequest
                 * @property {number} [lat] NearbyRequest lat
                 * @property {number} [lng] NearbyRequest lng
                 */

                /**
                 * Constructs a new NearbyRequest.
                 * @memberof floqars.services.nearby
                 * @classdesc Represents a NearbyRequest.
                 * @constructor
                 * @param {floqars.services.nearby.INearbyRequest=} [properties] Properties to set
                 */
                function NearbyRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NearbyRequest lat.
                 * @member {number}lat
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @instance
                 */
                NearbyRequest.prototype.lat = 0;

                /**
                 * NearbyRequest lng.
                 * @member {number}lng
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @instance
                 */
                NearbyRequest.prototype.lng = 0;

                /**
                 * Creates a new NearbyRequest instance using the specified properties.
                 * @function create
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {floqars.services.nearby.INearbyRequest=} [properties] Properties to set
                 * @returns {floqars.services.nearby.NearbyRequest} NearbyRequest instance
                 */
                NearbyRequest.create = function create(properties) {
                    return new NearbyRequest(properties);
                };

                /**
                 * Encodes the specified NearbyRequest message. Does not implicitly {@link floqars.services.nearby.NearbyRequest.verify|verify} messages.
                 * @function encode
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {floqars.services.nearby.INearbyRequest} message NearbyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NearbyRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lat != null && message.hasOwnProperty("lat"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.lat);
                    if (message.lng != null && message.hasOwnProperty("lng"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.lng);
                    return writer;
                };

                /**
                 * Encodes the specified NearbyRequest message, length delimited. Does not implicitly {@link floqars.services.nearby.NearbyRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {floqars.services.nearby.INearbyRequest} message NearbyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NearbyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NearbyRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {floqars.services.nearby.NearbyRequest} NearbyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NearbyRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.floqars.services.nearby.NearbyRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.lat = reader.float();
                            break;
                        case 2:
                            message.lng = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NearbyRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {floqars.services.nearby.NearbyRequest} NearbyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NearbyRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NearbyRequest message.
                 * @function verify
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NearbyRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.lat != null && message.hasOwnProperty("lat"))
                        if (typeof message.lat !== "number")
                            return "lat: number expected";
                    if (message.lng != null && message.hasOwnProperty("lng"))
                        if (typeof message.lng !== "number")
                            return "lng: number expected";
                    return null;
                };

                /**
                 * Creates a NearbyRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {floqars.services.nearby.NearbyRequest} NearbyRequest
                 */
                NearbyRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.floqars.services.nearby.NearbyRequest)
                        return object;
                    var message = new $root.floqars.services.nearby.NearbyRequest();
                    if (object.lat != null)
                        message.lat = Number(object.lat);
                    if (object.lng != null)
                        message.lng = Number(object.lng);
                    return message;
                };

                /**
                 * Creates a plain object from a NearbyRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @static
                 * @param {floqars.services.nearby.NearbyRequest} message NearbyRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NearbyRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.lat = 0;
                        object.lng = 0;
                    }
                    if (message.lat != null && message.hasOwnProperty("lat"))
                        object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
                    if (message.lng != null && message.hasOwnProperty("lng"))
                        object.lng = options.json && !isFinite(message.lng) ? String(message.lng) : message.lng;
                    return object;
                };

                /**
                 * Converts this NearbyRequest to JSON.
                 * @function toJSON
                 * @memberof floqars.services.nearby.NearbyRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NearbyRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NearbyRequest;
            })();

            nearby.NearbyReply = (function() {

                /**
                 * Properties of a NearbyReply.
                 * @memberof floqars.services.nearby
                 * @interface INearbyReply
                 * @property {Array.<string>} [ids] NearbyReply ids
                 */

                /**
                 * Constructs a new NearbyReply.
                 * @memberof floqars.services.nearby
                 * @classdesc Represents a NearbyReply.
                 * @constructor
                 * @param {floqars.services.nearby.INearbyReply=} [properties] Properties to set
                 */
                function NearbyReply(properties) {
                    this.ids = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NearbyReply ids.
                 * @member {Array.<string>}ids
                 * @memberof floqars.services.nearby.NearbyReply
                 * @instance
                 */
                NearbyReply.prototype.ids = $util.emptyArray;

                /**
                 * Creates a new NearbyReply instance using the specified properties.
                 * @function create
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {floqars.services.nearby.INearbyReply=} [properties] Properties to set
                 * @returns {floqars.services.nearby.NearbyReply} NearbyReply instance
                 */
                NearbyReply.create = function create(properties) {
                    return new NearbyReply(properties);
                };

                /**
                 * Encodes the specified NearbyReply message. Does not implicitly {@link floqars.services.nearby.NearbyReply.verify|verify} messages.
                 * @function encode
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {floqars.services.nearby.INearbyReply} message NearbyReply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NearbyReply.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ids != null && message.ids.length)
                        for (var i = 0; i < message.ids.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ids[i]);
                    return writer;
                };

                /**
                 * Encodes the specified NearbyReply message, length delimited. Does not implicitly {@link floqars.services.nearby.NearbyReply.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {floqars.services.nearby.INearbyReply} message NearbyReply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NearbyReply.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NearbyReply message from the specified reader or buffer.
                 * @function decode
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {floqars.services.nearby.NearbyReply} NearbyReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NearbyReply.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.floqars.services.nearby.NearbyReply();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.ids && message.ids.length))
                                message.ids = [];
                            message.ids.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NearbyReply message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {floqars.services.nearby.NearbyReply} NearbyReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NearbyReply.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NearbyReply message.
                 * @function verify
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NearbyReply.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ids != null && message.hasOwnProperty("ids")) {
                        if (!Array.isArray(message.ids))
                            return "ids: array expected";
                        for (var i = 0; i < message.ids.length; ++i)
                            if (!$util.isString(message.ids[i]))
                                return "ids: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a NearbyReply message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {floqars.services.nearby.NearbyReply} NearbyReply
                 */
                NearbyReply.fromObject = function fromObject(object) {
                    if (object instanceof $root.floqars.services.nearby.NearbyReply)
                        return object;
                    var message = new $root.floqars.services.nearby.NearbyReply();
                    if (object.ids) {
                        if (!Array.isArray(object.ids))
                            throw TypeError(".floqars.services.nearby.NearbyReply.ids: array expected");
                        message.ids = [];
                        for (var i = 0; i < object.ids.length; ++i)
                            message.ids[i] = String(object.ids[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a NearbyReply message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof floqars.services.nearby.NearbyReply
                 * @static
                 * @param {floqars.services.nearby.NearbyReply} message NearbyReply
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NearbyReply.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.ids = [];
                    if (message.ids && message.ids.length) {
                        object.ids = [];
                        for (var j = 0; j < message.ids.length; ++j)
                            object.ids[j] = message.ids[j];
                    }
                    return object;
                };

                /**
                 * Converts this NearbyReply to JSON.
                 * @function toJSON
                 * @memberof floqars.services.nearby.NearbyReply
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NearbyReply.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NearbyReply;
            })();

            nearby.UpdateLocationRequest = (function() {

                /**
                 * Properties of an UpdateLocationRequest.
                 * @memberof floqars.services.nearby
                 * @interface IUpdateLocationRequest
                 * @property {string} [id] UpdateLocationRequest id
                 * @property {number} [lat] UpdateLocationRequest lat
                 * @property {number} [lng] UpdateLocationRequest lng
                 */

                /**
                 * Constructs a new UpdateLocationRequest.
                 * @memberof floqars.services.nearby
                 * @classdesc Represents an UpdateLocationRequest.
                 * @constructor
                 * @param {floqars.services.nearby.IUpdateLocationRequest=} [properties] Properties to set
                 */
                function UpdateLocationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateLocationRequest id.
                 * @member {string}id
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @instance
                 */
                UpdateLocationRequest.prototype.id = "";

                /**
                 * UpdateLocationRequest lat.
                 * @member {number}lat
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @instance
                 */
                UpdateLocationRequest.prototype.lat = 0;

                /**
                 * UpdateLocationRequest lng.
                 * @member {number}lng
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @instance
                 */
                UpdateLocationRequest.prototype.lng = 0;

                /**
                 * Creates a new UpdateLocationRequest instance using the specified properties.
                 * @function create
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {floqars.services.nearby.IUpdateLocationRequest=} [properties] Properties to set
                 * @returns {floqars.services.nearby.UpdateLocationRequest} UpdateLocationRequest instance
                 */
                UpdateLocationRequest.create = function create(properties) {
                    return new UpdateLocationRequest(properties);
                };

                /**
                 * Encodes the specified UpdateLocationRequest message. Does not implicitly {@link floqars.services.nearby.UpdateLocationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {floqars.services.nearby.IUpdateLocationRequest} message UpdateLocationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateLocationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.lat != null && message.hasOwnProperty("lat"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.lat);
                    if (message.lng != null && message.hasOwnProperty("lng"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.lng);
                    return writer;
                };

                /**
                 * Encodes the specified UpdateLocationRequest message, length delimited. Does not implicitly {@link floqars.services.nearby.UpdateLocationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {floqars.services.nearby.IUpdateLocationRequest} message UpdateLocationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateLocationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateLocationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {floqars.services.nearby.UpdateLocationRequest} UpdateLocationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateLocationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.floqars.services.nearby.UpdateLocationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.lat = reader.float();
                            break;
                        case 3:
                            message.lng = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateLocationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {floqars.services.nearby.UpdateLocationRequest} UpdateLocationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateLocationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateLocationRequest message.
                 * @function verify
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateLocationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.lat != null && message.hasOwnProperty("lat"))
                        if (typeof message.lat !== "number")
                            return "lat: number expected";
                    if (message.lng != null && message.hasOwnProperty("lng"))
                        if (typeof message.lng !== "number")
                            return "lng: number expected";
                    return null;
                };

                /**
                 * Creates an UpdateLocationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {floqars.services.nearby.UpdateLocationRequest} UpdateLocationRequest
                 */
                UpdateLocationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.floqars.services.nearby.UpdateLocationRequest)
                        return object;
                    var message = new $root.floqars.services.nearby.UpdateLocationRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.lat != null)
                        message.lat = Number(object.lat);
                    if (object.lng != null)
                        message.lng = Number(object.lng);
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateLocationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @static
                 * @param {floqars.services.nearby.UpdateLocationRequest} message UpdateLocationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateLocationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.lat = 0;
                        object.lng = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.lat != null && message.hasOwnProperty("lat"))
                        object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
                    if (message.lng != null && message.hasOwnProperty("lng"))
                        object.lng = options.json && !isFinite(message.lng) ? String(message.lng) : message.lng;
                    return object;
                };

                /**
                 * Converts this UpdateLocationRequest to JSON.
                 * @function toJSON
                 * @memberof floqars.services.nearby.UpdateLocationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateLocationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateLocationRequest;
            })();

            nearby.UpdateLocationReply = (function() {

                /**
                 * Properties of an UpdateLocationReply.
                 * @memberof floqars.services.nearby
                 * @interface IUpdateLocationReply
                 * @property {boolean} [success] UpdateLocationReply success
                 */

                /**
                 * Constructs a new UpdateLocationReply.
                 * @memberof floqars.services.nearby
                 * @classdesc Represents an UpdateLocationReply.
                 * @constructor
                 * @param {floqars.services.nearby.IUpdateLocationReply=} [properties] Properties to set
                 */
                function UpdateLocationReply(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateLocationReply success.
                 * @member {boolean}success
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @instance
                 */
                UpdateLocationReply.prototype.success = false;

                /**
                 * Creates a new UpdateLocationReply instance using the specified properties.
                 * @function create
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {floqars.services.nearby.IUpdateLocationReply=} [properties] Properties to set
                 * @returns {floqars.services.nearby.UpdateLocationReply} UpdateLocationReply instance
                 */
                UpdateLocationReply.create = function create(properties) {
                    return new UpdateLocationReply(properties);
                };

                /**
                 * Encodes the specified UpdateLocationReply message. Does not implicitly {@link floqars.services.nearby.UpdateLocationReply.verify|verify} messages.
                 * @function encode
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {floqars.services.nearby.IUpdateLocationReply} message UpdateLocationReply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateLocationReply.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.success != null && message.hasOwnProperty("success"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                    return writer;
                };

                /**
                 * Encodes the specified UpdateLocationReply message, length delimited. Does not implicitly {@link floqars.services.nearby.UpdateLocationReply.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {floqars.services.nearby.IUpdateLocationReply} message UpdateLocationReply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateLocationReply.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateLocationReply message from the specified reader or buffer.
                 * @function decode
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {floqars.services.nearby.UpdateLocationReply} UpdateLocationReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateLocationReply.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.floqars.services.nearby.UpdateLocationReply();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.success = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateLocationReply message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {floqars.services.nearby.UpdateLocationReply} UpdateLocationReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateLocationReply.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateLocationReply message.
                 * @function verify
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateLocationReply.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.success != null && message.hasOwnProperty("success"))
                        if (typeof message.success !== "boolean")
                            return "success: boolean expected";
                    return null;
                };

                /**
                 * Creates an UpdateLocationReply message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {floqars.services.nearby.UpdateLocationReply} UpdateLocationReply
                 */
                UpdateLocationReply.fromObject = function fromObject(object) {
                    if (object instanceof $root.floqars.services.nearby.UpdateLocationReply)
                        return object;
                    var message = new $root.floqars.services.nearby.UpdateLocationReply();
                    if (object.success != null)
                        message.success = Boolean(object.success);
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateLocationReply message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @static
                 * @param {floqars.services.nearby.UpdateLocationReply} message UpdateLocationReply
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateLocationReply.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.success = false;
                    if (message.success != null && message.hasOwnProperty("success"))
                        object.success = message.success;
                    return object;
                };

                /**
                 * Converts this UpdateLocationReply to JSON.
                 * @function toJSON
                 * @memberof floqars.services.nearby.UpdateLocationReply
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateLocationReply.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateLocationReply;
            })();

            nearby.Nearby = (function() {

                /**
                 * Constructs a new Nearby service.
                 * @memberof floqars.services.nearby
                 * @classdesc Represents a Nearby
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Nearby(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Nearby.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Nearby;

                /**
                 * Creates new Nearby service using the specified rpc implementation.
                 * @function create
                 * @memberof floqars.services.nearby.Nearby
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Nearby} RPC service. Useful where requests and/or responses are streamed.
                 */
                Nearby.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link floqars.services.nearby.Nearby#findNearby}.
                 * @memberof floqars.services.nearby.Nearby
                 * @typedef FindNearbyCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {floqars.services.nearby.NearbyReply} [response] NearbyReply
                 */

                /**
                 * Calls FindNearby.
                 * @function .findNearby
                 * @memberof floqars.services.nearby.Nearby
                 * @instance
                 * @param {floqars.services.nearby.INearbyRequest} request NearbyRequest message or plain object
                 * @param {floqars.services.nearby.Nearby.FindNearbyCallback} callback Node-style callback called with the error, if any, and NearbyReply
                 * @returns {undefined}
                 * @variation 1
                 */
                Nearby.prototype.findNearby = function findNearby(request, callback) {
                    return this.rpcCall(findNearby, $root.floqars.services.nearby.NearbyRequest, $root.floqars.services.nearby.NearbyReply, request, callback);
                };

                /**
                 * Calls FindNearby.
                 * @function findNearby
                 * @memberof floqars.services.nearby.Nearby
                 * @instance
                 * @param {floqars.services.nearby.INearbyRequest} request NearbyRequest message or plain object
                 * @returns {Promise<floqars.services.nearby.NearbyReply>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link floqars.services.nearby.Nearby#updateLocation}.
                 * @memberof floqars.services.nearby.Nearby
                 * @typedef UpdateLocationCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {floqars.services.nearby.UpdateLocationReply} [response] UpdateLocationReply
                 */

                /**
                 * Calls UpdateLocation.
                 * @function .updateLocation
                 * @memberof floqars.services.nearby.Nearby
                 * @instance
                 * @param {floqars.services.nearby.IUpdateLocationRequest} request UpdateLocationRequest message or plain object
                 * @param {floqars.services.nearby.Nearby.UpdateLocationCallback} callback Node-style callback called with the error, if any, and UpdateLocationReply
                 * @returns {undefined}
                 * @variation 1
                 */
                Nearby.prototype.updateLocation = function updateLocation(request, callback) {
                    return this.rpcCall(updateLocation, $root.floqars.services.nearby.UpdateLocationRequest, $root.floqars.services.nearby.UpdateLocationReply, request, callback);
                };

                /**
                 * Calls UpdateLocation.
                 * @function updateLocation
                 * @memberof floqars.services.nearby.Nearby
                 * @instance
                 * @param {floqars.services.nearby.IUpdateLocationRequest} request UpdateLocationRequest message or plain object
                 * @returns {Promise<floqars.services.nearby.UpdateLocationReply>} Promise
                 * @variation 2
                 */

                return Nearby;
            })();

            return nearby;
        })();

        return services;
    })();

    return floqars;
})();

module.exports = $root;
