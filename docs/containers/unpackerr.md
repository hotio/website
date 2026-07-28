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
<tr><td><div id="tag813" onclick="CopyToClipboard('tag813');return false;" class="tag-decoration">nightly</div><div id="tag1043" onclick="CopyToClipboard('tag1043');return false;" class="tag-decoration">nightly-07c71b6</div><div id="tag5723" onclick="CopyToClipboard('tag5723');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/07c71b6c33975747bb4066d8fb783fe70b99ba71" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/30373376881" target="_blank">2026-07-28 15:26:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4618" onclick="CopyToClipboard('tag4618');return false;" class="tag-decoration">release</div><div id="tag27606" onclick="CopyToClipboard('tag27606');return false;" class="tag-decoration">release-567ddeb</div><div id="tag32215" onclick="CopyToClipboard('tag32215');return false;" class="tag-decoration">release-0.15.2</div><div id="tag26753" onclick="CopyToClipboard('tag26753');return false;" class="tag-decoration">release-v0</div><div id="tag25390" onclick="CopyToClipboard('tag25390');return false;" class="tag-decoration">release-v0.15</div><div id="tag9129" onclick="CopyToClipboard('tag9129');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/567ddeb8b5979b16b678f8d93180365d92ac9c66" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/30373381207" target="_blank">2026-07-28 15:26:26</a></td></tr>
<tr><td><div id="tag9600" onclick="CopyToClipboard('tag9600');return false;" class="tag-decoration">testing</div><div id="tag14703" onclick="CopyToClipboard('tag14703');return false;" class="tag-decoration">testing-6f006a7</div><div id="tag8799" onclick="CopyToClipboard('tag8799');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag2152" onclick="CopyToClipboard('tag2152');return false;" class="tag-decoration">testing-v0</div><div id="tag9485" onclick="CopyToClipboard('tag9485');return false;" class="tag-decoration">testing-v0.15</div><div id="tag26401" onclick="CopyToClipboard('tag26401');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6f006a7a268e8ccd3651f43ea006d3fe4d31bc56" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29681471278" target="_blank">2026-07-19 09:22:46</a></td></tr>
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
