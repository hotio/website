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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8048" onclick="CopyToClipboard('tag8048');return false;" class="tag-decoration">release</div><div id="tag3089" onclick="CopyToClipboard('tag3089');return false;" class="tag-decoration">release-d67fe34</div><div id="tag9770" onclick="CopyToClipboard('tag9770');return false;" class="tag-decoration">release-0.24.2619</div><div id="tag6268" onclick="CopyToClipboard('tag6268');return false;" class="tag-decoration">release-v0</div><div id="tag5379" onclick="CopyToClipboard('tag5379');return false;" class="tag-decoration">release-v0.24</div><div id="tag12177" onclick="CopyToClipboard('tag12177');return false;" class="tag-decoration">release-v0.24.2619</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d67fe34e35bcb9df8b2d06cb059d38aa99c6360c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35321189697" target="_blank">2026-09-18 07:48:02</a></td></tr>
<tr><td><div id="tag20914" onclick="CopyToClipboard('tag20914');return false;" class="tag-decoration">testing</div><div id="tag1607" onclick="CopyToClipboard('tag1607');return false;" class="tag-decoration">testing-a509f83</div><div id="tag31337" onclick="CopyToClipboard('tag31337');return false;" class="tag-decoration">testing-0.24.2619</div><div id="tag22065" onclick="CopyToClipboard('tag22065');return false;" class="tag-decoration">testing-v0</div><div id="tag19861" onclick="CopyToClipboard('tag19861');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13478" onclick="CopyToClipboard('tag13478');return false;" class="tag-decoration">testing-v0.24.2619</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a509f831b7ae152ebd8dd8c993a7e4cc87b63d2f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35370871278" target="_blank">2026-09-18 16:50:44</a></td></tr>
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
