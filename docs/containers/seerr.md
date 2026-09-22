---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag10665" onclick="CopyToClipboard('tag10665');return false;" class="tag-decoration">nightly</div><div id="tag1072" onclick="CopyToClipboard('tag1072');return false;" class="tag-decoration">nightly-6b09d37</div><div id="tag12605" onclick="CopyToClipboard('tag12605');return false;" class="tag-decoration">nightly-794743a45f17e3d6aba06d68e1716e8b15146673</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/6b09d3742d1a755cf14836d50f5a40dbde81efeb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35669859384" target="_blank">2026-09-21 23:57:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3996" onclick="CopyToClipboard('tag3996');return false;" class="tag-decoration">release</div><div id="tag761" onclick="CopyToClipboard('tag761');return false;" class="tag-decoration">release-6fe2059</div><div id="tag25022" onclick="CopyToClipboard('tag25022');return false;" class="tag-decoration">release-3.4.1</div><div id="tag30123" onclick="CopyToClipboard('tag30123');return false;" class="tag-decoration">release-v3</div><div id="tag8039" onclick="CopyToClipboard('tag8039');return false;" class="tag-decoration">release-v3.4</div><div id="tag5186" onclick="CopyToClipboard('tag5186');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/6fe205908b298ce010b34266c624b500a5da3c07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35378761782" target="_blank">2026-09-18 18:11:53</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
