## Classes

<dl>
<dt><a href="#SolisClient">SolisClient</a> ⇐ <code><a href="https://discord.js.org/#/docs/main/master/class/Client">Client</a></code></dt>
<dd><p>The base Client of Solis</p>
</dd>
<dt><a href="#AliasFrame">AliasFrame</a> ⇐ <code><a href="#Frame">Frame</a></code></dt>
<dd><p>The common class for any Frame with an alias</p>
</dd>
<dt><a href="#Box">Box</a> ⇐ <code><a href="https://discord.js.org/#/docs/main/master/class/Collection">Collection</a></code></dt>
<dd><p>The common base for all Boxes</p>
</dd>
<dt><a href="#Frame">Frame</a></dt>
<dd><p>The base class for everything in Solis</p>
</dd>
<dt><a href="#Util">Util</a></dt>
<dd><p>A Utility class for use within Solis</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FrameOptions">FrameOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="SolisClient"></a>

## SolisClient ⇐ [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)
The base Client of Solis

**Kind**: global class  
**Extends**: [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)  

* [SolisClient](#SolisClient) ⇐ [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)
    * [.basePermissions](#SolisClient+basePermissions) : <code>Permissions</code>
    * [.userBaseDirectory](#SolisClient+userBaseDirectory) : <code>string</code>
    * [.application](#SolisClient+application) : <code>external:ClientApplication</code>
    * [.fetchApplication()](#SolisClient+fetchApplication) ⇒ <code>external:ClientApplication</code>

<a name="SolisClient+basePermissions"></a>

### solisClient.basePermissions : <code>Permissions</code>
The base permissions that the [Client#invite](Client#invite) asks for, defaults to [VIEW_CHANNELS, SEND_MESSAGES]

**Kind**: instance property of [<code>SolisClient</code>](#SolisClient)  
<a name="SolisClient+userBaseDirectory"></a>

### solisClient.userBaseDirectory : <code>string</code>
The user directory

**Kind**: instance property of [<code>SolisClient</code>](#SolisClient)  
<a name="SolisClient+application"></a>

### solisClient.application : <code>external:ClientApplication</code>
The apps info from the discord api

**Kind**: instance property of [<code>SolisClient</code>](#SolisClient)  
<a name="SolisClient+fetchApplication"></a>

### solisClient.fetchApplication() ⇒ <code>external:ClientApplication</code>
The OAuth Application, obtained from DiscordWhen ran, updates [Client#application](Client#application)

**Kind**: instance method of [<code>SolisClient</code>](#SolisClient)  
<a name="AliasFrame"></a>

## AliasFrame ⇐ [<code>Frame</code>](#Frame)
The common class for any Frame with an alias

**Kind**: global class  
**Extends**: [<code>Frame</code>](#Frame)  

* [AliasFrame](#AliasFrame) ⇐ [<code>Frame</code>](#Frame)
    * [.aliases](#AliasFrame+aliases) : <code>Array.&lt;string&gt;</code>
    * [.client](#Frame+client) : [<code>SolisClient</code>](#SolisClient)
    * [.file](#Frame+file) : <code>Array.&lt;string&gt;</code>
    * [.name](#Frame+name) : <code>string</code>
    * [.enabled](#Frame+enabled) : <code>Boolean</code>
    * [.box](#Frame+box) : [<code>Box</code>](#Box)
    * [.directory](#Frame+directory) : <code>string</code>
    * [.type](#Frame+type) : <code>string</code>
    * [.path](#Frame+path)
    * [.reload()](#Frame+reload) ⇒ [<code>Frame</code>](#Frame)
    * [.unload()](#Frame+unload) ⇒ <code>void</code>
    * [.disable()](#Frame+disable) ⇒ [<code>Frame</code>](#Frame)

<a name="AliasFrame+aliases"></a>

### aliasFrame.aliases : <code>Array.&lt;string&gt;</code>
The aliases for this Frame

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+client"></a>

### aliasFrame.client : [<code>SolisClient</code>](#SolisClient)
The client that initialized this Frame

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+file"></a>

### aliasFrame.file : <code>Array.&lt;string&gt;</code>
The file where this piece resides

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+name"></a>

### aliasFrame.name : <code>string</code>
The name of the Frame

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+enabled"></a>

### aliasFrame.enabled : <code>Boolean</code>
Whether this Frame is enabled

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+box"></a>

### aliasFrame.box : [<code>Box</code>](#Box)
The box for this Frame

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+directory"></a>

### aliasFrame.directory : <code>string</code>
The base directory for this Frame

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+type"></a>

### aliasFrame.type : <code>string</code>
The type of Frame

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
**Read only**: true  
<a name="Frame+path"></a>

### aliasFrame.path
The absolute path to the frame

**Kind**: instance property of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+reload"></a>

### aliasFrame.reload() ⇒ [<code>Frame</code>](#Frame)
Reloads the Frame

**Kind**: instance method of [<code>AliasFrame</code>](#AliasFrame)  
**Returns**: [<code>Frame</code>](#Frame) - The newly loaded Frame  
<a name="Frame+unload"></a>

### aliasFrame.unload() ⇒ <code>void</code>
Unloads the frame

**Kind**: instance method of [<code>AliasFrame</code>](#AliasFrame)  
<a name="Frame+disable"></a>

### aliasFrame.disable() ⇒ [<code>Frame</code>](#Frame)
Disables a Frame

**Kind**: instance method of [<code>AliasFrame</code>](#AliasFrame)  
**Chainable**  
**Returns**: [<code>Frame</code>](#Frame) - The Frame that was disabled  
<a name="Box"></a>

## Box ⇐ [<code>Collection</code>](https://discord.js.org/#/docs/main/master/class/Collection)
The common base for all Boxes

**Kind**: global class  
**Extends**: [<code>Collection</code>](https://discord.js.org/#/docs/main/master/class/Collection)  

* [Box](#Box) ⇐ [<code>Collection</code>](https://discord.js.org/#/docs/main/master/class/Collection)
    * [.client](#Box+client) : [<code>SolisClient</code>](#SolisClient)
    * [.name](#Box+name) : <code>string</code>
    * [.holds](#Box+holds) : [<code>Frame</code>](#Frame)
    * [.baseDirectories](#Box+baseDirectories) : <code>Set.&lt;string&gt;</code>
    * [.userDirectory](#Box+userDirectory) : <code>string</code>
    * [.registerBaseDirectory(directory)](#Box+registerBaseDirectory) ⇒ [<code>Box</code>](#Box)
    * [.init()](#Box+init) ⇒ <code>Promise.&lt;Array.&lt;\*&gt;&gt;</code>
    * [.load(directory, file)](#Box+load) ⇒ [<code>Frame</code>](#Frame)
    * [.loadAll()](#Box+loadAll) ⇒ <code>number</code>
    * [.set(frame)](#Box+set) ⇒ [<code>Frame</code>](#Frame)
    * [.delete(name)](#Box+delete) ⇒ <code>Boolean</code>
    * [.resolve(name)](#Box+resolve) ⇒ [<code>Frame</code>](#Frame)

<a name="Box+client"></a>

### box.client : [<code>SolisClient</code>](#SolisClient)
The [SolisClient](#SolisClient) that initialized this Box

**Kind**: instance property of [<code>Box</code>](#Box)  
**Read only**: true  
<a name="Box+name"></a>

### box.name : <code>string</code>
The name of what this holds

**Kind**: instance property of [<code>Box</code>](#Box)  
**Read only**: true  
<a name="Box+holds"></a>

### box.holds : [<code>Frame</code>](#Frame)
The type of structure this store holds

**Kind**: instance property of [<code>Box</code>](#Box)  
**Read only**: true  
<a name="Box+baseDirectories"></a>

### box.baseDirectories : <code>Set.&lt;string&gt;</code>
The base directories of the Frame's this store holds

**Kind**: instance property of [<code>Box</code>](#Box)  
**Read only**: true  
<a name="Box+userDirectory"></a>

### box.userDirectory : <code>string</code>
The directory of local Frames relative to where you can run Framing from

**Kind**: instance property of [<code>Box</code>](#Box)  
**Read only**: true  
<a name="Box+registerBaseDirectory"></a>

### box.registerBaseDirectory(directory) ⇒ [<code>Box</code>](#Box)
Registers a base directory to check for frames

**Kind**: instance method of [<code>Box</code>](#Box)  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | The directory to check for base frames |

<a name="Box+init"></a>

### box.init() ⇒ <code>Promise.&lt;Array.&lt;\*&gt;&gt;</code>
Initializes every frame in this Box

**Kind**: instance method of [<code>Box</code>](#Box)  
<a name="Box+load"></a>

### box.load(directory, file) ⇒ [<code>Frame</code>](#Frame)
Loads a Frame so it can be used

**Kind**: instance method of [<code>Box</code>](#Box)  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | The directory of the frame |
| file | <code>Array.&lt;string&gt;</code> | A string or array of strings where the file is located |

<a name="Box+loadAll"></a>

### box.loadAll() ⇒ <code>number</code>
Loads everything, both custom Frames and built in ones

**Kind**: instance method of [<code>Box</code>](#Box)  
**Returns**: <code>number</code> - The number of frames loaded  
<a name="Box+set"></a>

### box.set(frame) ⇒ [<code>Frame</code>](#Frame)
Sets up a Frame in the Box

**Kind**: instance method of [<code>Box</code>](#Box)  

| Param | Type | Description |
| --- | --- | --- |
| frame | [<code>Frame</code>](#Frame) | The frame to be set up |

<a name="Box+delete"></a>

### box.delete(name) ⇒ <code>Boolean</code>
Deletes a frame from the store

**Kind**: instance method of [<code>Box</code>](#Box)  
**Returns**: <code>Boolean</code> - Whether or not something was deleted  

| Param | Type | Description |
| --- | --- | --- |
| name | [<code>Frame</code>](#Frame) \| <code>string</code> | A frame object or name representing a frame |

<a name="Box+resolve"></a>

### box.resolve(name) ⇒ [<code>Frame</code>](#Frame)
Resolves a name into a Frame instance

**Kind**: instance method of [<code>Box</code>](#Box)  

| Param | Type | Description |
| --- | --- | --- |
| name | [<code>Frame</code>](#Frame) \| <code>string</code> | The Frame object or a string representing the Frame's name |

<a name="Frame"></a>

## Frame
The base class for everything in Solis

**Kind**: global class  

* [Frame](#Frame)
    * [new Frame(client, box, file, directory, [options])](#new_Frame_new)
    * [.client](#Frame+client) : [<code>SolisClient</code>](#SolisClient)
    * [.file](#Frame+file) : <code>Array.&lt;string&gt;</code>
    * [.name](#Frame+name) : <code>string</code>
    * [.enabled](#Frame+enabled) : <code>Boolean</code>
    * [.box](#Frame+box) : [<code>Box</code>](#Box)
    * [.directory](#Frame+directory) : <code>string</code>
    * [.type](#Frame+type) : <code>string</code>
    * [.path](#Frame+path)
    * [.reload()](#Frame+reload) ⇒ [<code>Frame</code>](#Frame)
    * [.unload()](#Frame+unload) ⇒ <code>void</code>
    * [.disable()](#Frame+disable) ⇒ [<code>Frame</code>](#Frame)

<a name="new_Frame_new"></a>

### new Frame(client, box, file, directory, [options])
Initializes a new Frame


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| client | [<code>SolisClient</code>](#SolisClient) |  | The client that initialized this frame |
| box | <code>Store</code> |  | The box this piece is for |
| file | <code>Array.&lt;string&gt;</code> |  | The path from the Frame's folder to the extendable file |
| directory | <code>string</code> |  | The base directory to the frames' folder |
| [options] | [<code>FrameOptions</code>](#FrameOptions) | <code>{}</code> | The options for this frame |

<a name="Frame+client"></a>

### frame.client : [<code>SolisClient</code>](#SolisClient)
The client that initialized this Frame

**Kind**: instance property of [<code>Frame</code>](#Frame)  
<a name="Frame+file"></a>

### frame.file : <code>Array.&lt;string&gt;</code>
The file where this piece resides

**Kind**: instance property of [<code>Frame</code>](#Frame)  
<a name="Frame+name"></a>

### frame.name : <code>string</code>
The name of the Frame

**Kind**: instance property of [<code>Frame</code>](#Frame)  
<a name="Frame+enabled"></a>

### frame.enabled : <code>Boolean</code>
Whether this Frame is enabled

**Kind**: instance property of [<code>Frame</code>](#Frame)  
<a name="Frame+box"></a>

### frame.box : [<code>Box</code>](#Box)
The box for this Frame

**Kind**: instance property of [<code>Frame</code>](#Frame)  
<a name="Frame+directory"></a>

### frame.directory : <code>string</code>
The base directory for this Frame

**Kind**: instance property of [<code>Frame</code>](#Frame)  
<a name="Frame+type"></a>

### frame.type : <code>string</code>
The type of Frame

**Kind**: instance property of [<code>Frame</code>](#Frame)  
**Read only**: true  
<a name="Frame+path"></a>

### frame.path
The absolute path to the frame

**Kind**: instance property of [<code>Frame</code>](#Frame)  
<a name="Frame+reload"></a>

### frame.reload() ⇒ [<code>Frame</code>](#Frame)
Reloads the Frame

**Kind**: instance method of [<code>Frame</code>](#Frame)  
**Returns**: [<code>Frame</code>](#Frame) - The newly loaded Frame  
<a name="Frame+unload"></a>

### frame.unload() ⇒ <code>void</code>
Unloads the frame

**Kind**: instance method of [<code>Frame</code>](#Frame)  
<a name="Frame+disable"></a>

### frame.disable() ⇒ [<code>Frame</code>](#Frame)
Disables a Frame

**Kind**: instance method of [<code>Frame</code>](#Frame)  
**Chainable**  
**Returns**: [<code>Frame</code>](#Frame) - The Frame that was disabled  
<a name="Util"></a>

## Util
A Utility class for use within Solis

**Kind**: global class  

* [Util](#Util)
    * [.isFunction(input)](#Util.isFunction) ⇒ <code>Boolean</code>
    * [.isClass(input)](#Util.isClass) ⇒ <code>Boolean</code>
    * [.isObject(input)](#Util.isObject) ⇒ <code>Boolean</code>
    * [.isNumber(input)](#Util.isNumber) ⇒ <code>Boolean</code>
    * [.isPrimitive(input)](#Util.isPrimitive) ⇒ <code>Boolean</code>
    * [.isThenable(input)](#Util.isThenable) ⇒ <code>Boolean</code>
    * [.deepClone(input)](#Util.deepClone) ⇒ <code>\*</code>

<a name="Util.isFunction"></a>

### Util.isFunction(input) ⇒ <code>Boolean</code>
Checks whether the provided input is a function

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the provided input was a function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>function</code> | The function to check |

<a name="Util.isClass"></a>

### Util.isClass(input) ⇒ <code>Boolean</code>
Checks whether the provided input is a class

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the provided input was a class  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>function</code> | The class to check |

<a name="Util.isObject"></a>

### Util.isObject(input) ⇒ <code>Boolean</code>
Checks whether the provided input is an object

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the provided input was an object  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | The object to check |

<a name="Util.isNumber"></a>

### Util.isNumber(input) ⇒ <code>Boolean</code>
Checks whether the provided input is a number

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the provided input was a number  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Number</code> | The number to check |

<a name="Util.isPrimitive"></a>

### Util.isPrimitive(input) ⇒ <code>Boolean</code>
Checks whether the provided input is a primitive type

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the provided input was a primitive type  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>\*</code> | The input to check |

<a name="Util.isThenable"></a>

### Util.isThenable(input) ⇒ <code>Boolean</code>
Checks whether the provided input is a promise

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the provided input was a promise  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Promise</code> | The promise to check |

<a name="Util.deepClone"></a>

### Util.deepClone(input) ⇒ <code>\*</code>
Deeply clones a value

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>\*</code> - The cloned output  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>\*</code> | The object to clone |

<a name="FrameOptions"></a>

## FrameOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> | <code>&quot;theFileName&quot;</code> | Name of the event |
| [enabled] | <code>Boolean</code> | <code>true</code> | Whether the event is enabled or not |

