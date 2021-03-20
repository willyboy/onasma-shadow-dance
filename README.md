# Onasma Shadow Dance Hue Lights CLI

**WORK IN PROGRESS**

This tool is designed to help you recreate the visuals and videos from Onasma Shadow Dance's productions and social media posts.
You can see some of these on [Onasma's Instagram](https://instagram.com/onasmashadowdance).


## Getting Started

All instructions assume: a Hue lights setup, working knowledge of Git, and experience running commands in terminal.

(looking for contribution of documentation to help beginners).

1. Clone the repo
2. Navigate to the directory you cloned into
3. Run ```npm install```
4. Choose a scene or sequence to run. Scenes and sequences are listed in the comments of all social media posts.
5. Activate the scene or sequence by running the cli with the specified option.

As an example, if I wanted to run the open-arms scene, I would do:

```
node cli --scene=open-arms
```

Or if I wanted the can-you-hold-me sequence, I would do:

```
node cli --sequence=can-you-hold-me
```

**NOTE** The app does not currently detect the number of lights you have available. If you don't have enough lights to set a scene or run a sequence, you won't receive an error message.