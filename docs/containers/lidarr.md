---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag11138" onclick="CopyToClipboard('tag11138');return false;" class="tag-decoration">nightly</div><div id="tag27959" onclick="CopyToClipboard('tag27959');return false;" class="tag-decoration">nightly-33aec34</div><div id="tag17786" onclick="CopyToClipboard('tag17786');return false;" class="tag-decoration">nightly-3.1.2.4939</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/33aec34a5655ed8b153aa43fd67bb3777898f96b" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25707160275" target="_blank">2026-05-12 01:14:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8698" onclick="CopyToClipboard('tag8698');return false;" class="tag-decoration">release</div><div id="tag18026" onclick="CopyToClipboard('tag18026');return false;" class="tag-decoration">release-7722fb1</div><div id="tag14957" onclick="CopyToClipboard('tag14957');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/7722fb1f2603843fd8707e7c5d4c21180a7d5a16" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25701812599" target="_blank">2026-05-11 22:46:32</a></td></tr>
<tr><td><div id="tag19930" onclick="CopyToClipboard('tag19930');return false;" class="tag-decoration">testing</div><div id="tag17942" onclick="CopyToClipboard('tag17942');return false;" class="tag-decoration">testing-d86f4b6</div><div id="tag26429" onclick="CopyToClipboard('tag26429');return false;" class="tag-decoration">testing-3.1.2.4938</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/d86f4b60d743f6d5f50d62d1399d8c1f26338ffb" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25707168419" target="_blank">2026-05-12 01:15:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
