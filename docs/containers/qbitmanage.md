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
<tr><td><div id="tag23425" onclick="CopyToClipboard('tag23425');return false;" class="tag-decoration">nightly</div><div id="tag21675" onclick="CopyToClipboard('tag21675');return false;" class="tag-decoration">nightly-0859a84</div><div id="tag8716" onclick="CopyToClipboard('tag8716');return false;" class="tag-decoration">nightly-0ffbede1f32b791d45f08443c69e055952323553</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/0859a849396a5214b2a30b5c36f0860b3b8278e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40056201495" target="_blank">2026-10-24 02:55:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20065" onclick="CopyToClipboard('tag20065');return false;" class="tag-decoration">release</div><div id="tag9790" onclick="CopyToClipboard('tag9790');return false;" class="tag-decoration">release-bf04fed</div><div id="tag32551" onclick="CopyToClipboard('tag32551');return false;" class="tag-decoration">release-4.14.0</div><div id="tag26944" onclick="CopyToClipboard('tag26944');return false;" class="tag-decoration">release-v4</div><div id="tag3700" onclick="CopyToClipboard('tag3700');return false;" class="tag-decoration">release-v4.14</div><div id="tag23867" onclick="CopyToClipboard('tag23867');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/bf04fedff64a4f6652bf6f97e5513f6a406b2dc9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40075697619" target="_blank">2026-10-24 07:50:10</a></td></tr>
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
