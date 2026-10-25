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
<tr><td><div id="tag25206" onclick="CopyToClipboard('tag25206');return false;" class="tag-decoration">nightly</div><div id="tag5145" onclick="CopyToClipboard('tag5145');return false;" class="tag-decoration">nightly-74ec955</div><div id="tag5289" onclick="CopyToClipboard('tag5289');return false;" class="tag-decoration">nightly-1.6.3-beta.20</div><div id="tag5893" onclick="CopyToClipboard('tag5893');return false;" class="tag-decoration">nightly-v1</div><div id="tag7365" onclick="CopyToClipboard('tag7365');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag21965" onclick="CopyToClipboard('tag21965');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/74ec9551ee73ad0810f8e6409949b24a5e779ee3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40222880535" target="_blank">2026-10-25 18:46:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag131" onclick="CopyToClipboard('tag131');return false;" class="tag-decoration">release</div><div id="tag5473" onclick="CopyToClipboard('tag5473');return false;" class="tag-decoration">release-a17d298</div><div id="tag26089" onclick="CopyToClipboard('tag26089');return false;" class="tag-decoration">release-1.6.2</div><div id="tag19067" onclick="CopyToClipboard('tag19067');return false;" class="tag-decoration">release-v1</div><div id="tag10610" onclick="CopyToClipboard('tag10610');return false;" class="tag-decoration">release-v1.6</div><div id="tag15805" onclick="CopyToClipboard('tag15805');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a17d298dbc7f927ec3e75c72617efc7dfa35a0f3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40086215940" target="_blank">2026-10-24 10:30:52</a></td></tr>
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
