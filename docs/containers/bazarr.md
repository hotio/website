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
<tr><td><div id="tag4544" onclick="CopyToClipboard('tag4544');return false;" class="tag-decoration">nightly</div><div id="tag7365" onclick="CopyToClipboard('tag7365');return false;" class="tag-decoration">nightly-5811790</div><div id="tag11701" onclick="CopyToClipboard('tag11701');return false;" class="tag-decoration">nightly-1.5.5-beta.10</div><div id="tag27085" onclick="CopyToClipboard('tag27085');return false;" class="tag-decoration">nightly-v1</div><div id="tag13928" onclick="CopyToClipboard('tag13928');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag10550" onclick="CopyToClipboard('tag10550');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/5811790c7ad55b43310836ae21c5f6d37b164708" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21324835693" target="_blank">2026-01-25 01:32:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag446" onclick="CopyToClipboard('tag446');return false;" class="tag-decoration">release</div><div id="tag26528" onclick="CopyToClipboard('tag26528');return false;" class="tag-decoration">release-c926be2</div><div id="tag13616" onclick="CopyToClipboard('tag13616');return false;" class="tag-decoration">release-1.5.4</div><div id="tag22339" onclick="CopyToClipboard('tag22339');return false;" class="tag-decoration">release-v1</div><div id="tag19878" onclick="CopyToClipboard('tag19878');return false;" class="tag-decoration">release-v1.5</div><div id="tag22393" onclick="CopyToClipboard('tag22393');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c926be26fd8c0bfba0b2972d7c05d84234a07616" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21324835926" target="_blank">2026-01-25 01:32:30</a></td></tr>
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
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
