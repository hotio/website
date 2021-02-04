
## Configuration location

For the most part your configuration inside the container is stored in `/config/app`, to migrate from another container, you'd probably have to move your files from `/config` to `/config/app`. This is mostly true for the images that use `s6 overlay`. For the images that are to be used as if they are a cli app, it's up to you to decide/configure where the configuration ends up.
