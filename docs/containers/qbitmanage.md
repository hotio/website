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
<tr><td><div id="tag18580" onclick="CopyToClipboard('tag18580');return false;" class="tag-decoration">nightly</div><div id="tag27794" onclick="CopyToClipboard('tag27794');return false;" class="tag-decoration">nightly-ff247c9</div><div id="tag14495" onclick="CopyToClipboard('tag14495');return false;" class="tag-decoration">nightly-e6d172c0f862ade1856c10f4e5747b181218c262</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/ff247c9d84f26db1bb718ce8034c939d26ebe329" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39100145876" target="_blank">2026-10-18 05:19:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12135" onclick="CopyToClipboard('tag12135');return false;" class="tag-decoration">release</div><div id="tag24985" onclick="CopyToClipboard('tag24985');return false;" class="tag-decoration">release-1e78925</div><div id="tag15613" onclick="CopyToClipboard('tag15613');return false;" class="tag-decoration">release-4.14.0</div><div id="tag20398" onclick="CopyToClipboard('tag20398');return false;" class="tag-decoration">release-v4</div><div id="tag27734" onclick="CopyToClipboard('tag27734');return false;" class="tag-decoration">release-v4.14</div><div id="tag19416" onclick="CopyToClipboard('tag19416');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1e78925e19999ff484e010bd38041d80d9b3f9aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39100138522" target="_blank">2026-10-18 05:19:07</a></td></tr>
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
