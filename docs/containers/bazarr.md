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
<tr><td><div id="tag29790" onclick="CopyToClipboard('tag29790');return false;" class="tag-decoration">nightly</div><div id="tag18810" onclick="CopyToClipboard('tag18810');return false;" class="tag-decoration">nightly-98581ec</div><div id="tag7338" onclick="CopyToClipboard('tag7338');return false;" class="tag-decoration">nightly-1.5.7-beta.48</div><div id="tag20802" onclick="CopyToClipboard('tag20802');return false;" class="tag-decoration">nightly-v1</div><div id="tag13032" onclick="CopyToClipboard('tag13032');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5727" onclick="CopyToClipboard('tag5727');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/98581ecfd07dd45683444c69da780cbceac8f6ba" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26707467412" target="_blank">2026-05-31 08:16:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15956" onclick="CopyToClipboard('tag15956');return false;" class="tag-decoration">release</div><div id="tag767" onclick="CopyToClipboard('tag767');return false;" class="tag-decoration">release-698169f</div><div id="tag8925" onclick="CopyToClipboard('tag8925');return false;" class="tag-decoration">release-1.5.6</div><div id="tag2042" onclick="CopyToClipboard('tag2042');return false;" class="tag-decoration">release-v1</div><div id="tag15914" onclick="CopyToClipboard('tag15914');return false;" class="tag-decoration">release-v1.5</div><div id="tag28517" onclick="CopyToClipboard('tag28517');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/698169f75c3a01bdd39000c65a5df16418a8a08e" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26680256014" target="_blank">2026-05-30 09:21:03</a></td></tr>
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
