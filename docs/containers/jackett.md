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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7912" onclick="CopyToClipboard('tag7912');return false;" class="tag-decoration">release</div><div id="tag17997" onclick="CopyToClipboard('tag17997');return false;" class="tag-decoration">release-7a9cabe</div><div id="tag24575" onclick="CopyToClipboard('tag24575');return false;" class="tag-decoration">release-0.24.1234</div><div id="tag29371" onclick="CopyToClipboard('tag29371');return false;" class="tag-decoration">release-v0</div><div id="tag26010" onclick="CopyToClipboard('tag26010');return false;" class="tag-decoration">release-v0.24</div><div id="tag29067" onclick="CopyToClipboard('tag29067');return false;" class="tag-decoration">release-v0.24.1234</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7a9cabeb631e748cfbad2627d2113c184e43224e" target="_blank">Version update: 0.24.1226 => 0.24.1234</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22537207760" target="_blank">2026-03-01 05:57:36</a></td></tr>
<tr><td><div id="tag19030" onclick="CopyToClipboard('tag19030');return false;" class="tag-decoration">testing</div><div id="tag29206" onclick="CopyToClipboard('tag29206');return false;" class="tag-decoration">testing-fe9fb0f</div><div id="tag26553" onclick="CopyToClipboard('tag26553');return false;" class="tag-decoration">testing-0.24.1234</div><div id="tag20596" onclick="CopyToClipboard('tag20596');return false;" class="tag-decoration">testing-v0</div><div id="tag28323" onclick="CopyToClipboard('tag28323');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13327" onclick="CopyToClipboard('tag13327');return false;" class="tag-decoration">testing-v0.24.1234</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fe9fb0f95d247408c3b2f5babb2ed80ed9a69397" target="_blank">Version update: 0.24.1226 => 0.24.1234</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22537208011" target="_blank">2026-03-01 05:57:37</a></td></tr>
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
