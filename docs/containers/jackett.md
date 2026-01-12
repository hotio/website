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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23510" onclick="CopyToClipboard('tag23510');return false;" class="tag-decoration">release</div><div id="tag17657" onclick="CopyToClipboard('tag17657');return false;" class="tag-decoration">release-3b28b04</div><div id="tag26516" onclick="CopyToClipboard('tag26516');return false;" class="tag-decoration">release-0.24.831</div><div id="tag32159" onclick="CopyToClipboard('tag32159');return false;" class="tag-decoration">release-v0</div><div id="tag30706" onclick="CopyToClipboard('tag30706');return false;" class="tag-decoration">release-v0.24</div><div id="tag32589" onclick="CopyToClipboard('tag32589');return false;" class="tag-decoration">release-v0.24.831</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3b28b049110be907599d8e445fae2fcaaf08500e" target="_blank">Version update: 0.24.824 => 0.24.831</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20934718197" target="_blank">2026-01-12 20:56:41</a></td></tr>
<tr><td><div id="tag29592" onclick="CopyToClipboard('tag29592');return false;" class="tag-decoration">testing</div><div id="tag21766" onclick="CopyToClipboard('tag21766');return false;" class="tag-decoration">testing-0.24.824</div><div id="tag18131" onclick="CopyToClipboard('tag18131');return false;" class="tag-decoration">testing-b9ac3b4</div><div id="tag11653" onclick="CopyToClipboard('tag11653');return false;" class="tag-decoration">testing-v0</div><div id="tag19809" onclick="CopyToClipboard('tag19809');return false;" class="tag-decoration">testing-v0.24</div><div id="tag21129" onclick="CopyToClipboard('tag21129');return false;" class="tag-decoration">testing-v0.24.824</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b9ac3b490ac27e4de963990b092eb2b455ba24dd" target="_blank">Version update: 0.24.821 => 0.24.824</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20910401973" target="_blank">2026-01-12 06:44:09</a></td></tr>
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
