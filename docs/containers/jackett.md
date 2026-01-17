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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2639" onclick="CopyToClipboard('tag2639');return false;" class="tag-decoration">release</div><div id="tag9786" onclick="CopyToClipboard('tag9786');return false;" class="tag-decoration">release-23b8ebe</div><div id="tag5223" onclick="CopyToClipboard('tag5223');return false;" class="tag-decoration">release-0.24.868</div><div id="tag32466" onclick="CopyToClipboard('tag32466');return false;" class="tag-decoration">release-v0</div><div id="tag14652" onclick="CopyToClipboard('tag14652');return false;" class="tag-decoration">release-v0.24</div><div id="tag12928" onclick="CopyToClipboard('tag12928');return false;" class="tag-decoration">release-v0.24.868</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/23b8ebe76682dc91fb87411a0df798f28ac5cf08" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21090389388" target="_blank">2026-01-17 07:01:05</a></td></tr>
<tr><td><div id="tag16658" onclick="CopyToClipboard('tag16658');return false;" class="tag-decoration">testing</div><div id="tag21914" onclick="CopyToClipboard('tag21914');return false;" class="tag-decoration">testing-f0cb1b9</div><div id="tag11600" onclick="CopyToClipboard('tag11600');return false;" class="tag-decoration">testing-0.24.868</div><div id="tag6634" onclick="CopyToClipboard('tag6634');return false;" class="tag-decoration">testing-v0</div><div id="tag21938" onclick="CopyToClipboard('tag21938');return false;" class="tag-decoration">testing-v0.24</div><div id="tag6906" onclick="CopyToClipboard('tag6906');return false;" class="tag-decoration">testing-v0.24.868</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f0cb1b93f64b4bb65f80dc63d347e1f1a239b2f5" target="_blank">Version update: 0.24.863 => 0.24.868</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21089542046" target="_blank">2026-01-17 05:57:06</a></td></tr>
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
