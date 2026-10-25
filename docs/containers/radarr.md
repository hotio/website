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
<tr><td><div id="tag7307" onclick="CopyToClipboard('tag7307');return false;" class="tag-decoration">nightly</div><div id="tag25120" onclick="CopyToClipboard('tag25120');return false;" class="tag-decoration">nightly-96578b7</div><div id="tag9689" onclick="CopyToClipboard('tag9689');return false;" class="tag-decoration">nightly-7.0.0.10815</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/96578b71c5dc6cd3db596ba003000baeda047bd6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/40166170450" target="_blank">2026-10-25 05:36:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28823" onclick="CopyToClipboard('tag28823');return false;" class="tag-decoration">release</div><div id="tag21457" onclick="CopyToClipboard('tag21457');return false;" class="tag-decoration">release-6adbcc4</div><div id="tag17839" onclick="CopyToClipboard('tag17839');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/6adbcc4ffbf580ef0b62b4aabf87b8fed6eb53fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/40084922926" target="_blank">2026-10-24 10:11:24</a></td></tr>
<tr><td><div id="tag27326" onclick="CopyToClipboard('tag27326');return false;" class="tag-decoration">testing</div><div id="tag23219" onclick="CopyToClipboard('tag23219');return false;" class="tag-decoration">testing-4fb9850</div><div id="tag6539" onclick="CopyToClipboard('tag6539');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/4fb98500ac4b2cde646c7d2e4abd780c19fa1907" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/40084923168" target="_blank">2026-10-24 10:11:24</a></td></tr>
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
