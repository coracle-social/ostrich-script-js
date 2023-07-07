# OstrichScript

OstrichScript is a convention for extending nostr clients with user-defined functionality.
Extensions are written in lua so that they are easy to write, and easy to sandbox in any client.

The basic idea is that a script can export any number of functions which can then be called from
javascript to augment a client's functionality with highly customized user scripts.

You can learn lua by following along with [programming in lua](https://www.lua.org/pil/contents.html).

You can write, edit, publish, and delete extensions using [Ostrich Editor]().

# Interface

A script may export any of the following functions:

```
filterEvent(event: NostrEvent): boolean
```

Functions are expected to be synchronous, but are awaited by this library.

# Implementations

Currently OstricScript is implemented in the following clients:

(none yet)


