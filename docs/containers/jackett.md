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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32566" onclick="CopyToClipboard('tag32566');return false;" class="tag-decoration">release</div><div id="tag23879" onclick="CopyToClipboard('tag23879');return false;" class="tag-decoration">release-f5f7d42</div><div id="tag6765" onclick="CopyToClipboard('tag6765');return false;" class="tag-decoration">release-0.24.1870</div><div id="tag31632" onclick="CopyToClipboard('tag31632');return false;" class="tag-decoration">release-v0</div><div id="tag16254" onclick="CopyToClipboard('tag16254');return false;" class="tag-decoration">release-v0.24</div><div id="tag12626" onclick="CopyToClipboard('tag12626');return false;" class="tag-decoration">release-v0.24.1870</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f5f7d422e4752bf685947089bd32173190cdb67d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25983260041" target="_blank">2026-05-17 06:15:10</a></td></tr>
<tr><td><div id="tag27703" onclick="CopyToClipboard('tag27703');return false;" class="tag-decoration">testing</div><div id="tag18818" onclick="CopyToClipboard('tag18818');return false;" class="tag-decoration">testing-6fd628b</div><div id="tag18502" onclick="CopyToClipboard('tag18502');return false;" class="tag-decoration">testing-0.24.1870</div><div id="tag12271" onclick="CopyToClipboard('tag12271');return false;" class="tag-decoration">testing-v0</div><div id="tag21694" onclick="CopyToClipboard('tag21694');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27726" onclick="CopyToClipboard('tag27726');return false;" class="tag-decoration">testing-v0.24.1870</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6fd628b28f5ced82c7ac215d001f6aeee5d40484" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25983258610" target="_blank">2026-05-17 06:15:06</a></td></tr>
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
