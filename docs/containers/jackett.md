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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8735" onclick="CopyToClipboard('tag8735');return false;" class="tag-decoration">release</div><div id="tag27934" onclick="CopyToClipboard('tag27934');return false;" class="tag-decoration">release-6753cd7</div><div id="tag30406" onclick="CopyToClipboard('tag30406');return false;" class="tag-decoration">release-0.24.2467</div><div id="tag23747" onclick="CopyToClipboard('tag23747');return false;" class="tag-decoration">release-v0</div><div id="tag27417" onclick="CopyToClipboard('tag27417');return false;" class="tag-decoration">release-v0.24</div><div id="tag19126" onclick="CopyToClipboard('tag19126');return false;" class="tag-decoration">release-v0.24.2467</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6753cd788bbf4b63b5578ba2e48a2028a099a35d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32916479885" target="_blank">2026-08-26 00:47:19</a></td></tr>
<tr><td><div id="tag5913" onclick="CopyToClipboard('tag5913');return false;" class="tag-decoration">testing</div><div id="tag22572" onclick="CopyToClipboard('tag22572');return false;" class="tag-decoration">testing-33cc099</div><div id="tag4101" onclick="CopyToClipboard('tag4101');return false;" class="tag-decoration">testing-0.24.2475</div><div id="tag11483" onclick="CopyToClipboard('tag11483');return false;" class="tag-decoration">testing-v0</div><div id="tag16990" onclick="CopyToClipboard('tag16990');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11676" onclick="CopyToClipboard('tag11676');return false;" class="tag-decoration">testing-v0.24.2475</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/33cc09964cfc21191a059929ccfe198bb87b71d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32938660291" target="_blank">2026-08-26 06:33:17</a></td></tr>
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
