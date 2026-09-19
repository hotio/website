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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20311" onclick="CopyToClipboard('tag20311');return false;" class="tag-decoration">release</div><div id="tag3157" onclick="CopyToClipboard('tag3157');return false;" class="tag-decoration">release-9d48c54</div><div id="tag11239" onclick="CopyToClipboard('tag11239');return false;" class="tag-decoration">release-0.24.2619</div><div id="tag6783" onclick="CopyToClipboard('tag6783');return false;" class="tag-decoration">release-v0</div><div id="tag197" onclick="CopyToClipboard('tag197');return false;" class="tag-decoration">release-v0.24</div><div id="tag14254" onclick="CopyToClipboard('tag14254');return false;" class="tag-decoration">release-v0.24.2619</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9d48c54dcdccc7687397faf4f6207294a6168d64" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35370874367" target="_blank">2026-09-18 16:50:47</a></td></tr>
<tr><td><div id="tag2557" onclick="CopyToClipboard('tag2557');return false;" class="tag-decoration">testing</div><div id="tag32229" onclick="CopyToClipboard('tag32229');return false;" class="tag-decoration">testing-e108e24</div><div id="tag1596" onclick="CopyToClipboard('tag1596');return false;" class="tag-decoration">testing-0.24.2624</div><div id="tag29523" onclick="CopyToClipboard('tag29523');return false;" class="tag-decoration">testing-v0</div><div id="tag23062" onclick="CopyToClipboard('tag23062');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12821" onclick="CopyToClipboard('tag12821');return false;" class="tag-decoration">testing-v0.24.2624</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e108e245e8d8e94ab00f969fb11ce333de0fe8de" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35436255688" target="_blank">2026-09-19 10:01:08</a></td></tr>
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
