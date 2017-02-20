/*
 * moleculer
 * Copyright (c) 2017 Icebob (https://github.com/ice-services/moleculer)
 * MIT Licensed
 */

"use strict";

/**
 * Base Transporter class
 * 
 * @class BaseTransporter
 */
class BaseTransporter {

	/**
	 * Creates an instance of BaseTransporter.
	 * 
	 * @param {any} opts
	 * 
	 * @memberOf BaseTransporter
	 */
	constructor(opts) {
		this.opts = opts || {};

		this.prefix = "SVC";
		
		if (this.opts.prefix) {
			this.prefix = this.opts.prefix;
		}
	}

	/**
	 * Init transporter
	 * 
	 * @param {any} broker
	 * 
	 * @memberOf BaseTransporter
	 */
	init(broker, messageHandler) {
		this.broker = broker;
		this.nodeID = broker.nodeID;
		this.logger = broker.getLogger("TX");
		this.messageHandler = messageHandler;
	}

	/**
	 * Connect to the transporter server
	 * 
	 * @memberOf BaseTransporter
	 */
	connect() {
		/* istanbul ignore next */
		return Promise.resolve();
	}

	/**
	 * Disconnect from the transporter server
	 * 
	 * @memberOf BaseTransporter
	 */
	disconnect() {
		return Promise.resolve();
	}

	subscribe(topic) {
		/* istanbul ignore next */
		throw new Error("Not implemented!");
	}

	publish(topic, packet) {
		/* istanbul ignore next */
		throw new Error("Not implemented!");
	}

	incomingPacket(topic, packet) {
		/* istanbul ignore next */
		throw new Error("Not implemented!");
	}

}

module.exports = BaseTransporter;