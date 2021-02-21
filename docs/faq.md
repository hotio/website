---
hide:
  - navigation
---

<img src="/img/pullio-i-am-here.png" alt="i'm here" width="674" height="168">

## Troubleshooting

??? question "Someone asked you for a 'docker-compose' snippet...How do you give them that?"

    If you are not using `docker-compose` that can sound like a daunting task. Have no fear though, the following cli command spits it out.

    ```shell
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro red5d/docker-autocompose <container-name-or-id> [<additional-names-or-ids>]
    ```

    Now you should upload this to something like [hastebin.com](https://hastebin.com){: target=_blank }, [pastebin.com](https://pastebin.com){: target=_blank }, [github.com](https://gist.github.com/){: target=_blank } or any other site that provides easy sharing of text files.

    If you are sure that there's no personal information to be seen, you can also use the command below and provide them the link.

    ```shell
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro red5d/docker-autocompose <container-name-or-id> [<additional-names-or-ids>] | curl -H "x-uuid;" --upload-file - 'https://paste.c-net.org/'
    ```

## Installation

??? question "How do I install 'docker-compose' on my machine?"

    There's all sorts of ways to do this, here we are going to pick the easy way. The following commands will download and install a wrapper script that uses the docker image `linuxserver/docker-compose`.

    ```shell
    sudo curl -fsSL https://raw.githubusercontent.com/linuxserver/docker-docker-compose/master/run.sh > /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    ```

    Now you should be able to do `docker-compose --version` as if it were natively installed. This script doesn't pull for the latest image though everytime it runs, so it might be a good idea to once in a while purge the image. It'll then pull a new one the next time it runs.

??? question "Installing Docker, how and where?"

    I'd have a look at the official [Docker Engine](https://docs.docker.com/engine/install/){: target=_blank } installation instructions.

## Guides

??? question "Got any Docker guides?"

    Take a look [here](https://wiki.servarr.com/Docker_Guide){: target=_blank } for an extensive guide on best practises from the *arr team.

??? question "But, but, how do I configure all this stuff?"

    Maybe TRaSH from [TRaSH Guides](https://trash-guides.info){: target=_blank } can help...
