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
<tr><td><div id="tag12042" onclick="CopyToClipboard('tag12042');return false;" class="tag-decoration">nightly</div><div id="tag65" onclick="CopyToClipboard('tag65');return false;" class="tag-decoration">nightly-f4ebafc</div><div id="tag15335" onclick="CopyToClipboard('tag15335');return false;" class="tag-decoration">nightly-6.4.4.10704</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/f4ebafc524b243c698ba03dc381d586dd6724fd2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35938153029" target="_blank">2026-09-24 00:22:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11436" onclick="CopyToClipboard('tag11436');return false;" class="tag-decoration">release</div><div id="tag11138" onclick="CopyToClipboard('tag11138');return false;" class="tag-decoration">release-f7ab696</div><div id="tag6636" onclick="CopyToClipboard('tag6636');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/f7ab6963922c086756db596ce2e8f0901fcf88a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/36761198136" target="_blank">2026-09-30 18:48:18</a></td></tr>
<tr><td><div id="tag20487" onclick="CopyToClipboard('tag20487');return false;" class="tag-decoration">testing</div><div id="tag11080" onclick="CopyToClipboard('tag11080');return false;" class="tag-decoration">testing-1f4ce12</div><div id="tag24147" onclick="CopyToClipboard('tag24147');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/1f4ce12c328f2fddbb9104e90e296445076c838b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/36761194146" target="_blank">2026-09-30 18:48:16</a></td></tr>
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
