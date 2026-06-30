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
<tr><td><div id="tag20650" onclick="CopyToClipboard('tag20650');return false;" class="tag-decoration">nightly</div><div id="tag14941" onclick="CopyToClipboard('tag14941');return false;" class="tag-decoration">nightly-1243642</div><div id="tag17222" onclick="CopyToClipboard('tag17222');return false;" class="tag-decoration">nightly-6.3.0.10498</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/1243642fb82c79ac15f559c6b41f6fd803b0ae6a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28441683164" target="_blank">2026-06-30 11:42:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19745" onclick="CopyToClipboard('tag19745');return false;" class="tag-decoration">release</div><div id="tag24582" onclick="CopyToClipboard('tag24582');return false;" class="tag-decoration">release-7e3ba96</div><div id="tag18076" onclick="CopyToClipboard('tag18076');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/7e3ba961713cd269893f839c3d9e50f5f35f6089" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28441681971" target="_blank">2026-06-30 11:42:36</a></td></tr>
<tr><td><div id="tag11229" onclick="CopyToClipboard('tag11229');return false;" class="tag-decoration">testing</div><div id="tag26942" onclick="CopyToClipboard('tag26942');return false;" class="tag-decoration">testing-325bcee</div><div id="tag17879" onclick="CopyToClipboard('tag17879');return false;" class="tag-decoration">testing-6.2.1.10461</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/325bcee0c76624ecc3f0932ad4750013c6836135" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28441683052" target="_blank">2026-06-30 11:42:37</a></td></tr>
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
