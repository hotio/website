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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">release</div><div id="tag12325" onclick="CopyToClipboard('tag12325');return false;" class="tag-decoration">release-2ddb2e4</div><div id="tag18559" onclick="CopyToClipboard('tag18559');return false;" class="tag-decoration">release-0.24.1431</div><div id="tag9625" onclick="CopyToClipboard('tag9625');return false;" class="tag-decoration">release-v0</div><div id="tag23831" onclick="CopyToClipboard('tag23831');return false;" class="tag-decoration">release-v0.24</div><div id="tag8319" onclick="CopyToClipboard('tag8319');return false;" class="tag-decoration">release-v0.24.1431</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2ddb2e48aed632334bbdee53efd5d7ca9da6049c" target="_blank">Version update: 0.24.1427 => 0.24.1431</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23397056203" target="_blank">2026-03-22 06:07:08</a></td></tr>
<tr><td><div id="tag6664" onclick="CopyToClipboard('tag6664');return false;" class="tag-decoration">testing</div><div id="tag2495" onclick="CopyToClipboard('tag2495');return false;" class="tag-decoration">testing-fc2c62f</div><div id="tag21785" onclick="CopyToClipboard('tag21785');return false;" class="tag-decoration">testing-0.24.1440</div><div id="tag20009" onclick="CopyToClipboard('tag20009');return false;" class="tag-decoration">testing-v0</div><div id="tag909" onclick="CopyToClipboard('tag909');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28739" onclick="CopyToClipboard('tag28739');return false;" class="tag-decoration">testing-v0.24.1440</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fc2c62f0df219fa01615d81c121c67da32a1bf7c" target="_blank">Version update: 0.24.1431 => 0.24.1440</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23425105748" target="_blank">2026-03-23 06:51:55</a></td></tr>
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
