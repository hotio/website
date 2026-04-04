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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24196" onclick="CopyToClipboard('tag24196');return false;" class="tag-decoration">release</div><div id="tag25587" onclick="CopyToClipboard('tag25587');return false;" class="tag-decoration">release-0215b54</div><div id="tag24806" onclick="CopyToClipboard('tag24806');return false;" class="tag-decoration">release-0.24.1528</div><div id="tag4855" onclick="CopyToClipboard('tag4855');return false;" class="tag-decoration">release-v0</div><div id="tag9215" onclick="CopyToClipboard('tag9215');return false;" class="tag-decoration">release-v0.24</div><div id="tag3293" onclick="CopyToClipboard('tag3293');return false;" class="tag-decoration">release-v0.24.1528</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0215b54d4f659e16269550dcada1be3b2c872863" target="_blank">Version update: 0.24.1526 => 0.24.1528</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23936385689" target="_blank">2026-04-03 06:18:48</a></td></tr>
<tr><td><div id="tag18386" onclick="CopyToClipboard('tag18386');return false;" class="tag-decoration">testing</div><div id="tag9180" onclick="CopyToClipboard('tag9180');return false;" class="tag-decoration">testing-d06e8af</div><div id="tag13757" onclick="CopyToClipboard('tag13757');return false;" class="tag-decoration">testing-0.24.1537</div><div id="tag2861" onclick="CopyToClipboard('tag2861');return false;" class="tag-decoration">testing-v0</div><div id="tag15769" onclick="CopyToClipboard('tag15769');return false;" class="tag-decoration">testing-v0.24</div><div id="tag812" onclick="CopyToClipboard('tag812');return false;" class="tag-decoration">testing-v0.24.1537</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d06e8af38ebeb909e354047350f4d9d7cb61359b" target="_blank">Version update: 0.24.1528 => 0.24.1537</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23972769680" target="_blank">2026-04-04 06:00:44</a></td></tr>
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
