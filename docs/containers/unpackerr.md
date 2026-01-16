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
<tr><td><div id="tag4317" onclick="CopyToClipboard('tag4317');return false;" class="tag-decoration">nightly</div><div id="tag767" onclick="CopyToClipboard('tag767');return false;" class="tag-decoration">nightly-3b6c2cd</div><div id="tag25795" onclick="CopyToClipboard('tag25795');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/3b6c2cd61f0c0cd54280120ed6c0798d1dd50e97" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21060556420" target="_blank">2026-01-16 08:34:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29835" onclick="CopyToClipboard('tag29835');return false;" class="tag-decoration">release</div><div id="tag25604" onclick="CopyToClipboard('tag25604');return false;" class="tag-decoration">release-6dd54e6</div><div id="tag16040" onclick="CopyToClipboard('tag16040');return false;" class="tag-decoration">release-0.14.5</div><div id="tag444" onclick="CopyToClipboard('tag444');return false;" class="tag-decoration">release-v0</div><div id="tag30368" onclick="CopyToClipboard('tag30368');return false;" class="tag-decoration">release-v0.14</div><div id="tag13425" onclick="CopyToClipboard('tag13425');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6dd54e629f57c0d2e30b7278f2578461337e4964" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21059659842" target="_blank">2026-01-16 07:55:54</a></td></tr>
<tr><td><div id="tag22329" onclick="CopyToClipboard('tag22329');return false;" class="tag-decoration">testing</div><div id="tag21497" onclick="CopyToClipboard('tag21497');return false;" class="tag-decoration">testing-26d4ac6</div><div id="tag19456" onclick="CopyToClipboard('tag19456');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag21651" onclick="CopyToClipboard('tag21651');return false;" class="tag-decoration">testing-v0</div><div id="tag1878" onclick="CopyToClipboard('tag1878');return false;" class="tag-decoration">testing-v0.14</div><div id="tag12474" onclick="CopyToClipboard('tag12474');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/26d4ac60c5837ee2c321e8dff50a876886cfd264" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21059660130" target="_blank">2026-01-16 07:55:55</a></td></tr>
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
