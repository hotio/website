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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26128" onclick="CopyToClipboard('tag26128');return false;" class="tag-decoration">release</div><div id="tag24278" onclick="CopyToClipboard('tag24278');return false;" class="tag-decoration">release-ac8b57d</div><div id="tag20947" onclick="CopyToClipboard('tag20947');return false;" class="tag-decoration">release-0.24.2040</div><div id="tag5423" onclick="CopyToClipboard('tag5423');return false;" class="tag-decoration">release-v0</div><div id="tag20429" onclick="CopyToClipboard('tag20429');return false;" class="tag-decoration">release-v0.24</div><div id="tag8365" onclick="CopyToClipboard('tag8365');return false;" class="tag-decoration">release-v0.24.2040</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ac8b57de36f6df09c980d65793540e176bd56993" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27191337184" target="_blank">2026-06-09 07:39:09</a></td></tr>
<tr><td><div id="tag7856" onclick="CopyToClipboard('tag7856');return false;" class="tag-decoration">testing</div><div id="tag18657" onclick="CopyToClipboard('tag18657');return false;" class="tag-decoration">testing-5560600</div><div id="tag11678" onclick="CopyToClipboard('tag11678');return false;" class="tag-decoration">testing-0.24.2033</div><div id="tag19690" onclick="CopyToClipboard('tag19690');return false;" class="tag-decoration">testing-v0</div><div id="tag1327" onclick="CopyToClipboard('tag1327');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16216" onclick="CopyToClipboard('tag16216');return false;" class="tag-decoration">testing-v0.24.2033</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/55606008e5d64bdbe38ea18f3c958159ca3e30a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27131199112" target="_blank">2026-06-08 10:20:59</a></td></tr>
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
