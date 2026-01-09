---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag9478" onclick="CopyToClipboard('tag9478');return false;" class="tag-decoration">nightly</div><div id="tag22721" onclick="CopyToClipboard('tag22721');return false;" class="tag-decoration">nightly-1.5.5-beta.2</div><div id="tag28216" onclick="CopyToClipboard('tag28216');return false;" class="tag-decoration">nightly-32bbe50</div><div id="tag11893" onclick="CopyToClipboard('tag11893');return false;" class="tag-decoration">nightly-v1</div><div id="tag1600" onclick="CopyToClipboard('tag1600');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag31474" onclick="CopyToClipboard('tag31474');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/32bbe50f5e3c6852932507039d4d4ea1ad563d18" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20842467465" target="_blank">2026-01-09 05:40:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2790" onclick="CopyToClipboard('tag2790');return false;" class="tag-decoration">release</div><div id="tag30355" onclick="CopyToClipboard('tag30355');return false;" class="tag-decoration">release-1.5.4</div><div id="tag20391" onclick="CopyToClipboard('tag20391');return false;" class="tag-decoration">release-83dfab7</div><div id="tag22117" onclick="CopyToClipboard('tag22117');return false;" class="tag-decoration">release-v1</div><div id="tag22989" onclick="CopyToClipboard('tag22989');return false;" class="tag-decoration">release-v1.5</div><div id="tag19057" onclick="CopyToClipboard('tag19057');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/83dfab7365dda7606d9f9eb58546d36d9e2239f0" target="_blank">enable arm64 smoketest</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20838191745" target="_blank">2026-01-09 01:37:47</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
