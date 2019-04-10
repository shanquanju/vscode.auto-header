# auto-header

This extension allows **quickly add file header** in the active text editor.
And also allows **update the modify time and modifier automatic** in the file header comments 

## Changelog

### 1.0.0
* Support quickly add file header from the command palette `Ctrl`-`Alt`-`I` (Windows, Linux) or `Cmd`-`Alt`-`I` (OSX)
* Support update the modify time and modifier automatic when the file did save

## Installation

1. Install Visual Studio Code 1.1.0 or higher
2. Launch Code
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Type `auto-header` and press enter
6. Reload Visual Studio Code

# Config

* default config

```bash
"autoHeader": {
    "format": {
        "startWith": "/**",
        "middleWith": "*",
        "endWith": "*/",
        "headerPrefix": "@",
    },
    "header": {
        "Author": "Your name",
        "Create Time": {
            "type": "createTime",
            "format": "YYYY-MM-DD HH:mm:ss",
        },
        "Modified by": {
            "type": "modifier",
            "value": "Your name",
        },
        "Modified time": {
            "type": "modifyTime",
            "format": "YYYY-MM-DD HH:mm:ss"
        },
        "Description": "",
    }
}
```

* support customer configuration

1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
2. Type the `Settings` to select and open Settings(JSON)
3. Add the configurations like this:
   
```bash
"autoHeader": {
    "format": {
        "startWith": "/**",
        "middleWith": "*",
        "endWith": "*/",
        "headerPrefix": "@",
    },
    "header": {
        "Author": "Daniel Lin",
        "Create Time": {
            "type": "createTime",
            "format": "YYYY-MM-DD HH:mm:ss",
        },
        "Modified by": {
            "type": "modifier",
            "value": "Daniel Lin",
        },
        "Modified time": {
            "type": "modifyTime",
            "format": "YYYY-MM-DD HH:mm:ss"
        },
        "Description": "",
    }
}
```
* Attribute: format
This attribute support to config [`startWith`, `middleWith`, `endWith`, `headerPrefix`] of the file header comments
It will use default configuration when it missing

* Attribute: header
This attribute support to config the file header template
It will use default configuration when it missing

* How to config the template in Attribute: header

This attribute of header use [`key`, `value`] to config the file header template
The value of each attribute can be a `string` or an `object`
If the value typeof `object`, it support type:

```bash
'createTime',
'modifyTime',
'modifier',
```

When you select [`createTime`, `modifyTime`], you can set the format of the time
If you are not setting the format of the time, it will use the format like `YYYY-MM-DD HH:mm:ss`

When you select [`modifier`], this attribute will use to update the `modifier` in the file header comments when the text editor did save

You can use [`key`, `value`] to add your customize file header templte
But the type of [`createTime`, `modifyTime`, `modifier`] can only be used once

# License

MIT
