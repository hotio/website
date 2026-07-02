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
<tr><td><div id="tag16008" onclick="CopyToClipboard('tag16008');return false;" class="tag-decoration">nightly</div><div id="tag17971" onclick="CopyToClipboard('tag17971');return false;" class="tag-decoration">nightly-d0415ad</div><div id="tag12326" onclick="CopyToClipboard('tag12326');return false;" class="tag-decoration">nightly-1.5.7-beta.68</div><div id="tag23860" onclick="CopyToClipboard('tag23860');return false;" class="tag-decoration">nightly-v1</div><div id="tag2464" onclick="CopyToClipboard('tag2464');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag19849" onclick="CopyToClipboard('tag19849');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/d0415ad23512aa8c006036a221e84948bb594379" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28596404554" target="_blank">2026-07-02 14:07:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17154" onclick="CopyToClipboard('tag17154');return false;" class="tag-decoration">release</div><div id="tag24901" onclick="CopyToClipboard('tag24901');return false;" class="tag-decoration">release-8cb189c</div><div id="tag25410" onclick="CopyToClipboard('tag25410');return false;" class="tag-decoration">release-1.5.6</div><div id="tag21655" onclick="CopyToClipboard('tag21655');return false;" class="tag-decoration">release-v1</div><div id="tag20795" onclick="CopyToClipboard('tag20795');return false;" class="tag-decoration">release-v1.5</div><div id="tag12673" onclick="CopyToClipboard('tag12673');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/8cb189c4eb29abbd4643448bbf74bd2e6040d877" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28596398585" target="_blank">2026-07-02 14:07:17</a></td></tr>
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
