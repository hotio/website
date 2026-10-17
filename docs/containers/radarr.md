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
<tr><td><div id="tag29043" onclick="CopyToClipboard('tag29043');return false;" class="tag-decoration">nightly</div><div id="tag15429" onclick="CopyToClipboard('tag15429');return false;" class="tag-decoration">nightly-4a86d1c</div><div id="tag26165" onclick="CopyToClipboard('tag26165');return false;" class="tag-decoration">nightly-7.0.0.10779</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/4a86d1cd2c852e57b48b4edb8818d125a4873b03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39039027669" target="_blank">2026-10-17 14:02:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14804" onclick="CopyToClipboard('tag14804');return false;" class="tag-decoration">release</div><div id="tag14023" onclick="CopyToClipboard('tag14023');return false;" class="tag-decoration">release-9f1d7ba</div><div id="tag15834" onclick="CopyToClipboard('tag15834');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/9f1d7baf70585f632d8141332d9eb11b4a741a3e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/37559968266" target="_blank">2026-10-07 02:01:29</a></td></tr>
<tr><td><div id="tag9328" onclick="CopyToClipboard('tag9328');return false;" class="tag-decoration">testing</div><div id="tag18845" onclick="CopyToClipboard('tag18845');return false;" class="tag-decoration">testing-81ebc35</div><div id="tag20983" onclick="CopyToClipboard('tag20983');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/81ebc35b7f63d13c24f89b325f8b0747edf8e159" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/37559962795" target="_blank">2026-10-07 02:01:25</a></td></tr>
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
