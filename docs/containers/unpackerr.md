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
<tr><td><div id="tag27700" onclick="CopyToClipboard('tag27700');return false;" class="tag-decoration">nightly</div><div id="tag19683" onclick="CopyToClipboard('tag19683');return false;" class="tag-decoration">nightly-c00f197</div><div id="tag14329" onclick="CopyToClipboard('tag14329');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/c00f1979ef40ad2264844a2978a57e034ff8d184" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28976295916" target="_blank">2026-07-08 21:15:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1977" onclick="CopyToClipboard('tag1977');return false;" class="tag-decoration">release</div><div id="tag29356" onclick="CopyToClipboard('tag29356');return false;" class="tag-decoration">release-483927d</div><div id="tag8687" onclick="CopyToClipboard('tag8687');return false;" class="tag-decoration">release-0.15.2</div><div id="tag883" onclick="CopyToClipboard('tag883');return false;" class="tag-decoration">release-v0</div><div id="tag16154" onclick="CopyToClipboard('tag16154');return false;" class="tag-decoration">release-v0.15</div><div id="tag25672" onclick="CopyToClipboard('tag25672');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/483927d8dfebf241cbdec01072782d8ac6840349" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29310945397" target="_blank">2026-07-14 06:18:06</a></td></tr>
<tr><td><div id="tag16179" onclick="CopyToClipboard('tag16179');return false;" class="tag-decoration">testing</div><div id="tag10436" onclick="CopyToClipboard('tag10436');return false;" class="tag-decoration">testing-a24e59a</div><div id="tag4078" onclick="CopyToClipboard('tag4078');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag26843" onclick="CopyToClipboard('tag26843');return false;" class="tag-decoration">testing-v0</div><div id="tag31620" onclick="CopyToClipboard('tag31620');return false;" class="tag-decoration">testing-v0.15</div><div id="tag11735" onclick="CopyToClipboard('tag11735');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/a24e59a9140ef0570bd7653417f413c061600973" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29310944809" target="_blank">2026-07-14 06:18:06</a></td></tr>
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
