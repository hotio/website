---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag20691" onclick="CopyToClipboard('tag20691');return false;" class="tag-decoration">nightly</div><div id="tag26531" onclick="CopyToClipboard('tag26531');return false;" class="tag-decoration">nightly-c00f197</div><div id="tag29449" onclick="CopyToClipboard('tag29449');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/c00f1979ef40ad2264844a2978a57e034ff8d184" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28976295916" target="_blank">2026-07-08 21:15:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27260" onclick="CopyToClipboard('tag27260');return false;" class="tag-decoration">release</div><div id="tag30799" onclick="CopyToClipboard('tag30799');return false;" class="tag-decoration">release-4c4483a</div><div id="tag25687" onclick="CopyToClipboard('tag25687');return false;" class="tag-decoration">release-0.15.2</div><div id="tag17869" onclick="CopyToClipboard('tag17869');return false;" class="tag-decoration">release-v0</div><div id="tag16528" onclick="CopyToClipboard('tag16528');return false;" class="tag-decoration">release-v0.15</div><div id="tag15615" onclick="CopyToClipboard('tag15615');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4c4483a9197c0ebaae8dbecf47c3b70a621c41c2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28796719491" target="_blank">2026-07-06 13:53:06</a></td></tr>
<tr><td><div id="tag3941" onclick="CopyToClipboard('tag3941');return false;" class="tag-decoration">testing</div><div id="tag6231" onclick="CopyToClipboard('tag6231');return false;" class="tag-decoration">testing-c90ff05</div><div id="tag30605" onclick="CopyToClipboard('tag30605');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag22012" onclick="CopyToClipboard('tag22012');return false;" class="tag-decoration">testing-v0</div><div id="tag23690" onclick="CopyToClipboard('tag23690');return false;" class="tag-decoration">testing-v0.15</div><div id="tag17442" onclick="CopyToClipboard('tag17442');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/c90ff05d4f177653adfa0b394fa5a394cdd514ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28976297576" target="_blank">2026-07-08 21:15:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
