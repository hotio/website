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
<tr><td><div id="tag18897" onclick="CopyToClipboard('tag18897');return false;" class="tag-decoration">nightly</div><div id="tag21233" onclick="CopyToClipboard('tag21233');return false;" class="tag-decoration">nightly-4e0980e</div><div id="tag6509" onclick="CopyToClipboard('tag6509');return false;" class="tag-decoration">nightly-1.5.6-beta.8</div><div id="tag3324" onclick="CopyToClipboard('tag3324');return false;" class="tag-decoration">nightly-v1</div><div id="tag777" onclick="CopyToClipboard('tag777');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag27232" onclick="CopyToClipboard('tag27232');return false;" class="tag-decoration">nightly-v1.5.6</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4e0980e1765b7da7322b731245fb73ef37cdd591" target="_blank">Version update: 1.5.6-beta.7 => 1.5.6-beta.8</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21937215251" target="_blank">2026-02-12 07:17:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32254" onclick="CopyToClipboard('tag32254');return false;" class="tag-decoration">release</div><div id="tag32375" onclick="CopyToClipboard('tag32375');return false;" class="tag-decoration">release-c06938f</div><div id="tag21540" onclick="CopyToClipboard('tag21540');return false;" class="tag-decoration">release-1.5.5</div><div id="tag22519" onclick="CopyToClipboard('tag22519');return false;" class="tag-decoration">release-v1</div><div id="tag735" onclick="CopyToClipboard('tag735');return false;" class="tag-decoration">release-v1.5</div><div id="tag11803" onclick="CopyToClipboard('tag11803');return false;" class="tag-decoration">release-v1.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c06938f0ad30d6084ac6d8605513ea7ab7bc40d6" target="_blank">Version update: 1.5.4 => 1.5.5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21568319983" target="_blank">2026-02-01 18:51:09</a></td></tr>
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
