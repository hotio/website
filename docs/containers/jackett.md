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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15188" onclick="CopyToClipboard('tag15188');return false;" class="tag-decoration">release</div><div id="tag21163" onclick="CopyToClipboard('tag21163');return false;" class="tag-decoration">release-56455db</div><div id="tag22874" onclick="CopyToClipboard('tag22874');return false;" class="tag-decoration">release-0.24.1649</div><div id="tag13646" onclick="CopyToClipboard('tag13646');return false;" class="tag-decoration">release-v0</div><div id="tag5058" onclick="CopyToClipboard('tag5058');return false;" class="tag-decoration">release-v0.24</div><div id="tag31029" onclick="CopyToClipboard('tag31029');return false;" class="tag-decoration">release-v0.24.1649</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/56455dbe4cd524973469d944e73d7a275ba90107" target="_blank">Version update: 0.24.1641 => 0.24.1649</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24765384988" target="_blank">2026-04-22 07:13:26</a></td></tr>
<tr><td><div id="tag2890" onclick="CopyToClipboard('tag2890');return false;" class="tag-decoration">testing</div><div id="tag8721" onclick="CopyToClipboard('tag8721');return false;" class="tag-decoration">testing-10e553d</div><div id="tag20978" onclick="CopyToClipboard('tag20978');return false;" class="tag-decoration">testing-0.24.1731</div><div id="tag242" onclick="CopyToClipboard('tag242');return false;" class="tag-decoration">testing-v0</div><div id="tag11767" onclick="CopyToClipboard('tag11767');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2638" onclick="CopyToClipboard('tag2638');return false;" class="tag-decoration">testing-v0.24.1731</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/10e553d9d6d4f1cb346d12ce790deb2c62c5653a" target="_blank">Version update: 0.24.1649 => 0.24.1731</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24819815410" target="_blank">2026-04-23 06:09:00</a></td></tr>
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
