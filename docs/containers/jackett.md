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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag407" onclick="CopyToClipboard('tag407');return false;" class="tag-decoration">release</div><div id="tag25643" onclick="CopyToClipboard('tag25643');return false;" class="tag-decoration">release-fce74ad</div><div id="tag25520" onclick="CopyToClipboard('tag25520');return false;" class="tag-decoration">release-0.24.1127</div><div id="tag6609" onclick="CopyToClipboard('tag6609');return false;" class="tag-decoration">release-v0</div><div id="tag16100" onclick="CopyToClipboard('tag16100');return false;" class="tag-decoration">release-v0.24</div><div id="tag25055" onclick="CopyToClipboard('tag25055');return false;" class="tag-decoration">release-v0.24.1127</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fce74ad88a20516b08847383118c5c76ba372037" target="_blank">Version update: 0.24.1124 => 0.24.1127</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22057301867" target="_blank">2026-02-16 09:32:42</a></td></tr>
<tr><td><div id="tag19080" onclick="CopyToClipboard('tag19080');return false;" class="tag-decoration">testing</div><div id="tag11424" onclick="CopyToClipboard('tag11424');return false;" class="tag-decoration">testing-26ce03d</div><div id="tag10149" onclick="CopyToClipboard('tag10149');return false;" class="tag-decoration">testing-0.24.1127</div><div id="tag29478" onclick="CopyToClipboard('tag29478');return false;" class="tag-decoration">testing-v0</div><div id="tag12889" onclick="CopyToClipboard('tag12889');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30346" onclick="CopyToClipboard('tag30346');return false;" class="tag-decoration">testing-v0.24.1127</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/26ce03da1f9a2e1ca7af3c26b02018cc83fc693d" target="_blank">Version update: 0.24.1124 => 0.24.1127</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22057302801" target="_blank">2026-02-16 09:32:45</a></td></tr>
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
