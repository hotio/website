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
<tr><td><div id="tag5524" onclick="CopyToClipboard('tag5524');return false;" class="tag-decoration">nightly</div><div id="tag25160" onclick="CopyToClipboard('tag25160');return false;" class="tag-decoration">nightly-65371d3</div><div id="tag25583" onclick="CopyToClipboard('tag25583');return false;" class="tag-decoration">nightly-4800bbe16c0a5f57eb4651a6a77cebd40f5a02cc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/65371d3f6694e7b22b50b116431770909127abd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29360791806" target="_blank">2026-07-14 19:10:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20536" onclick="CopyToClipboard('tag20536');return false;" class="tag-decoration">release</div><div id="tag24425" onclick="CopyToClipboard('tag24425');return false;" class="tag-decoration">release-7f1145f</div><div id="tag25335" onclick="CopyToClipboard('tag25335');return false;" class="tag-decoration">release-4.9.1</div><div id="tag30953" onclick="CopyToClipboard('tag30953');return false;" class="tag-decoration">release-v4</div><div id="tag27703" onclick="CopyToClipboard('tag27703');return false;" class="tag-decoration">release-v4.9</div><div id="tag30108" onclick="CopyToClipboard('tag30108');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/7f1145fa2ac1a58eeb4d878ee0b23a1648e757c5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29360793373" target="_blank">2026-07-14 19:10:13</a></td></tr>
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
