---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23897" onclick="CopyToClipboard('tag23897');return false;" class="tag-decoration">nightly</div><div id="tag11285" onclick="CopyToClipboard('tag11285');return false;" class="tag-decoration">nightly-17804bf</div><div id="tag22276" onclick="CopyToClipboard('tag22276');return false;" class="tag-decoration">nightly-6.4.4.10684</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/17804bf2886dc547f56964e3d70aa696dd006165" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34734136989" target="_blank">2026-09-13 02:53:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22633" onclick="CopyToClipboard('tag22633');return false;" class="tag-decoration">release</div><div id="tag18939" onclick="CopyToClipboard('tag18939');return false;" class="tag-decoration">release-e5b3580</div><div id="tag5030" onclick="CopyToClipboard('tag5030');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/e5b3580eafe7c0ff3368ef777419e128194d2675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34960656170" target="_blank">2026-09-15 10:57:10</a></td></tr>
<tr><td><div id="tag16025" onclick="CopyToClipboard('tag16025');return false;" class="tag-decoration">testing</div><div id="tag14591" onclick="CopyToClipboard('tag14591');return false;" class="tag-decoration">testing-ce3b95d</div><div id="tag3394" onclick="CopyToClipboard('tag3394');return false;" class="tag-decoration">testing-6.4.4.10684</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/ce3b95d06a52f126b70314ace49b9313d6581236" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34875435206" target="_blank">2026-09-14 17:33:05</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
