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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31240" onclick="CopyToClipboard('tag31240');return false;" class="tag-decoration">release</div><div id="tag4052" onclick="CopyToClipboard('tag4052');return false;" class="tag-decoration">release-8b6e68e</div><div id="tag28974" onclick="CopyToClipboard('tag28974');return false;" class="tag-decoration">release-0.24.3014</div><div id="tag5900" onclick="CopyToClipboard('tag5900');return false;" class="tag-decoration">release-v0</div><div id="tag1299" onclick="CopyToClipboard('tag1299');return false;" class="tag-decoration">release-v0.24</div><div id="tag3941" onclick="CopyToClipboard('tag3941');return false;" class="tag-decoration">release-v0.24.3014</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8b6e68e0982ed3970e09f9a5de8281456406f8db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42069996916" target="_blank">2026-11-05 16:58:36</a></td></tr>
<tr><td><div id="tag18685" onclick="CopyToClipboard('tag18685');return false;" class="tag-decoration">testing</div><div id="tag5993" onclick="CopyToClipboard('tag5993');return false;" class="tag-decoration">testing-896b90f</div><div id="tag21352" onclick="CopyToClipboard('tag21352');return false;" class="tag-decoration">testing-0.24.3014</div><div id="tag26878" onclick="CopyToClipboard('tag26878');return false;" class="tag-decoration">testing-v0</div><div id="tag25456" onclick="CopyToClipboard('tag25456');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29575" onclick="CopyToClipboard('tag29575');return false;" class="tag-decoration">testing-v0.24.3014</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/896b90fa416038cbdfb4f37433111bd525a3f928" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42069990758" target="_blank">2026-11-05 16:58:33</a></td></tr>
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
