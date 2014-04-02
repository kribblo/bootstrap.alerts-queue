## Queue Bootstrap alerts with Javascript

Creates and shows [Bootstrap alerts](http://getbootstrap.com/components/#alerts) in a queue so that multiple alerts can co-exist easily. Configuration for
maintaining individual or uniform widths, type of message, timeouts and more as global default or on per-alert basis.

### Dependencies

jQuery + Bootstrap (minimum: alerts CSS and alerts-dismissal Javascript)

### Examples

[Examples page](http://kribblo.github.io/bootstrap.alerts-queue/examples/examples.html) with [Javascript source](http://kribblo.github.io/bootstrap.alerts-queue/examples/examples.js)

### Usage

Include jQuery, Bootstrap and [bootstrap.alerts-queue.js](bootstrap.alerts-queue.js) in your HTML.

#### Options

All methods except `clearAlerts` takes an optional options object:

* type - The class that defines which type of alert: alert-info, alert-success, alert-warning, alert-danger - or your own self-defined class
* holderTop - Top padding (padding-top) of the holder element if created automatically, defaults to '10px'
* distance - Distance (as margin-bottom) between each alert, defaults to '10px'
* width - Width behaviour of each alert as uniform (all sized as current largest), natural (each has their own width) or a CSS value
* timeout - Time before automatic fadeout, or falsy for only manually closed
* closeButtonText - Text inside the close button, set to falsy to disable close button

The defaults are:

```javascript
var defaultOptions = {
	type: 'alert-info',
	holderTop: '10px',
	distance: '10px',
	width: 'natural',
	timeout: undefined,
	closeButtonText: '&times;'
};
```

#### Basic usage:

```javascript
$('#warnings').addAlert('This is a warning', {type: 'alert-warning', timeout: 1500});
```

#### Initialize with defaults:

```javascript
$('#warnings').bootstrapAlertsQueue({type: 'alert-warning', timeout: 1500});
$('#warnings').addAlert('This is a warning');
$('#warnings').addAlert('This is your second warning');
```

`bootstrapAlertsQueue` will be called by the other methods if not already initialized.

#### Remove all traces of the alerts:

```javascript
$('#warnings').clearAlerts();
```

#### Shortcuts:

Calls `addAlert` with the proper type already set.

```javascript
$(...).addWarningAlert(...)
$(...).addSuccessAlert(...)
$(...).addInfoAlert(...)
$(...).addDangerAlert(...)
```

### Jsdoc

Not really. The code is documented but I couldn't for my life get [Jsdoc](https://github.com/jsdoc3/jsdoc) to spit out something useful or complete. Help wanted.
