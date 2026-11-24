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
<tr><td><div id="tag29503" onclick="CopyToClipboard('tag29503');return false;" class="tag-decoration">nightly</div><div id="tag21718" onclick="CopyToClipboard('tag21718');return false;" class="tag-decoration">nightly-1227fff</div><div id="tag12553" onclick="CopyToClipboard('tag12553');return false;" class="tag-decoration">nightly-1.6.3-beta.39</div><div id="tag12082" onclick="CopyToClipboard('tag12082');return false;" class="tag-decoration">nightly-v1</div><div id="tag23419" onclick="CopyToClipboard('tag23419');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag21358" onclick="CopyToClipboard('tag21358');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1227fff1248b1b577a4687955f6c10e440500938" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45331771207" target="_blank">2026-11-24 05:13:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28477" onclick="CopyToClipboard('tag28477');return false;" class="tag-decoration">release</div><div id="tag18081" onclick="CopyToClipboard('tag18081');return false;" class="tag-decoration">release-20e929f</div><div id="tag5118" onclick="CopyToClipboard('tag5118');return false;" class="tag-decoration">release-1.6.2</div><div id="tag7007" onclick="CopyToClipboard('tag7007');return false;" class="tag-decoration">release-v1</div><div id="tag6999" onclick="CopyToClipboard('tag6999');return false;" class="tag-decoration">release-v1.6</div><div id="tag9409" onclick="CopyToClipboard('tag9409');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/20e929f938d582662e98d270da3cb86872c5c0ea" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/44010492551" target="_blank">2026-11-17 03:28:44</a></td></tr>
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
