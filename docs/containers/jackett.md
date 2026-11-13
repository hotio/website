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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18027" onclick="CopyToClipboard('tag18027');return false;" class="tag-decoration">release</div><div id="tag20315" onclick="CopyToClipboard('tag20315');return false;" class="tag-decoration">release-b5b6053</div><div id="tag31926" onclick="CopyToClipboard('tag31926');return false;" class="tag-decoration">release-0.24.3055</div><div id="tag17310" onclick="CopyToClipboard('tag17310');return false;" class="tag-decoration">release-v0</div><div id="tag29736" onclick="CopyToClipboard('tag29736');return false;" class="tag-decoration">release-v0.24</div><div id="tag7705" onclick="CopyToClipboard('tag7705');return false;" class="tag-decoration">release-v0.24.3055</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b5b605392e0cebba856f65d404374586f4587932" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/43427691462" target="_blank">2026-11-13 12:44:10</a></td></tr>
<tr><td><div id="tag1287" onclick="CopyToClipboard('tag1287');return false;" class="tag-decoration">testing</div><div id="tag32677" onclick="CopyToClipboard('tag32677');return false;" class="tag-decoration">testing-db865c3</div><div id="tag18235" onclick="CopyToClipboard('tag18235');return false;" class="tag-decoration">testing-0.24.3055</div><div id="tag26693" onclick="CopyToClipboard('tag26693');return false;" class="tag-decoration">testing-v0</div><div id="tag29750" onclick="CopyToClipboard('tag29750');return false;" class="tag-decoration">testing-v0.24</div><div id="tag20491" onclick="CopyToClipboard('tag20491');return false;" class="tag-decoration">testing-v0.24.3055</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/db865c3308909aed6c4af8ed3f8295c80c532f8d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/43427696566" target="_blank">2026-11-13 12:44:12</a></td></tr>
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
