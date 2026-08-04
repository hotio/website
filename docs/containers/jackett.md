---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31566" onclick="CopyToClipboard('tag31566');return false;" class="tag-decoration">release</div><div id="tag20366" onclick="CopyToClipboard('tag20366');return false;" class="tag-decoration">release-7e885ae</div><div id="tag11210" onclick="CopyToClipboard('tag11210');return false;" class="tag-decoration">release-0.24.2327</div><div id="tag26481" onclick="CopyToClipboard('tag26481');return false;" class="tag-decoration">release-v0</div><div id="tag29882" onclick="CopyToClipboard('tag29882');return false;" class="tag-decoration">release-v0.24</div><div id="tag931" onclick="CopyToClipboard('tag931');return false;" class="tag-decoration">release-v0.24.2327</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7e885aeb5f6fcc9f7c42c41cf86a68ccfb4acdb3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30888202353" target="_blank">2026-08-04 07:32:07</a></td></tr>
<tr><td><div id="tag1450" onclick="CopyToClipboard('tag1450');return false;" class="tag-decoration">testing</div><div id="tag32385" onclick="CopyToClipboard('tag32385');return false;" class="tag-decoration">testing-e7677c7</div><div id="tag3090" onclick="CopyToClipboard('tag3090');return false;" class="tag-decoration">testing-0.24.2327</div><div id="tag25377" onclick="CopyToClipboard('tag25377');return false;" class="tag-decoration">testing-v0</div><div id="tag15248" onclick="CopyToClipboard('tag15248');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11235" onclick="CopyToClipboard('tag11235');return false;" class="tag-decoration">testing-v0.24.2327</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e7677c770892a6f6905a27308b2e7cd6310f939f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30888202232" target="_blank">2026-08-04 07:32:06</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
