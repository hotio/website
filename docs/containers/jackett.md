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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1775" onclick="CopyToClipboard('tag1775');return false;" class="tag-decoration">release</div><div id="tag3359" onclick="CopyToClipboard('tag3359');return false;" class="tag-decoration">release-3daaba2</div><div id="tag16804" onclick="CopyToClipboard('tag16804');return false;" class="tag-decoration">release-0.24.1789</div><div id="tag14407" onclick="CopyToClipboard('tag14407');return false;" class="tag-decoration">release-v0</div><div id="tag26235" onclick="CopyToClipboard('tag26235');return false;" class="tag-decoration">release-v0.24</div><div id="tag1790" onclick="CopyToClipboard('tag1790');return false;" class="tag-decoration">release-v0.24.1789</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3daaba2077c638a5d77bdf96e60abd477c3cca34" target="_blank">Version update: 0.24.1787 => 0.24.1789</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25038153555" target="_blank">2026-04-28 06:45:26</a></td></tr>
<tr><td><div id="tag32430" onclick="CopyToClipboard('tag32430');return false;" class="tag-decoration">testing</div><div id="tag5850" onclick="CopyToClipboard('tag5850');return false;" class="tag-decoration">testing-7abed17</div><div id="tag17943" onclick="CopyToClipboard('tag17943');return false;" class="tag-decoration">testing-0.24.1795</div><div id="tag28631" onclick="CopyToClipboard('tag28631');return false;" class="tag-decoration">testing-v0</div><div id="tag14628" onclick="CopyToClipboard('tag14628');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2720" onclick="CopyToClipboard('tag2720');return false;" class="tag-decoration">testing-v0.24.1795</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7abed17e82469da7b04100d53659e85b2e6ec324" target="_blank">Version update: 0.24.1789 => 0.24.1795</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25096283853" target="_blank">2026-04-29 07:26:55</a></td></tr>
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
