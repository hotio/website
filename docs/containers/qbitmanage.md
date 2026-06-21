---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29893" onclick="CopyToClipboard('tag29893');return false;" class="tag-decoration">nightly</div><div id="tag17982" onclick="CopyToClipboard('tag17982');return false;" class="tag-decoration">nightly-6e126c8</div><div id="tag13564" onclick="CopyToClipboard('tag13564');return false;" class="tag-decoration">nightly-405aae6be4394f12e19d3180672afe0dd9a52544</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/6e126c874201f074e64b300e4027d4e8a5f1c84a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27914893902" target="_blank">2026-06-21 19:22:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29940" onclick="CopyToClipboard('tag29940');return false;" class="tag-decoration">release</div><div id="tag2768" onclick="CopyToClipboard('tag2768');return false;" class="tag-decoration">release-9788c06</div><div id="tag12130" onclick="CopyToClipboard('tag12130');return false;" class="tag-decoration">release-4.8.1</div><div id="tag12035" onclick="CopyToClipboard('tag12035');return false;" class="tag-decoration">release-v4</div><div id="tag14958" onclick="CopyToClipboard('tag14958');return false;" class="tag-decoration">release-v4.8</div><div id="tag9564" onclick="CopyToClipboard('tag9564');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/9788c0673a00555524ff54656f7fa30c340d8a9d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27914893943" target="_blank">2026-06-21 19:22:37</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
