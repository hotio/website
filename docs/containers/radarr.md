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
<tr><td><div id="tag24505" onclick="CopyToClipboard('tag24505');return false;" class="tag-decoration">nightly</div><div id="tag21996" onclick="CopyToClipboard('tag21996');return false;" class="tag-decoration">nightly-dadb3bd</div><div id="tag3090" onclick="CopyToClipboard('tag3090');return false;" class="tag-decoration">nightly-6.4.3.10645</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/dadb3bdb498a42ca7275108ad886f64cc538a7ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33480804108" target="_blank">2026-09-01 07:09:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9558" onclick="CopyToClipboard('tag9558');return false;" class="tag-decoration">release</div><div id="tag3478" onclick="CopyToClipboard('tag3478');return false;" class="tag-decoration">release-f15d1f2</div><div id="tag6246" onclick="CopyToClipboard('tag6246');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/f15d1f2e66295cab318457032764cf5259c1919c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32917450857" target="_blank">2026-08-26 01:02:24</a></td></tr>
<tr><td><div id="tag24458" onclick="CopyToClipboard('tag24458');return false;" class="tag-decoration">testing</div><div id="tag30576" onclick="CopyToClipboard('tag30576');return false;" class="tag-decoration">testing-f7c7ad3</div><div id="tag12060" onclick="CopyToClipboard('tag12060');return false;" class="tag-decoration">testing-6.4.3.10645</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/f7c7ad36ac1ea634b255f72119e6fa642a45edc6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33445820012" target="_blank">2026-08-31 22:21:18</a></td></tr>
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
