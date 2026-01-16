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
<tr><td><div id="tag18352" onclick="CopyToClipboard('tag18352');return false;" class="tag-decoration">nightly</div><div id="tag20333" onclick="CopyToClipboard('tag20333');return false;" class="tag-decoration">nightly-3b6c2cd</div><div id="tag32142" onclick="CopyToClipboard('tag32142');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/3b6c2cd61f0c0cd54280120ed6c0798d1dd50e97" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21060556420" target="_blank">2026-01-16 08:34:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15655" onclick="CopyToClipboard('tag15655');return false;" class="tag-decoration">release</div><div id="tag11431" onclick="CopyToClipboard('tag11431');return false;" class="tag-decoration">release-6447598</div><div id="tag27876" onclick="CopyToClipboard('tag27876');return false;" class="tag-decoration">release-0.14.5</div><div id="tag22362" onclick="CopyToClipboard('tag22362');return false;" class="tag-decoration">release-v0</div><div id="tag23419" onclick="CopyToClipboard('tag23419');return false;" class="tag-decoration">release-v0.14</div><div id="tag5844" onclick="CopyToClipboard('tag5844');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6447598fddd537e56cb42b3f65cb4d44b4feea86" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21060556879" target="_blank">2026-01-16 08:34:13</a></td></tr>
<tr><td><div id="tag23401" onclick="CopyToClipboard('tag23401');return false;" class="tag-decoration">testing</div><div id="tag30518" onclick="CopyToClipboard('tag30518');return false;" class="tag-decoration">testing-d080ee6</div><div id="tag20848" onclick="CopyToClipboard('tag20848');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag26412" onclick="CopyToClipboard('tag26412');return false;" class="tag-decoration">testing-v0</div><div id="tag3273" onclick="CopyToClipboard('tag3273');return false;" class="tag-decoration">testing-v0.14</div><div id="tag108" onclick="CopyToClipboard('tag108');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d080ee665effd4389accab85ee0466e454dfb532" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21060557103" target="_blank">2026-01-16 08:34:14</a></td></tr>
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
