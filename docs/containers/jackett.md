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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1241" onclick="CopyToClipboard('tag1241');return false;" class="tag-decoration">release</div><div id="tag39" onclick="CopyToClipboard('tag39');return false;" class="tag-decoration">release-74896e9</div><div id="tag4771" onclick="CopyToClipboard('tag4771');return false;" class="tag-decoration">release-0.24.2918</div><div id="tag11802" onclick="CopyToClipboard('tag11802');return false;" class="tag-decoration">release-v0</div><div id="tag29033" onclick="CopyToClipboard('tag29033');return false;" class="tag-decoration">release-v0.24</div><div id="tag8018" onclick="CopyToClipboard('tag8018');return false;" class="tag-decoration">release-v0.24.2918</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/74896e925b06a8ab21dac281caf53239c158eec0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40319027039" target="_blank">2026-10-26 11:58:35</a></td></tr>
<tr><td><div id="tag32627" onclick="CopyToClipboard('tag32627');return false;" class="tag-decoration">testing</div><div id="tag8504" onclick="CopyToClipboard('tag8504');return false;" class="tag-decoration">testing-0be9b7c</div><div id="tag12451" onclick="CopyToClipboard('tag12451');return false;" class="tag-decoration">testing-0.24.2918</div><div id="tag29373" onclick="CopyToClipboard('tag29373');return false;" class="tag-decoration">testing-v0</div><div id="tag32360" onclick="CopyToClipboard('tag32360');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4581" onclick="CopyToClipboard('tag4581');return false;" class="tag-decoration">testing-v0.24.2918</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0be9b7cdc7448655f6b17ba8ef76974420b8cb2a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40319028818" target="_blank">2026-10-26 11:58:36</a></td></tr>
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
