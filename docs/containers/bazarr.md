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
<tr><td><div id="tag19721" onclick="CopyToClipboard('tag19721');return false;" class="tag-decoration">nightly</div><div id="tag31830" onclick="CopyToClipboard('tag31830');return false;" class="tag-decoration">nightly-9790c25</div><div id="tag16479" onclick="CopyToClipboard('tag16479');return false;" class="tag-decoration">nightly-1.5.5-beta.10</div><div id="tag21081" onclick="CopyToClipboard('tag21081');return false;" class="tag-decoration">nightly-v1</div><div id="tag25548" onclick="CopyToClipboard('tag25548');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag32018" onclick="CopyToClipboard('tag32018');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/9790c257cc7fe997e3cd5d936137b79373d4ff9b" target="_blank">Version update: 1.5.5-beta.9 => 1.5.5-beta.10</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21310832822" target="_blank">2026-01-24 06:38:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13107" onclick="CopyToClipboard('tag13107');return false;" class="tag-decoration">release</div><div id="tag30415" onclick="CopyToClipboard('tag30415');return false;" class="tag-decoration">release-2e3899b</div><div id="tag32667" onclick="CopyToClipboard('tag32667');return false;" class="tag-decoration">release-1.5.4</div><div id="tag19118" onclick="CopyToClipboard('tag19118');return false;" class="tag-decoration">release-v1</div><div id="tag25535" onclick="CopyToClipboard('tag25535');return false;" class="tag-decoration">release-v1.5</div><div id="tag17427" onclick="CopyToClipboard('tag17427');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2e3899b8345c03945a5f1445cc085bb456b8868f" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21246745705" target="_blank">2026-01-22 11:28:43</a></td></tr>
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
