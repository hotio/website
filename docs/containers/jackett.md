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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23035" onclick="CopyToClipboard('tag23035');return false;" class="tag-decoration">release</div><div id="tag8259" onclick="CopyToClipboard('tag8259');return false;" class="tag-decoration">release-4c8b498</div><div id="tag29427" onclick="CopyToClipboard('tag29427');return false;" class="tag-decoration">release-0.24.1526</div><div id="tag3767" onclick="CopyToClipboard('tag3767');return false;" class="tag-decoration">release-v0</div><div id="tag32347" onclick="CopyToClipboard('tag32347');return false;" class="tag-decoration">release-v0.24</div><div id="tag9821" onclick="CopyToClipboard('tag9821');return false;" class="tag-decoration">release-v0.24.1526</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4c8b498adc085524eaf03242a8a3f967bf500eb0" target="_blank">Version update: 0.24.1519 => 0.24.1526</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23887959788" target="_blank">2026-04-02 06:49:54</a></td></tr>
<tr><td><div id="tag28656" onclick="CopyToClipboard('tag28656');return false;" class="tag-decoration">testing</div><div id="tag11879" onclick="CopyToClipboard('tag11879');return false;" class="tag-decoration">testing-72f80f9</div><div id="tag25455" onclick="CopyToClipboard('tag25455');return false;" class="tag-decoration">testing-0.24.1519</div><div id="tag21919" onclick="CopyToClipboard('tag21919');return false;" class="tag-decoration">testing-v0</div><div id="tag2766" onclick="CopyToClipboard('tag2766');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16212" onclick="CopyToClipboard('tag16212');return false;" class="tag-decoration">testing-v0.24.1519</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/72f80f99d2806784061d0567f9a3eb1ee86c1f0c" target="_blank">Version update: 0.24.1502 => 0.24.1519</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23837674476" target="_blank">2026-04-01 07:41:43</a></td></tr>
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
