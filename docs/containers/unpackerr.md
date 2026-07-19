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
<tr><td><div id="tag7275" onclick="CopyToClipboard('tag7275');return false;" class="tag-decoration">nightly</div><div id="tag13069" onclick="CopyToClipboard('tag13069');return false;" class="tag-decoration">nightly-0f4b60f</div><div id="tag12545" onclick="CopyToClipboard('tag12545');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/0f4b60f87d7a0145170783c982aed1ad8421e478" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29681479678" target="_blank">2026-07-19 09:23:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32106" onclick="CopyToClipboard('tag32106');return false;" class="tag-decoration">release</div><div id="tag6252" onclick="CopyToClipboard('tag6252');return false;" class="tag-decoration">release-de93ecf</div><div id="tag5933" onclick="CopyToClipboard('tag5933');return false;" class="tag-decoration">release-0.15.2</div><div id="tag15528" onclick="CopyToClipboard('tag15528');return false;" class="tag-decoration">release-v0</div><div id="tag22053" onclick="CopyToClipboard('tag22053');return false;" class="tag-decoration">release-v0.15</div><div id="tag30921" onclick="CopyToClipboard('tag30921');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/de93ecfb9536c54b149d6e4e7d3e4d8e95e94ee4" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29681475711" target="_blank">2026-07-19 09:22:56</a></td></tr>
<tr><td><div id="tag13383" onclick="CopyToClipboard('tag13383');return false;" class="tag-decoration">testing</div><div id="tag18182" onclick="CopyToClipboard('tag18182');return false;" class="tag-decoration">testing-6f006a7</div><div id="tag12441" onclick="CopyToClipboard('tag12441');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag7452" onclick="CopyToClipboard('tag7452');return false;" class="tag-decoration">testing-v0</div><div id="tag19912" onclick="CopyToClipboard('tag19912');return false;" class="tag-decoration">testing-v0.15</div><div id="tag15034" onclick="CopyToClipboard('tag15034');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6f006a7a268e8ccd3651f43ea006d3fe4d31bc56" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29681471278" target="_blank">2026-07-19 09:22:46</a></td></tr>
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
