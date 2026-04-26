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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10246" onclick="CopyToClipboard('tag10246');return false;" class="tag-decoration">release</div><div id="tag28841" onclick="CopyToClipboard('tag28841');return false;" class="tag-decoration">release-a028a0d</div><div id="tag8407" onclick="CopyToClipboard('tag8407');return false;" class="tag-decoration">release-0.24.1764</div><div id="tag21507" onclick="CopyToClipboard('tag21507');return false;" class="tag-decoration">release-v0</div><div id="tag4583" onclick="CopyToClipboard('tag4583');return false;" class="tag-decoration">release-v0.24</div><div id="tag10266" onclick="CopyToClipboard('tag10266');return false;" class="tag-decoration">release-v0.24.1764</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a028a0d1587708023b5550fa796b4b99bb0e766d" target="_blank">Version update: 0.24.1736 => 0.24.1764</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24925072558" target="_blank">2026-04-25 06:51:15</a></td></tr>
<tr><td><div id="tag22879" onclick="CopyToClipboard('tag22879');return false;" class="tag-decoration">testing</div><div id="tag22061" onclick="CopyToClipboard('tag22061');return false;" class="tag-decoration">testing-ad04672</div><div id="tag22660" onclick="CopyToClipboard('tag22660');return false;" class="tag-decoration">testing-0.24.1779</div><div id="tag12524" onclick="CopyToClipboard('tag12524');return false;" class="tag-decoration">testing-v0</div><div id="tag2430" onclick="CopyToClipboard('tag2430');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31841" onclick="CopyToClipboard('tag31841');return false;" class="tag-decoration">testing-v0.24.1779</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ad046724586ca789a581d5e83b78748e497193f7" target="_blank">Version update: 0.24.1764 => 0.24.1779</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24949926212" target="_blank">2026-04-26 06:15:12</a></td></tr>
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
