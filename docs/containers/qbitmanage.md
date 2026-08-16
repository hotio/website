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
<tr><td><div id="tag31878" onclick="CopyToClipboard('tag31878');return false;" class="tag-decoration">nightly</div><div id="tag3474" onclick="CopyToClipboard('tag3474');return false;" class="tag-decoration">nightly-65519fa</div><div id="tag13162" onclick="CopyToClipboard('tag13162');return false;" class="tag-decoration">nightly-4c658fd8f8936bc81236ee7562d0abdd7220e611</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/65519fa5334b1fac999f44232dd9952d7af6c4eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/31918438685" target="_blank">2026-08-16 00:57:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4462" onclick="CopyToClipboard('tag4462');return false;" class="tag-decoration">release</div><div id="tag23152" onclick="CopyToClipboard('tag23152');return false;" class="tag-decoration">release-de52965</div><div id="tag26201" onclick="CopyToClipboard('tag26201');return false;" class="tag-decoration">release-4.12.0</div><div id="tag38" onclick="CopyToClipboard('tag38');return false;" class="tag-decoration">release-v4</div><div id="tag17245" onclick="CopyToClipboard('tag17245');return false;" class="tag-decoration">release-v4.12</div><div id="tag2821" onclick="CopyToClipboard('tag2821');return false;" class="tag-decoration">release-v4.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/de52965bcc74cd0f855357d1c6e9f4899fa8657b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/31918436850" target="_blank">2026-08-16 00:57:00</a></td></tr>
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
