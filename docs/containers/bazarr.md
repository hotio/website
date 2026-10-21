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
<tr><td><div id="tag24337" onclick="CopyToClipboard('tag24337');return false;" class="tag-decoration">nightly</div><div id="tag12122" onclick="CopyToClipboard('tag12122');return false;" class="tag-decoration">nightly-e2d370b</div><div id="tag19950" onclick="CopyToClipboard('tag19950');return false;" class="tag-decoration">nightly-1.6.3-beta.18</div><div id="tag6703" onclick="CopyToClipboard('tag6703');return false;" class="tag-decoration">nightly-v1</div><div id="tag2488" onclick="CopyToClipboard('tag2488');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag11484" onclick="CopyToClipboard('tag11484');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/e2d370b8ae492be852d2d848665b02e19ab7c9cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39560594852" target="_blank">2026-10-21 07:14:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21373" onclick="CopyToClipboard('tag21373');return false;" class="tag-decoration">release</div><div id="tag28420" onclick="CopyToClipboard('tag28420');return false;" class="tag-decoration">release-83dacb4</div><div id="tag20510" onclick="CopyToClipboard('tag20510');return false;" class="tag-decoration">release-1.6.2</div><div id="tag9036" onclick="CopyToClipboard('tag9036');return false;" class="tag-decoration">release-v1</div><div id="tag25101" onclick="CopyToClipboard('tag25101');return false;" class="tag-decoration">release-v1.6</div><div id="tag18455" onclick="CopyToClipboard('tag18455');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/83dacb4a286b7fa014a10266812a54533fad4253" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39653035081" target="_blank">2026-10-21 18:28:27</a></td></tr>
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
