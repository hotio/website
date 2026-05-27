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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26642" onclick="CopyToClipboard('tag26642');return false;" class="tag-decoration">release</div><div id="tag8803" onclick="CopyToClipboard('tag8803');return false;" class="tag-decoration">release-c70f1ff</div><div id="tag25778" onclick="CopyToClipboard('tag25778');return false;" class="tag-decoration">release-0.24.1954</div><div id="tag18404" onclick="CopyToClipboard('tag18404');return false;" class="tag-decoration">release-v0</div><div id="tag31581" onclick="CopyToClipboard('tag31581');return false;" class="tag-decoration">release-v0.24</div><div id="tag655" onclick="CopyToClipboard('tag655');return false;" class="tag-decoration">release-v0.24.1954</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c70f1ffacd995853fb3fe8fb9b5e9e45a87bd62d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26439013326" target="_blank">2026-05-26 07:37:41</a></td></tr>
<tr><td><div id="tag20648" onclick="CopyToClipboard('tag20648');return false;" class="tag-decoration">testing</div><div id="tag9845" onclick="CopyToClipboard('tag9845');return false;" class="tag-decoration">testing-7bcfa3f</div><div id="tag3343" onclick="CopyToClipboard('tag3343');return false;" class="tag-decoration">testing-0.24.1957</div><div id="tag10870" onclick="CopyToClipboard('tag10870');return false;" class="tag-decoration">testing-v0</div><div id="tag10331" onclick="CopyToClipboard('tag10331');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8774" onclick="CopyToClipboard('tag8774');return false;" class="tag-decoration">testing-v0.24.1957</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7bcfa3f108d41e7cdf37666e11a3d1b4fc631d3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26495948868" target="_blank">2026-05-27 06:57:29</a></td></tr>
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
