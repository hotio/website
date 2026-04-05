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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13734" onclick="CopyToClipboard('tag13734');return false;" class="tag-decoration">release</div><div id="tag2509" onclick="CopyToClipboard('tag2509');return false;" class="tag-decoration">release-afb8ee9</div><div id="tag30613" onclick="CopyToClipboard('tag30613');return false;" class="tag-decoration">release-0.24.1537</div><div id="tag1025" onclick="CopyToClipboard('tag1025');return false;" class="tag-decoration">release-v0</div><div id="tag12430" onclick="CopyToClipboard('tag12430');return false;" class="tag-decoration">release-v0.24</div><div id="tag5990" onclick="CopyToClipboard('tag5990');return false;" class="tag-decoration">release-v0.24.1537</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/afb8ee943943e7ce53442936e32cccd8ae72231c" target="_blank">Version update: 0.24.1528 => 0.24.1537</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23972768962" target="_blank">2026-04-04 06:00:41</a></td></tr>
<tr><td><div id="tag8015" onclick="CopyToClipboard('tag8015');return false;" class="tag-decoration">testing</div><div id="tag206" onclick="CopyToClipboard('tag206');return false;" class="tag-decoration">testing-402421f</div><div id="tag4502" onclick="CopyToClipboard('tag4502');return false;" class="tag-decoration">testing-0.24.1539</div><div id="tag31724" onclick="CopyToClipboard('tag31724');return false;" class="tag-decoration">testing-v0</div><div id="tag32628" onclick="CopyToClipboard('tag32628');return false;" class="tag-decoration">testing-v0.24</div><div id="tag1565" onclick="CopyToClipboard('tag1565');return false;" class="tag-decoration">testing-v0.24.1539</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/402421fb893747e04aa3559b667bcbb0c484cf09" target="_blank">Version update: 0.24.1537 => 0.24.1539</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23997071425" target="_blank">2026-04-05 07:42:59</a></td></tr>
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
