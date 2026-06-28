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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16138" onclick="CopyToClipboard('tag16138');return false;" class="tag-decoration">release</div><div id="tag20041" onclick="CopyToClipboard('tag20041');return false;" class="tag-decoration">release-6d59742</div><div id="tag28085" onclick="CopyToClipboard('tag28085');return false;" class="tag-decoration">release-0.24.2135</div><div id="tag15221" onclick="CopyToClipboard('tag15221');return false;" class="tag-decoration">release-v0</div><div id="tag12233" onclick="CopyToClipboard('tag12233');return false;" class="tag-decoration">release-v0.24</div><div id="tag31699" onclick="CopyToClipboard('tag31699');return false;" class="tag-decoration">release-v0.24.2135</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6d59742286fd5c4577d9e9ddf116cc7545e93609" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28316819133" target="_blank">2026-06-28 08:41:55</a></td></tr>
<tr><td><div id="tag25987" onclick="CopyToClipboard('tag25987');return false;" class="tag-decoration">testing</div><div id="tag28793" onclick="CopyToClipboard('tag28793');return false;" class="tag-decoration">testing-d8a87cd</div><div id="tag26407" onclick="CopyToClipboard('tag26407');return false;" class="tag-decoration">testing-0.24.2126</div><div id="tag28447" onclick="CopyToClipboard('tag28447');return false;" class="tag-decoration">testing-v0</div><div id="tag21360" onclick="CopyToClipboard('tag21360');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29429" onclick="CopyToClipboard('tag29429');return false;" class="tag-decoration">testing-v0.24.2126</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d8a87cded82d2870b2191cf684c67a0b096c8a90" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28281103618" target="_blank">2026-06-27 06:23:48</a></td></tr>
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
