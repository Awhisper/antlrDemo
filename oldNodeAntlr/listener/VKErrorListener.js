var ErrorListener = require('.././antlr4/error/ErrorListener').ErrorListener;

function VKErrorListener(errorCallback) {
	ErrorListener.call(this);
	this.errorCallback = errorCallback;
	return this;
}

VKErrorListener.prototype = Object.create(ErrorListener.prototype);
VKErrorListener.prototype.constructor = VKErrorListener;

VKErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
	if (this.errorCallback) this.errorCallback(e)
};

VKErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
};

VKErrorListener.prototype.reportAttemptingFullContext = function(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
};

VKErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
};

exports.VKErrorListener = VKErrorListener;