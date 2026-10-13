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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13939" onclick="CopyToClipboard('tag13939');return false;" class="tag-decoration">release</div><div id="tag14840" onclick="CopyToClipboard('tag14840');return false;" class="tag-decoration">release-8721635</div><div id="tag6405" onclick="CopyToClipboard('tag6405');return false;" class="tag-decoration">release-0.24.2830</div><div id="tag32488" onclick="CopyToClipboard('tag32488');return false;" class="tag-decoration">release-v0</div><div id="tag24673" onclick="CopyToClipboard('tag24673');return false;" class="tag-decoration">release-v0.24</div><div id="tag19296" onclick="CopyToClipboard('tag19296');return false;" class="tag-decoration">release-v0.24.2830</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/87216352342d71530b67cab8d34b82242fe56664" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38371417910" target="_blank">2026-10-13 08:45:06</a></td></tr>
<tr><td><div id="tag355" onclick="CopyToClipboard('tag355');return false;" class="tag-decoration">testing</div><div id="tag25827" onclick="CopyToClipboard('tag25827');return false;" class="tag-decoration">testing-8ada31d</div><div id="tag8222" onclick="CopyToClipboard('tag8222');return false;" class="tag-decoration">testing-0.24.2826</div><div id="tag19857" onclick="CopyToClipboard('tag19857');return false;" class="tag-decoration">testing-v0</div><div id="tag8998" onclick="CopyToClipboard('tag8998');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30684" onclick="CopyToClipboard('tag30684');return false;" class="tag-decoration">testing-v0.24.2826</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8ada31d50fa994a537ab536f6a6961796ee6cba5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38223556718" target="_blank">2026-10-12 08:26:13</a></td></tr>
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
