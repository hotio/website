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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2034" onclick="CopyToClipboard('tag2034');return false;" class="tag-decoration">release</div><div id="tag3158" onclick="CopyToClipboard('tag3158');return false;" class="tag-decoration">release-8e21451</div><div id="tag27431" onclick="CopyToClipboard('tag27431');return false;" class="tag-decoration">release-0.24.2237</div><div id="tag6751" onclick="CopyToClipboard('tag6751');return false;" class="tag-decoration">release-v0</div><div id="tag24790" onclick="CopyToClipboard('tag24790');return false;" class="tag-decoration">release-v0.24</div><div id="tag27098" onclick="CopyToClipboard('tag27098');return false;" class="tag-decoration">release-v0.24.2237</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8e2145140d4cb57842ea7b0991fcf973642dcbaa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29679128587" target="_blank">2026-07-19 08:02:25</a></td></tr>
<tr><td><div id="tag436" onclick="CopyToClipboard('tag436');return false;" class="tag-decoration">testing</div><div id="tag21699" onclick="CopyToClipboard('tag21699');return false;" class="tag-decoration">testing-c1a4b59</div><div id="tag12922" onclick="CopyToClipboard('tag12922');return false;" class="tag-decoration">testing-0.24.2237</div><div id="tag27664" onclick="CopyToClipboard('tag27664');return false;" class="tag-decoration">testing-v0</div><div id="tag28136" onclick="CopyToClipboard('tag28136');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27225" onclick="CopyToClipboard('tag27225');return false;" class="tag-decoration">testing-v0.24.2237</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c1a4b594d73058e093a4648be3030ad9724f69f5" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29681103997" target="_blank">2026-07-19 09:10:18</a></td></tr>
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
