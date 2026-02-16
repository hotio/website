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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32598" onclick="CopyToClipboard('tag32598');return false;" class="tag-decoration">release</div><div id="tag27866" onclick="CopyToClipboard('tag27866');return false;" class="tag-decoration">release-fce74ad</div><div id="tag32150" onclick="CopyToClipboard('tag32150');return false;" class="tag-decoration">release-0.24.1127</div><div id="tag30306" onclick="CopyToClipboard('tag30306');return false;" class="tag-decoration">release-v0</div><div id="tag4493" onclick="CopyToClipboard('tag4493');return false;" class="tag-decoration">release-v0.24</div><div id="tag17840" onclick="CopyToClipboard('tag17840');return false;" class="tag-decoration">release-v0.24.1127</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fce74ad88a20516b08847383118c5c76ba372037" target="_blank">Version update: 0.24.1124 => 0.24.1127</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22057301867" target="_blank">2026-02-16 09:32:42</a></td></tr>
<tr><td><div id="tag2132" onclick="CopyToClipboard('tag2132');return false;" class="tag-decoration">testing</div><div id="tag2808" onclick="CopyToClipboard('tag2808');return false;" class="tag-decoration">testing-2b07b9f</div><div id="tag2440" onclick="CopyToClipboard('tag2440');return false;" class="tag-decoration">testing-0.24.1124</div><div id="tag1335" onclick="CopyToClipboard('tag1335');return false;" class="tag-decoration">testing-v0</div><div id="tag30192" onclick="CopyToClipboard('tag30192');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9213" onclick="CopyToClipboard('tag9213');return false;" class="tag-decoration">testing-v0.24.1124</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/2b07b9fac7509242990b7f746f2982a6b4801563" target="_blank">Version update: 0.24.1113 => 0.24.1124</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22030830488" target="_blank">2026-02-15 06:09:18</a></td></tr>
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
