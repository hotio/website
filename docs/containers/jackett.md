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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8139" onclick="CopyToClipboard('tag8139');return false;" class="tag-decoration">release</div><div id="tag26178" onclick="CopyToClipboard('tag26178');return false;" class="tag-decoration">release-d0c8e0d</div><div id="tag26425" onclick="CopyToClipboard('tag26425');return false;" class="tag-decoration">release-0.24.3036</div><div id="tag32537" onclick="CopyToClipboard('tag32537');return false;" class="tag-decoration">release-v0</div><div id="tag21098" onclick="CopyToClipboard('tag21098');return false;" class="tag-decoration">release-v0.24</div><div id="tag3919" onclick="CopyToClipboard('tag3919');return false;" class="tag-decoration">release-v0.24.3036</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d0c8e0de6131202e15ea9c7924e4e06b4dcebf61" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42579640164" target="_blank">2026-11-09 07:29:11</a></td></tr>
<tr><td><div id="tag31767" onclick="CopyToClipboard('tag31767');return false;" class="tag-decoration">testing</div><div id="tag30109" onclick="CopyToClipboard('tag30109');return false;" class="tag-decoration">testing-47f3394</div><div id="tag1418" onclick="CopyToClipboard('tag1418');return false;" class="tag-decoration">testing-0.24.3042</div><div id="tag20069" onclick="CopyToClipboard('tag20069');return false;" class="tag-decoration">testing-v0</div><div id="tag1140" onclick="CopyToClipboard('tag1140');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10683" onclick="CopyToClipboard('tag10683');return false;" class="tag-decoration">testing-v0.24.3042</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/47f3394376fd7b822e15581c21d92d3b80cdbe50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42787036331" target="_blank">2026-11-10 09:00:05</a></td></tr>
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
